import { Component, OnInit } from '@angular/core';
import {BrandService} from "../brand-service";
import {CarService} from "../car-service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [CarService, BrandService]
})
export class GalleryComponent implements OnInit {

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
    this.getBrands();
    this.getCars();
  }

}
