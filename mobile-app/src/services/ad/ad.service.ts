import { Injectable }   from "@angular/core";
import { Http }         from "@angular/http";

//services
import { RouteService }     from "../route/route.service";

//models
import { Car }              from "../../models/Car";
import { Engine }           from "../../models/Engine";
import { AuthService }      from "../auth/auth.service";
import {Events} from "ionic-angular";

@Injectable()
export class AdService {

    brands          : Object            = {};
    categories      : Array<string>     = [];
    allCars         : Array<Car>        = [];

    contentHeaders  : Headers           = new Headers();

    constructor(
        private http            : Http,
        private routeService    : RouteService,
        private authService     : AuthService,
        private events          : Events,
    ) {

    }

    subscribeEvents() {
        this.events.subscribe('logged', () => {this.all()})
    }

    getBrands() {
        this.http.get(this.routeService.routes.brands)
            .subscribe((res) => {
                for (let brand of res.json()) {
                    this.brands[brand.id] = brand.name;
                }
            })
    }

    getCategories() {
        this.http.get(this.routeService.routes.categories)
            .subscribe((res) => {
                for (let category of res.json()) {
                    this.categories.push(category);
                }
                console.log(this.categories)
            })
    }

    all() {
        this.getBrands();
        this.getCategories();
        this.http.get(this.routeService.routes.cars)
            .subscribe((res) => {
                for (let car of res.json()) {
                    this.allCars.push(new Car(
                        car.id,
                        car.brandId,
                        car.name,
                        car.categoryType,
                        car.photo,
                        car.pricePerDay,
                        car.productionDate,
                        new Engine(car.fuelType, car.power, car.driveType),
                        [
                            car.hasAirConditioning,
                            car.hasNavi,
                            car.hasElectricWindow,
                            car.hasRadio,
                            car.hasSunroof,
                            !car.hasManualGearbox
                        ])
                    )
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
                console.log(res.json())
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
                console.log(res.json())
            })
    }

    deleteCar(car : number) {
        this.http.delete(this.routeService.routes.cars + car, { headers : this.authService.headers } )
            .subscribe((res) => {
                // console.log(res.json())
            })
    }
}