import { Pipe, PipeTransform } from '@angular/core';
import {Car} from "../../models/Car";
import {Engine} from "../../models/Engine";

@Pipe({
  name: 'car',
})
export class CarPipe implements PipeTransform {

    transform(car, ...args) {
        return new Car(
            car.id,
            car.brandId,
            car.name,
            car.categoryType,
            car.photo,
            car.pricePerDay,
            car.productionDate,
            new Engine(car.fuelType, car.power, car.driveType),
            [
                car.hasAirConditioning,
                car.hasNavi,
                car.hasElectricWindow,
                car.hasRadio,
                car.hasSunroof,
                !car.hasManualGearbox
            ]);
    }
}
