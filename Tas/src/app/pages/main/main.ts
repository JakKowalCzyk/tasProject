import { Component, OnInit }    from '@angular/core';
import { Engine }               from "../../models/engine";
import { Car }                  from "../../models/car";
import { HttpClient }           from "@angular/common/http";
import { DefaultCarPhoto }      from "../../models/default-car-photo";
import { Brand }                from "../../models/brand";
import { CarService }           from "../../services/car-service";
import { Subscription }         from "rxjs/Subscription";
import { BrandService }         from "../../services/brand-service";

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrls: ['./main.scss'],
})
export class MainPage {

  cars      : Array<Car> = [];
  brands    : Array<Brand> = [];
  title     = 'Dzejkob';

  private apiUrl = 'http://159.89.12.132:8080/api/';

  constructor(
      private http          : HttpClient,
      public carService     : CarService,
      private brandService  : BrandService){
 // this.carService.getCars();
  }

  getCars() {
    return this.carService.getCars();
  }
  getBrands(){
    return this.brandService.getBrands();
  }

  ngOnInit(): void {
    // this.getBrands();
    // this.getCars();

  }
}
