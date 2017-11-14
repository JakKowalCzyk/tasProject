import {Component, OnInit} from '@angular/core';
import {Engine} from "../../models/engine";
import {CarService} from "../../services/car-service";
import {BrandService} from "../../services/brand-service";
import {FormControl, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material";


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],

})
export class FilterComponent implements OnInit {
  myFilter: any;
  formGroup       : FormGroup;
  engine          : Engine = new Engine('prom', 1, '1');
  categories = ['','SEDAN', 'SUV', 'CITY', 'SPORT'];
  dateFrom       : any;
  dateTo          : any;
  begin       : any;
  end          : any;
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
  minDate: any;
  step: any;
  stepOpt: any;

  constructor(private carService: CarService,
              public brandService: BrandService,
              public snackBar: MatSnackBar) {
    this.carService.activeFilters = '';

  }

  resetFilterCars(){
    this.brand              = undefined;
    this.fuelType           = undefined;
    this.categoryType       = undefined;
    this.powerBiggerThan    = undefined;
    this.powerSmallerThan   = undefined;
    this.driveType          = undefined;
    this.priceSmallerThan   = undefined;
    this.priceBiggerThan    = undefined;
    this.hasElectricWindow  = undefined;
    this.hasNavi            = undefined;
    this.hasAirConditioning = undefined;
    this.hasManualGearbox   = undefined;
    this.hasSunroof         = undefined;
    this.hasRadio           = undefined;
    this.dateFrom           = undefined;
    this.dateTo             = undefined;
    this.setStep(1);
    this.getFilterCars();
    this.openSnackBar();
  }

  getFilterCars() {
      if (this.dateFrom && this.dateTo) {
        this.begin = (this.dateFrom.getFullYear()) + '-' + (this.dateFrom.getMonth() + 1) + '-' + this.dateFrom.getDate();
        this.end = (this.dateTo.getFullYear()) + '-' + (this.dateTo.getMonth() + 1) + '-' + this.dateTo.getDate();
      }
      let data = {
          brandId             : this.brand              || undefined,
          fuelType          : this.fuelType             || undefined,
          categoryType      : this.categoryType         || undefined,
          powerBiggerThan   : this.powerBiggerThan      || undefined,
          powerSmallerThan  : this.powerSmallerThan     || undefined,
          driveType         : this.driveType            || undefined,
          priceSmallerThan  : this.priceSmallerThan     || undefined,
          priceBiggerThan   : this.priceBiggerThan      || undefined,
          hasElectricWindow : this.hasElectricWindow    || undefined,
          hasNavi           : this.hasNavi              || undefined,
          hasAirConditioning: this.hasAirConditioning   || undefined,
          hasManualGearbox  : this.hasManualGearbox     || undefined,
          hasSunroof        : this.hasSunroof           || undefined,
          hasRadio          : this.hasRadio             || undefined,
          from              : this.begin                || undefined,
          to                : this.end                  || undefined,
      };
      this.carService.getFilterCars(data);
    this.setStep(1);
  }

  openSnackBar() {
    let message = 'Filtry zostały wyczyszczone';
    let action = '';
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  setStepOpt(index: number) {
    this.stepOpt = index;
  }

  ngOnInit() {

    this.minDate = new Date();
    this.myFilter = (d: Date): any => {
      const day = d.getDate();
      const month = d.getMonth();
      const year = d.getFullYear();
      this.minDate = new Date(year, month, day);
    };
    this.formGroup = new FormGroup({
      priceSmallerThan: new FormControl(),
      priceBiggerThan: new FormControl(),
      powerBiggerThan: new FormControl(),
      powerSmallerThan: new FormControl(),
      hasElectricWindow: new FormControl(),
      hasNavi: new FormControl(),
      hasAirConditioning: new FormControl(),
      hasManualGearbox: new FormControl(),
      hasSunroof: new FormControl(),
      hasRadio: new FormControl(),
      brand: new FormControl(),
      category: new FormControl(),
    });
  }

}
