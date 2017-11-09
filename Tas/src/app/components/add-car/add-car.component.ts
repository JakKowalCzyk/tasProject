import { Component, OnInit } from '@angular/core';
import {CarService} from "../../services/car-service";
import {BrandService} from "../../services/brand-service";
import {Engine} from "../../models/engine";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  engine          : Engine = new Engine('asddsa', 1, '0');
  categories = ['SEDAN', 'SUV', 'CITY', 'SPORT'];
  brand           : string;
  fuelType        : string;
  categoryType    : string;
  driveType       : string;
  hasElectricWindow: boolean;
  hasNavi: boolean;
  hasAirConditioning: boolean;
  hasManualGearbox: boolean;
  hasSunroof: boolean;
  hasRadio: boolean;
  constructor(public carService: CarService,
              public brandService: BrandService) {
  }
  ngOnInit() {
  }

}
