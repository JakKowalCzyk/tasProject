import {Engine} from "./Engine";
export class Car {

    id      : number;
    brand   : number;
    model   : string;
    category: number;
    engine  : Engine;

    BRANDS = {
        1 : "Volvo",
        2 : "Seat",
        3 : "Ford",
        4 : "Mercedes",
        5 : "BMW",
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
        category    : number,
        engine      : Engine,
    ) {
        this.id        = id;
        this.brand     = brand;
        this.model     = model;
        this.category  = category;
        this.engine    = engine;
    }
}