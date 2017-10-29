import { Component, OnInit } from '@angular/core';
import {Engine} from "../models/engine";
import {Car} from "../models/car";
import {HttpClient} from "@angular/common/http";
import {DefaultCarPhoto} from "../models/default-car-photo";
import {Brand} from "../models/brand";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cars: Array<Car> = [];
  brands: Array<Brand> = [];
  title = 'Dzejkob';

  private apiUrl = 'http://159.89.12.132:8080/api/';

  constructor(private http: HttpClient){
    //this.getData();
    //this.getBrand();
  }
  // getData(){
  // return this.http.get('http://159.89.12.132:8080/api/brand/')
  // .subscribe( (res: Response) =>{
  // res.json();
  //console.log("City is:"+ res.json().brand.name)
  //});
  //}
  //getBrand(){
  //this.getData().subscribe(data =>{
  //console.log(data);
  //this.data = data;
  //})
  //}


  ngOnInit(): void {
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

    this.http.get(this.apiUrl + 'brand/')
      .subscribe((brands) =>
      {
        // console.log(brands);
        for (let i in brands) {
          if (brands.hasOwnProperty(i)) {
            // console.log(brands[i]);

            let brand = brands[i];
            this.brands.push(new Brand(
              brand.id,
              brand.name
            ))

          }
        }
      });

  }
}
