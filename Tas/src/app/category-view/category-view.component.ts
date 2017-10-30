import { Component, OnInit } from '@angular/core';
import {CarService} from "../car-service";
import {BrandService} from "../brand-service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css'],
  providers: [CarService, BrandService]
})
export class CategoryViewComponent implements OnInit {
  id: string;
  private sub: any;
  constructor(private carService: CarService,
              private brandService: BrandService,
              private route: ActivatedRoute) { }
  getCarsByCategory(category: string) {
    return this.carService.getCarsByCategory(category);
  }
  getBrands(){
    return this.brandService.getBrands();
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(this.id = params['typeCategory']);
    });
    this.getBrands();
    this.getCarsByCategory(this.id);
  }

}
