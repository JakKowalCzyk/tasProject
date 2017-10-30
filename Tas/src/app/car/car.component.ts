import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';
import {CarService} from "../car-service";
import {Car} from "../models/car";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  car: Car;
  constructor(private carService: CarService,
              private route: ActivatedRoute,
              private location: Location
    ) { }

  ngOnInit() {
    // this.route.params.switchMap((params: Params) => this.carService.getCar(+params['id']))
    // .subscribe(car => this.car = car);
  }

}
