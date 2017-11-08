import { Component, OnInit } from '@angular/core';
import {Engine} from "../../models/engine";
import {CarService} from "../../services/car-service";
import {BrandService} from "../../services/brand-service";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],

})
export class FilterComponent implements OnInit {
  engine          : Engine = new Engine('prom', 1, '1');
  categories = ['SEDAN', 'SUV', 'CITY', 'SPORT'];
  dateFrom       : any;
  dateTo          : any;
  brand           : string;
  fuelType        : string;
  categoryType    : string;
  millageSmallerThan        : number;
  millageBiggerThan        : number;
  driveType       : string;
  priceSmallerThan        : number;
  priceBiggerThan : number;
  powerSmallerThan : number;
  powerBiggerThan : number;
  hasElectricWindow: boolean;
  hasNavi: boolean;
  hasAirConditioning: boolean;
  hasManualGearbox: boolean;
  hasSunroof: boolean;
  hasRadio: boolean;
  constructor(private carService: CarService,
              private brandService: BrandService) { }

  getFilterCars()

  {
    let params = new HttpParams().set('categoryType', this.categoryType);
    console.log('getFilterCars');
    // params.set('categoryType', this.categoryType).set('fuelType', this.fuelType);
    this.carService.getFilterCars(params);
  }


  ngOnInit() {
  }

}
