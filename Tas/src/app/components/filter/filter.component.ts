import {Component, OnInit} from '@angular/core';
import {Engine} from "../../models/engine";
import {CarService} from "../../services/car-service";
import {BrandService} from "../../services/brand-service";
import {HttpParams} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],

})
export class FilterComponent implements OnInit {
  myFilter: any;
  formGroup       : FormGroup;
  engine          : Engine = new Engine('prom', 1, '1');
  categories = ['SEDAN', 'SUV', 'CITY', 'SPORT'];
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

  constructor(private carService: CarService,
              public brandService: BrandService) {
  }

  getFilterCars() {
      this.begin = (this.dateFrom.getYear()+1900) + '-' + (this.dateFrom.getMonth()+1) + '-' + this.dateFrom.getDate();
      this.end = (this.dateTo.getYear()+1900) + '-' + (this.dateTo.getMonth()+1) + '-' + this.dateTo.getDate();
      let data = {
          brand             : this.brand                || undefined,
          fuelType          : this.fuelType             || undefined,
          categoryType      : this.categoryType         || undefined,
          powerBiggerThan   : this.powerBiggerThan      || undefined,
          powerSmallerThan  : this.powerBiggerThan      || undefined,
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
      // if (this.options != null && this.options.length > 0)
      //     for (let option of this.options) {
      //         switch (option) {
      //             case 'Klimatyzacja':
      //                 data['hasAirConditioning'] = 1;
      //                 break;
      //             case 'Nawigacja':
      //                 data['hasNavi'] = 1;
      //                 break;
      //             case 'Elektryczne szyby':
      //                 data['hasElectricWindow'] = 1;
      //                 break;
      //             case 'Radio':
      //                 data['hasRadio'] = 1;
      //                 break;
      //             case 'Szyberdach':
      //                 data['hasSunroof'] = 1;
      //                 break;
      //             case 'Automat':
      //                 data['hasManualGearbox'] = 0;
      //                 break;
      //         }
      //     }


          // let begin = this.dateFrom;
          // let end = this.dateTo;
          // data['beginDate']   = begin;
          // data['endDate']     = end;
          // data['from']        = begin.year + '-' + begin.month + '-' + begin.day;
          // data['to']          = end.year   + '-' + end.month   + '-' + end.day;

      // this.filterService.filter(data);
  }


  ngOnInit() {
    // this.myFilter = (d: Date): boolean => {
    //   const day = d.getDay();
    //   // Prevent Saturday and Sunday from being selected.
    //   return day !== 0 && day !== 6;
    // }
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
