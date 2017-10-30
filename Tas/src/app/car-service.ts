
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Car} from "./models/car";
import {Engine} from "./models/engine";
import {DefaultCarPhoto} from "./models/default-car-photo";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

@Injectable()
export class CarService {
  constructor(private http: HttpClient){

  }
  private apiUrl = 'http://159.89.12.132:8080/api/';
  cars: Array<Car> = [];


  getCarById(id: number): any{
    this.http.get(this.apiUrl + 'car/' + id)
      .subscribe(data => {console.log(data);
      });
  }

  getCarsByCategory(categoryType: string): any{

    this.http.get(this.apiUrl + 'car/category/' , {
      headers: new HttpHeaders().set('categoryType', categoryType),
    })
      .subscribe((cars) =>
      {
        console.log(cars);
        for (let carl in cars) {
          if (cars.hasOwnProperty(carl)) {
            console.log(cars[carl]);

            let car = cars[carl];
            this.cars.push(new Car(
              car.id,
              car.brandId,
              car.name,
              car.categoryType,
              car.photo,
              car.pricePerDay,
              car.productionDate,
              new Engine(car.fuelType, car.power, car.driveType),
              new DefaultCarPhoto(car.defaultCarPhoto.id, car.defaultCarPhoto.photoUrl, car.defaultCarPhoto.photoS3Id,
                car.defaultCarPhoto.resizedPhotoUrl, car.defaultCarPhoto.resizedPhotoS3Id),
              []))

          }
        }
      });

  }
  getCars(): any{

      this.http.get(this.apiUrl + 'car/')
      .subscribe((cars) =>
      {
        console.log(cars);
        for (let carl in cars) {
          if (cars.hasOwnProperty(carl)) {
            console.log(cars[carl]);

            let car = cars[carl];
            this.cars.push(new Car(
              car.id,
              car.brandId,
              car.name,
              car.categoryType,
              car.photo,
              car.pricePerDay,
              car.productionDate,
              new Engine(car.fuelType, car.power, car.driveType),
              new DefaultCarPhoto(car.defaultCarPhoto.id, car.defaultCarPhoto.photoUrl, car.defaultCarPhoto.photoS3Id,
                car.defaultCarPhoto.resizedPhotoUrl, car.defaultCarPhoto.resizedPhotoS3Id),
              []))

          }
        }
      });

  }
}
