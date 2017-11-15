import {Pipe, PipeTransform} from "@angular/core";
import {Engine} from "../models/car/engine";
import {DefaultCarPhoto} from "../models/car/default-car-photo";
import {Car} from "../models/car/car";

@Pipe({
  name: 'car',
})
export class CarPipe implements PipeTransform {

  transform(car, ...args): any {
    return new Car(car.id,
      car.brandId,
      car.name,
      car.categoryType,
      car.photo,
      car.pricePerDay,
      car.productionDate,
      new Engine(car.fuelType, car.power, car.driveType),
      new DefaultCarPhoto(car.defaultCarPhoto.id, car.defaultCarPhoto.photoUrl, car.defaultCarPhoto.photoS3Id,
        car.defaultCarPhoto.resizedPhotoUrl, car.defaultCarPhoto.resizedPhotoS3Id),
        car.hasAirConditioning,
        car.hasNavi,
        car.hasElectricWindow,
        car.hasRadio,
        car.hasSunroof,
        !car.hasManualGearbox
    );
  }

}
