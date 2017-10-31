import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CarService} from "../car-service";
import {BrandService} from "../brand-service";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  providers: [CarService, BrandService]
})
export class OfferComponent implements OnInit {

  constructor(private http: HttpClient,
              public carService: CarService,
              private brandService: BrandService) { }

  getCars() {
    return this.carService.getCars();
  }
  getCarsByCategory(name: string) {
    return this.carService.getCarsByCategory(name);
  }
  getBrands(){
    return this.brandService.getBrands();
  }
  ngOnInit(): void {
    this.getBrands();
    //this.getCarsByCategory();
    // this.getCars();
  }

}
