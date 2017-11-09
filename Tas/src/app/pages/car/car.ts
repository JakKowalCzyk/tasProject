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

  constructor(private route: ActivatedRoute,
              private carService: CarService,
              private brandService: BrandService) {
  }

  getBrand() {
    if (this.car == null) {
      setTimeout(() => {
        this.getBrand();
      }, 500)
    } else {
      this.brand = this.brandService.getBrandByCarId(this.car.brand);
    }
  }

  isCarLoaded(): any {
    return this.car != null && this.brand != null;
  }

  getCarById() {
    if (this.carService.cars.length <= 0) {
      setTimeout(() => {
        this.getCarById();
      }, 500);
    }
    this.car = this.carService.getCarById(this.id);
    this.getBrand();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getCarById();
    });
  }
}
