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
  hasAirConditioning: boolean;
  hasNavi: boolean;
  hasElectricWindow: boolean;
  hasRadio: boolean;
  hasSunroof: boolean;
  hasManualGearbox: boolean;
  defaultCarPhoto : DefaultCarPhoto;

  constructor(id: number, brand: number, model: string, category: string, imgPath: string, price: number,
              year: string, engine: Engine, defaultCarPhoto: DefaultCarPhoto, hasAirConditioning: boolean, hasNavi: boolean, hasElectricWindow: boolean, hasRadio: boolean, hasSunroof: boolean, hasManualGearbox: boolean) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.category = category;
    this.imgPath = imgPath;
    this.price = price;
    this.year = year;
    this.engine = engine;
    this.defaultCarPhoto = defaultCarPhoto;
    this.hasAirConditioning = hasAirConditioning;
    this.hasNavi = hasNavi;
    this.hasElectricWindow = hasElectricWindow;
    this.hasRadio = hasRadio;
    this.hasSunroof = hasSunroof;
    this.hasManualGearbox = hasManualGearbox;
  }


}
