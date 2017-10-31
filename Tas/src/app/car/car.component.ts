import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarService} from "../car-service";
import {Car} from "../models/car";
import {Engine} from "../models/engine";
import {DefaultCarPhoto} from "../models/default-car-photo";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarService]
})
export class CarComponent implements OnInit {

  car   : Car;
  id    : number;
  sub   : any;


  constructor(
      private route         : ActivatedRoute,
      private carService    : CarService
  ) { }

  getCarById() {
      if (this.carService.cars.length <= 0) { //jeżeli cars jest puste, to czekamy aż się ściągną
          setTimeout(() => {
              this.getCarById();
          },500);
      }
      this.car = this.carService.getCarById(this.id);
  }

  ngOnInit() {
      this.route.params.subscribe(params => {
          this.id = +params['id']; // (+) converts string 'id' to a number
          this.getCarById();
      });
  }
}
