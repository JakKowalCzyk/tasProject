

import {Engine} from "./engine";

export class Car {
  id      : number;
  brand   : number;
  model   : string;
  category: string;
  engine  : Engine;
  imgPath : string;
  price   : number;
  year    : string;
  options : Array<any> = [];

  constructor(id: number, brand: number, model: string, category: string, imgPath: string, price: number, year: string, engine: Engine, options: Array<any>) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.category = category;
    this.imgPath = imgPath;
    this.price = price;
    this.year = year;
    this.engine = engine;
    this.options = options;
  }


}
