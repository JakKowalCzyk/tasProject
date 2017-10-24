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
        // private file            : File,
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

    async add(data, photo) {
        //check if brand exists
        let brandFlag = false;
        for (let k in this.brands) {
            if (this.brands[k] == data.brand) {
                brandFlag = true;
                delete data.brand;
                data['brandId'] = k;
            }
        }
        if (!brandFlag) {
            this.addCarBrand(data, photo);
            return;
        }

        try {
            let result = await this.sendPhoto(photo);
            console.log(JSON.parse(result['response']));
            data['photo'] = JSON.parse(result['response']).photoUrl;
            console.log(data);

            this.http.post(this.routeService.routes.addCar, data, { headers : this.authService.headers } )
                .subscribe((res) => {
                    this.success(res.json(), 'car:added');
                    this.refresh();
                },(err) => {
                    this.error(err.json(), 'car:added');
                })
        } catch (e) {
            this.error(e, 'car:added');
            console.log(e);
        }
    }

    async sendPhoto(photo) {
        try {
            let fileTransfer: FileTransferObject = this.transfer.create();
            let options: FileUploadOptions = {
                fileKey: 'file',
                fileName: 'photo.jpg',
                headers     : {
                    'Authorization' : this.authService.headers.toJSON().Authorization
                }
            };
            return fileTransfer.upload(photo[0], 'http://159.89.12.132:8080/api/car/photo', options)
                .then((res) => {
                    return res;
                },(err) => {
                    console.log(err);
                });
        } catch (e) {
            console.log(e);
        }
    }

    async edit(data, photo) {
        for (let k in this.brands) {
            if (this.brands[k] == data.brand) {
                delete data.brand;
                data['brandId'] = k;
            }
        }

        try {
            if (photo != null) {
                let result = await this.sendPhoto(photo);
                console.log(JSON.parse(result['response']));
                data['photo'] = JSON.parse(result['response']).photoUrl;
                console.log(data);
            }
            this.http.put(this.routeService.routes.addCar, data, {headers: this.authService.headers})
                .subscribe((res) => {
                    this.success(res.json(), 'car:modified');
                    this.refresh();
                }, (err) => {
                    this.error(err.json(), 'car:modified');
                })
        } catch(e) {
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
