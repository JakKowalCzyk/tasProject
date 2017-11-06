import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarService} from "../../services/car-service";
import {Car} from "../../models/car";

@Component({
  selector: 'app-car',
  templateUrl: './car.html',
  styleUrls: ['./car.scss'],
  providers: [CarService]
})
export class CarPage implements OnInit {

  car   : Car;
  id    : number;
  sub   : any;


  constructor(
      private route         : ActivatedRoute,
      private carService    : CarService
  ) { }

  getCarById() {
      this.car = this.carService.getCarById(this.id);
  }

  ngOnInit() {
      this.route.params.subscribe(params => {
          this.id = +params['id']; // (+) converts string 'id' to a number
          this.getCarById();
      });
  }
}
