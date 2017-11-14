import {Component, OnInit} from '@angular/core';
import {CarService} from "../../services/car-service";
import {BrandService} from "../../services/brand-service";
import {CarHttp} from "../../models/carHttp";

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
  hasManualGearbox: boolean = false;
  hasSunroof: boolean = false;
  hasRadio: boolean = false;
  year: any;
  photo: any;

  constructor(public carService: CarService,
              public brandService: BrandService) {
  }

  isFormValid(): any {
    return this.model != null && this.brand != null && this.categoryType != null && this.fuelType != null
      && this.driveType != null && this.power != null && this.pricePerDay != null && this.photo != null;
  }

  addCar() {
    let car = new CarHttp(null, this.brand, this.model, this.categoryType, this.pricePerDay, this.year,
      this.hasAirConditioning, this.hasNavi, this.hasElectricWindow, this.hasRadio, this.hasSunroof,
      this.hasManualGearbox, this.fuelType, this.driveType, this.power, 0);
    let res = this.carService.addCar(car, this.photo);

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
