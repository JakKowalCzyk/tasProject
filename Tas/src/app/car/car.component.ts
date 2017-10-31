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
  car: Car;
  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute,
              private carService: CarService) {
    this.car = new Car(2,2,'',"","",2,"", new Engine("",2,""), new DefaultCarPhoto(2,'','','',''),[])
    this.route.params.subscribe( params => console.log(params) ); }

  getCarById(id: number) {
    return console.log(this.car = this.carService.getCarById(this.id));
  }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number
        this.getCarById(this.id);

      });

    //this.getCarById(this.id);


  }

}
