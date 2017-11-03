
import {DefaultCarPhoto} from "./default-car-photo";
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
  defaultCarPhoto : DefaultCarPhoto;

  constructor(id: number, brand: number, model: string, category: string, imgPath: string, price: number,
              year: string, engine: Engine, defaultCarPhoto: DefaultCarPhoto, options: Array<any>) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.category = category;
    this.imgPath = imgPath;
    this.price = price;
    this.year = year;
    this.engine = engine;
    this.options = options;
    this.defaultCarPhoto = defaultCarPhoto;
  }


}
