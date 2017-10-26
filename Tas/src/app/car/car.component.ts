import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Engine} from "../models/engine";
import {Car} from "../models/car";



@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Array<Car> = [];


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://159.89.12.132:8080/api/car/')
      .subscribe((cars) => {
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
              []))
          }
        }
      });
  }
}
