import {Component, OnInit} from '@angular/core';
import {CarService} from "../../services/car-service";
import {BrandService} from "../../services/brand-service";
import {CarHttp} from "../../models/carHttp";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  categories = ['SEDAN', 'SUV', 'CITY', 'SPORT'];
  fuelTypes = [
    'PB',
    'DIESEL',
    'LPG',
    'ELECTRIC'
  ];

  driveTypes = [
    'FWD',
    'RWD',
    'AWD'
  ];
  model: string;
  brand: number;
  fuelType: string;
  categoryType: string;
  driveType: string;
  power: number;
  pricePerDay: number;
  hasElectricWindow: boolean = false;
  hasNavi: boolean = false;
  hasAirConditioning: boolean = false;
  hasAutomaticGearbox: boolean = false;
  hasSunroof: boolean = false;
  hasRadio: boolean = false;
  year: any;
  photo: any;

  constructor(public carService: CarService,
              public brandService: BrandService,
              private router: Router) {
  }

  isFormValid(): any {
    return this.model != null && this.brand != null && this.categoryType != null && this.fuelType != null
      && this.driveType != null && this.isPowerValid() && this.isPriceValid() && this.photo != null && this.isDateValid();
  }

  isPriceValid(): any {
    return this.isPricePopulated() && this.pricePerDay > 10;
  }

  isPricePopulated() {
    return this.pricePerDay != null;
  }

  isPowerValid(): any {
    return this.isPowerPopulated() && this.power > 10;
  }

  isPowerPopulated() {
    return this.power != null;
  }

  isDateValid(): any {
    return this.isYearPopulated() && this.year > 1950
  }

  isYearPopulated() {
    return this.year != null;
  }

  async addCar() {
    let car = new CarHttp(null, this.brand, this.model, this.categoryType, this.pricePerDay, this.year,
      this.hasAirConditioning, this.hasNavi, this.hasElectricWindow, this.hasRadio, this.hasSunroof,
      !this.hasAutomaticGearbox, this.fuelType, this.driveType, this.power, 0);
    let expectedCarSize = this.carService.cars.length + 1;
    const res = await this.carService.addCar(car, this.photo);
    this.routeToMain(expectedCarSize)

  }

  routeToMain(expectedSize) {
    if (expectedSize == this.carService.cars.length) {
      this.router.navigate(['/main']);
    } else {
      setTimeout(() => {
        this.routeToMain(expectedSize)
      }, 300)
    }
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.photo = fileList[0];
    }
  }

  ngOnInit() {
  }

}
