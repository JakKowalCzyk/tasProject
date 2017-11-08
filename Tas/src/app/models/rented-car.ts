export class RentedCar {
  id: number;
  carId: number;
  userId: number;
  isActive: boolean;
  willBeActive: boolean;
  from: any;
  to: any;
  totalPrice: number;


  constructor(id: number, carId: number, userId: number, isActive: boolean, willBeActive: boolean, from: any, to: any, totalPrice: number) {
    this.id = id;
    this.carId = carId;
    this.userId = userId;
    this.isActive = isActive;
    this.willBeActive = willBeActive;
    this.from = from;
    this.to = to;
    this.totalPrice = totalPrice;
  }
}
