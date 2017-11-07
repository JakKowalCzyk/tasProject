import { Injectable }   from "@angular/core";
import { Http }         from "@angular/http";

//services
import { RouteService }     from "../route/route.service";

//models
import { Car }              from "../../models/Car";
import { Engine }           from "../../models/Engine";
import { AuthService }      from "../auth/auth.service";
import {Events} from "ionic-angular";
import {HasResponse} from "../../pseudoTraits/hasResponse/HasResponse";
import {CarPipe} from "../../pipes/car/car.pipe";
import {FileTransfer, FileTransferObject, FileUploadOptions} from "@ionic-native/file-transfer";

@Injectable()
export class AdService extends HasResponse {

    brands          : Object            = {};
    brandsArray     : Array<string>     = [];
    categories      : Array<string>     = [];
    allCars         : Array<Car>        = [];

    contentHeaders  : Headers           = new Headers();

    constructor(
        private http            : Http,
        private routeService    : RouteService,
        private authService     : AuthService,
        private eventss         : Events,
        private carPipe         : CarPipe,
        private transfer        : FileTransfer,
    ) {
        super(eventss)
    }

    subscribeEvents() {
        this.eventss.subscribe('logged', () => { this.all() })
    }

    refresh() {
        this.all();
    }

    getBrands() {
        this.brands = {};
        this.http.get(this.routeService.routes.brands)
            .subscribe((res) => {
                for (let brand of res.json()) {
                    this.brands[brand.id] = brand.name;
                }
                this.brandsArray = Object.keys(this.brands).map((key) => { return this.brands[key] });
                this.brandsArray.sort((a,b) => { return a < b ? -1 : 1 })
            })
    }

    getCategories() {
        this.categories = [];
        this.http.get(this.routeService.routes.categories)
            .subscribe((res) => {
                for (let category of res.json()) {
                    this.categories.push(category);
                }
            })
    }

    all() {
        this.allCars = [];
        this.getBrands();
        this.getCategories();
        this.http.get(this.routeService.routes.cars)
            .subscribe((res) => {
                console.log(res.json().defaultCarPhoto);
                for (let car of res.json()) {
                    this.allCars.push(this.carPipe.transform(car))
                }
            });
    }

    addCarBrand(data, photo = null) {
        this.http.post(this.routeService.routes.addBrand, { name : data.brand }, { headers : this.authService.headers })
            .subscribe((res) => {
                let r = res.json();
                this.brands[r.id] = r.name;
                this.add(data, photo);
            })
    }

    getBrandId(brandName : string) {
        let brandId;
        for (let id in this.brands) {
            if (this.brands[id] == brandName) {
                brandId = id;
            }
        }
        return brandId;
    }

    async add(data, photo) {
        //check if brand exists
        let brandId = this.getBrandId(data.brand);
        if (brandId == null) {
            this.addCarBrand(data, photo);
            return;
        }
        data['brandId'] = brandId;
        try {
            this.http.post(this.routeService.routes.addCar, data, { headers : this.authService.headers } )
                .subscribe((res) => {
                    this.sendPhoto(photo, res.json().id);
                },(err) => {
                    this.error(err.json(), 'car:added');
                })
        } catch (e) {
            this.error(e, 'car:added');
        }
    }

    async edit(data, photo) {
        data['brandId'] = this.getBrandId(data.brand);

        try {
            this.http.put(this.routeService.routes.addCar, data, {headers: this.authService.headers})
                .subscribe((res) => {
                    photo ? this.sendPhoto(photo, data.id) : '';
                    this.success(res.json(), 'car:modified');
                    this.refresh();
                }, (err) => {
                    this.error(err.json(), 'car:modified');
                })
        } catch(e) {
            console.log(e);
        }
    }

    async sendPhoto(photo, carId) {
        try {
            let fileTransfer: FileTransferObject = this.transfer.create();
            let options: FileUploadOptions = {
                fileKey: 'file',
                fileName: 'photo.jpg',
                headers     : {
                    'Authorization' : this.authService.headers.toJSON().Authorization
                },
                params      : { id : carId }
            };
            return fileTransfer.upload(photo[0], this.routeService.routes.addPhoto + carId + "/photo", options)
                .then((res) => {
                    console.log(res);
                    this.success('Dodano samochód!', 'car:added');
                    this.refresh();
                },(err) => {
                    console.log(err);
                });
        } catch (e) {
            console.log(e);
        }
    }

    deleteCar(car : number) {
        this.http.delete(this.routeService.routes.cars + car, { headers : this.authService.headers } )
            .subscribe((res) => {
                this.refresh();
                this.success('', 'car:deleted');
            })
    }

    getCarById(carId : number) {
        return this.allCars.filter((el) => { return el.id == carId })[0];
    }
}
