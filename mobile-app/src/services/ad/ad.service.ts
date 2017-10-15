import { Injectable }   from "@angular/core";
import { Http }         from "@angular/http";

//services
import { RouteService }     from "../route/route.service";

//models
import { Car }              from "../../models/Car";
import { Engine }           from "../../models/Engine";
import { AuthService }      from "../auth/auth.service";

@Injectable()
export class AdService {

    brands          : Object = {};
    allCars         : Array<Car>        = [];

    contentHeaders  : Headers           = new Headers();

    constructor(
        private http            : Http,
        private routeService    : RouteService,
        private authService     : AuthService,
    ) {

    }

    getBrands() {
        this.http.get(this.routeService.routes.brands)
            .subscribe((res) => {
                for (let brand of res.json()) {
                    this.brands[brand.id] = brand.name;
                }
            })
    }

    all() {
        this.getBrands();
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

        // let ads = [
        //     new Ad(1,"Volvo S40"        , 150, new Car(1, 1,"S40"       , 2, new Engine(2,130,1), [1])),
        //     new Ad(2,"Ford Mustang GT"  , 300, new Car(2, 3,"Mustang GT", 3, new Engine(1,421,2), [])),
        //     new Ad(3,"Seat Leon"        , 100, new Car(3, 2,"Leon"      , 1, new Engine(2,150,1), [])),
        //     new Ad(4,"Seat Leon Cupra"  , 170, new Car(4, 2,"Leon Cupra", 3, new Engine(1,295,1), [])),
        //     new Ad(5,"Seat Ibiza"       , 100, new Car(5, 2,"Ibiza"     , 1, new Engine(2,105,1), [])),
        //     new Ad(6,"Mercedes A"       , 170, new Car(6, 4,"Klasa A"   , 1, new Engine(1,130,1), [])),
        //     new Ad(7,"Mercedes A45 AMG" , 250, new Car(7, 4,"A45 AMG"   , 3, new Engine(1,300,3), [])),
        //     new Ad(8,"BMW 5"            , 200, new Car(8, 5,"Seria 5"   , 2, new Engine(2,190,2), [])),
        //     new Ad(9,"BMW M3"           , 350, new Car(9, 5,"M3"        , 3, new Engine(1,450,2), [])),
        //     new Ad(10,"BMW X6"          , 290, new Car(10,5,"X6"        , 4, new Engine(1,260,3), [])),
        //     new Ad(11,"Tesla Model S"   , 250, new Car(11,6,"Model S"   , 2, new Engine(4,360,3), [])),
        //     new Ad(12,"Skoda Fabia"     , 99 , new Car(12,7,"Fabia"     , 1, new Engine(3,75,1), [])),
        // ];
        // this.allAds = ads;
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



        //check if category exists
        // let categoryFlag = false;
        // for (let k in this.brands) {
        //     if (this.brands[k] == data.brand) {
        //         brandFlag = true;
        //     }
        // }
        // if (!brandFlag) {
        //     this.addCarBrand(data);
        //     return;
        // }

        this.http.post(this.routeService.routes.addCar, data, { headers : this.authService.headers } )
            .subscribe((res) => {
                console.log(res.json())
            })
    }
}