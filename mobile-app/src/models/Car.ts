import {Engine} from "./Engine";
import {CarOption} from "./CarOption";

export class Car {
    id      : number;
    // title   : string;
    brand   : number;
    model   : string;
    category: string;
    engine  : Engine;
    imgPath : string;
    price   : number;
    options : Array<CarOption> = [];


    // BRANDS = {
    //     1 : "Volvo",
    //     2 : "Seat",
    //     3 : "Ford",
    //     4 : "Mercedes",
    //     5 : "BMW",
    //     6 : "Tesla",
    //     7 : "Skoda",
    // };

    // CATEGORIES = {
    //     1 : "Miejskie",
    //     2 : "Sedan/kombi",
    //     3 : "Sportowe/Coupe",
    //     4 : "SUV/Terenowy"
    // };

    constructor(
        id          : number,
        brand       : number,
        model       : string,
        category    : string,
        imgPath     : string,
        price       : number,
        engine      : Engine,
        options     : Array<boolean>,
    ) {
        this.id         = id;
        this.brand      = brand;
        this.model      = model;
        this.category   = category;
        this.imgPath    = imgPath;
        this.price      = price;
        this.engine     = engine;
        this.getOptions(options);
    }

    getOptions(options : Array<boolean>) {
        for (let i = 0; i < options.length; i++) {
            this.options.push(new CarOption(i,options[i]))
        }
    }
}