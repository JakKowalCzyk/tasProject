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

    addCarBrand(data) {
        this.http.post(this.routeService.routes.addBrand, { name : data.brand }, { headers : this.authService.headers })
            .subscribe((res) => {
                let r = res.json();
                this.brands[r.id] = r.name;
                this.add(data);
            })
    }

    add(data) {

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
            this.addCarBrand(data);
            return;
        }

        this.http.post(this.routeService.routes.addCar, data, { headers : this.authService.headers } )
            .subscribe((res) => {
                this.success(res.json(), 'car:added');
                this.refresh();
            },(err) => {
                this.error(err.json(), 'car:added');
            })
    }

    edit(data) {
        for (let k in this.brands) {
            if (this.brands[k] == data.brand) {
                delete data.brand;
                data['brandId'] = k;
            }
        }
        this.http.put(this.routeService.routes.addCar, data, { headers : this.authService.headers })
            .subscribe((res) => {
                this.success(res.json(), 'car:modified');
                this.refresh();
            },(err) => {
                this.error(err.json(),'car:modified');
            })
    }

    deleteCar(car : number) {
        this.http.delete(this.routeService.routes.cars + car, { headers : this.authService.headers } )
            .subscribe((res) => {
                this.refresh();
                this.success('', 'car:deleted');
            })
    }
}