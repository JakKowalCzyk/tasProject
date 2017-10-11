import { Injectable }   from "@angular/core";
import { Http }         from "@angular/http";

//services
import { RouteService }     from "../route/route.service";

//models
import { Ad }               from "../../models/Ad";
import { Car }              from "../../models/Car";
import {Engine} from "../../models/Engine";

@Injectable()
export class AdService {

    allAds      : Array<Ad>;

    constructor(
        private http            : Http,
        private routeService    : RouteService,
    ) {}

    all() {
        let ads = [
            new Ad(1,"Volvo S40"        , 150, new Car(1, 1,"S40"       , 2, new Engine(2,130,1))),
            new Ad(2,"Ford Mustang GT"  , 300, new Car(2, 3,"Mustang GT", 3, new Engine(1,421,2))),
            new Ad(3,"Seat Leon"        , 100, new Car(3, 2,"Leon"      , 1, new Engine(2,150,1))),
            new Ad(4,"Seat Leon Cupra"  , 170, new Car(4, 2,"Leon Cupra", 3, new Engine(1,295,1))),
            new Ad(5,"Seat Ibiza"       , 100, new Car(5, 2,"Ibiza"     , 1, new Engine(2,105,1))),
            new Ad(6,"Mercedes A"       , 170, new Car(6, 4,"Klasa A"   , 1, new Engine(1,130,1))),
            new Ad(7,"Mercedes A45 AMG" , 250, new Car(7, 4,"A45 AMG"   , 3, new Engine(1,300,3))),
            new Ad(8,"BMW 5"            , 200, new Car(8, 5,"Seria 5"   , 2, new Engine(2,190,2))),
            new Ad(9,"BMW M3"           , 350, new Car(9, 5,"M3"        , 3, new Engine(1,450,2))),
            new Ad(10,"BMW X6"          , 290, new Car(10,5,"X6"        , 4, new Engine(1,260,3))),
        ];
        this.allAds = ads;
    }
}