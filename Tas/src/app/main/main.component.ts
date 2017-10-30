import { Component, OnInit } from '@angular/core';
import {Engine} from "../models/engine";
import {Car} from "../models/car";
import {HttpClient} from "@angular/common/http";
import {DefaultCarPhoto} from "../models/default-car-photo";
import {Brand} from "../models/brand";
import {CarService} from "../car-service";
import {Subscription} from "rxjs/Subscription";
import {BrandService} from "../brand-service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [CarService, BrandService],
})
export class MainComponent implements OnInit {
  cars: Array<Car> = [];
  brands: Array<Brand> = [];
  title = 'Dzejkob';

  private apiUrl = 'http://159.89.12.132:8080/api/';

  constructor(private http: HttpClient,
              private carService: CarService,
              private brandService: BrandService){
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
