export class CarHttp {
  id: number;
  brandId: number;
  name: string;
  categoryType: string;
  pricePerDay: number;
  productionDate: string;
  hasAirConditioning: boolean;
  hasNavi: boolean;
  hasElectricWindow: boolean;
  hasRadio: boolean;
  hasSunroof: boolean;
  hasManualGearbox: boolean;
  fuelType: string;
  driveType: string;
  power: number;
  millage: number;


  constructor(id: number, brandId: number, name: string, categoryType: string, pricePerDay: number, productionDate: string, hasAirConditioning: boolean, hasNavi: boolean, hasElectricWindow: boolean, hasRadio: boolean, hasSunroof: boolean, hasManualGearbox: boolean, fuelType: string, driveType: string, power: number, millage: number) {
    this.id = id;
    this.brandId = brandId;
    this.name = name;
    this.categoryType = categoryType;
    this.pricePerDay = pricePerDay;
    this.productionDate = productionDate;
    this.hasAirConditioning = hasAirConditioning;
    this.hasNavi = hasNavi;
    this.hasElectricWindow = hasElectricWindow;
    this.hasRadio = hasRadio;
    this.hasSunroof = hasSunroof;
    this.hasManualGearbox = hasManualGearbox;
    this.fuelType = fuelType;
    this.driveType = driveType;
    this.power = power;
    this.millage = millage;
  }
}
