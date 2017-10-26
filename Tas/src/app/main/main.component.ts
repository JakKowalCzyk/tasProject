import { Component, OnInit } from '@angular/core';
import {CarComponent} from "../car/car.component";
import {Engine} from "../models/engine";
import {Car} from "../models/car";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  dane: Array<Car> = [];
  cars: Array<Car> = [];
  title = 'Dzejkob';

  private apiUrl = 'http://159.89.12.132:8080/api/car';
  data: any = {};
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
    this.http.get('http://159.89.12.132:8080/api/car/')
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
              []))
          }
        }
      });

    // let hamburger = document.querySelector('.hamburger');
    // hamburger.addEventListener('click', function () {
    //   document.querySelector('.page-header').classList.toggle('nav-opened');
    // }, false);




  }

}
