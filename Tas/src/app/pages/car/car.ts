import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarService} from "../../services/car-service";
import {Car} from "../../models/car";
import {BrandService} from "../../services/brand-service";
import {Brand} from "../../models/brand";
import {UserService} from "../../services/user-service";
import {Router} from "@angular/router";

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
              private brandService: BrandService,
              private userService: UserService,
              private router: Router) {
  }

  getBrand() {
    if (this.car == null) {
      setTimeout(() => {
        this.getBrand();
      }, 500)
    } else {
      this.brand = this.brandService.getBrandById(this.car.brand);
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

  deleteCarById()
  {
    this.carService.deleteCar(this.id);
    this.router.navigateByUrl('/main');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getCarById();
    });
  }
}
