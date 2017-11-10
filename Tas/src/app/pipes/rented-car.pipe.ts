import {Pipe, PipeTransform} from "@angular/core";
import {RentedCar} from "../models/rented-car";

@Pipe({
  name: 'rentedCar',
})
export class RentedCarPipe implements PipeTransform {


  transform(rented, ...args: any[]): any {
    return new RentedCar(rented.id,
      rented.carId,
      rented.userId,
      rented.active,
      rented.willBeActive,
      rented.from,
      rented.to,
      rented.totalPrice);
  }


}
