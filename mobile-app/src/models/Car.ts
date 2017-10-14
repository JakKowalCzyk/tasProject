import {Engine} from "./Engine";
import {CarOption} from "./CarOption";

export class Car {

    id      : number;
    brand   : number;
    model   : string;
    // category: number;
    category: string;
    engine  : Engine;
    options : Array<CarOption> = [];


    BRANDS = {
        1 : "Volvo",
        2 : "Seat",
        3 : "Ford",
        4 : "Mercedes",
        5 : "BMW",
        6 : "Tesla",
        7 : "Skoda",
    };

    CATEGORIES = {
        1 : "Miejskie",
        2 : "Sedan/kombi",
        3 : "Sportowe/Coupe",
        4 : "SUV/Terenowy"
    };

    constructor(
        id          : number,
        brand       : number,
        model       : string,
        // category    : number,
        category    : string,
        engine      : Engine,
        options     : Array<number>,
    ) {
        this.id        = id;
        this.brand     = brand;
        this.model     = model;
        this.category  = category;
        this.engine    = engine;
        this.getOptions(options);
    }

    getOptions(options : Array<number>) {
        for (let i = 1; i <= Object.keys(CarOption.NAMES).length; i++) {
            options.indexOf(i) >= 0
                ? this.options.push(new CarOption(i, 1))
                : this.options.push(new CarOption(i, 0))
        }
    }
}