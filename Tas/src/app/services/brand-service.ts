import {Injectable} from "@angular/core";
import {Brand} from "../models/brand";
import {RouteService} from "./route-service";
import {Http} from "@angular/http";

@Injectable()
export class BrandService {
  constructor(private http: Http,
              private routeService: RouteService) {
    if (this.brands.length <= 0) {
      this.getBrands();
    }
  }

  brands: Array<Brand> = [];

  getBrands(): any {
    this.http.get(this.routeService.routes.brands)
      .subscribe((brands) => {
        for (let brand of brands.json()) {
          this.brands.push(new Brand(
              brand.id,
              brand.name
            ))
        }
      });

  }

  getBrandById(id: number): any {
    return this.brands.filter((el) => {
      return el.id == id
    })[0];
  }

}
