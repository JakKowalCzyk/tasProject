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

// {
//   "brandId": 0,
//   "categoryType": "CITY",
//   "defaultCarPhoto": {
//     "id": 0,
//     "photoS3Id": "string",
//     "photoUrl": "string",
//     "resizedPhotoS3Id": "string",
//     "resizedPhotoUrl": "string"
//   },
//   "driveType": "AWD",
//   "fuelType": "PB",
//   "hasAirConditioning": true,
//   "hasElectricWindow": true,
//   "hasManualGearbox": true,
//   "hasNavi": true,
//   "hasRadio": true,
//   "hasSunroof": true,
//   "id": 0,
//   "millage": 0,
//   "name": "string",
//   "photo": "string",
//   "power": 0,
//   "pricePerDay": 0,
//   "productionDate": "string"
// }

  ngOnInit() {
  }

}
