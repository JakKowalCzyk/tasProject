import {Engine} from "./Engine";
import {CarOption} from "./CarOption";

export class Car {
    id      : number;
    brand   : number;
    model   : string;
    category: string;
    engine  : Engine;
    imgPath : string;
    price   : number;
    year    : string;
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
        year        : string,
        engine      : Engine,
        options     : Array<boolean>,
    ) {
        this.id         = id;
        this.brand      = brand;
        this.model      = model;
        this.category   = category;
        this.imgPath    = imgPath;
        this.price      = price;
        this.year       = year;
        this.engine     = engine;
        this.addOptions(options);
    }

    addOptions(options : Array<boolean>) {
        for (let i = 0; i < options.length; i++) {
            this.options.push(new CarOption(i,options[i]))
        }
    }

    getOptions() {
        let options = [];
        for (let option of this.options) {
            if (option.isEnabled)
                options.push(option.getName())
        }
        return options;
    }
}