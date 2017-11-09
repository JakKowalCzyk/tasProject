import {Component, OnInit} from '@angular/core';
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
              public brandService: BrandService) {
  }

  getFilterCars() {
      console.log(this.hasAirConditioning);
      console.log(this.hasManualGearbox);
      let data = {
          brand             : this.brand                || undefined,
          fuelType          : this.fuelType             || undefined,
          categoryType      : this.categoryType         || undefined,
          powerBiggerThan   : this.powerSmallerThan     || undefined,
          driveType         : this.driveType            || undefined,
          priceSmallerThan  : this.priceSmallerThan     || undefined,
          hasElectricWindow : this.hasElectricWindow    || undefined,
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

      // if (this.dateRange && this.dateRange.beginDate) {
      //     let begin = this.dateRange.beginDate;
      //     let end = this.dateRange.endDate;
      //     data['beginDate']   = begin;
      //     data['endDate']     = end;
      //     data['from']        = begin.year + '-' + begin.month + '-' + begin.day;
      //     data['to']          = end.year   + '-' + end.month   + '-' + end.day;
      // }
      // this.filterService.filter(data);
  }


  ngOnInit() {
  }

}
