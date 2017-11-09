import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarService} from "../../services/car-service";
import {Car} from "../../models/car";
import {BrandService} from "../../services/brand-service";
import {Brand} from "../../models/brand";

@Component({
  selector: 'app-car',
  templateUrl: './car.html',
  styleUrls: ['./car.scss'],
  providers: [CarService]
})
export class CarPage implements OnInit {

  car: Car;
  brand: Brand;
  id: number;
  sub: any;


  constructor(private route: ActivatedRoute,
              private carService: CarService,
              private brandService: BrandService) {
  }

  getBrand(id: number) {
    this.brand = this.brandService.getBrandByCarId(id);
  }

  getCarById() {
    if (this.carService.cars.length <= 0) {
      setTimeout(() => {
        this.getCarById();
      }, 500);
    }
    this.car = this.carService.getCarById(this.id);

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getCarById();
      this.getBrand(this.id);
      console.log('id: ', this.id);
    });
  }
}
