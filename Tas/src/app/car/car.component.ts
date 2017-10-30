import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarService} from "../car-service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarService]
})
export class CarComponent implements OnInit {
  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute,
              private carService: CarService) {
    this.route.params.subscribe( params => console.log(params) ); }

  getCarById(id: number) {
    return this.carService.getCarById(id);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number


    });
    this.getCarById(this.id);

  }

}
