import {Car} from "./Car";

export class Ad {

    id          : number;
    title       : string;
    // description : string,
    price       : number;
    car         : Car;

    constructor(
        id          : number,
        title       : string,
        // description : string,
        price       : number,
        car         : Car,
    ) {
        this.id     = id;
        this.title  = title;
        // this.description = description,
        this.price  = price;
        this.car    = car;
    }
}