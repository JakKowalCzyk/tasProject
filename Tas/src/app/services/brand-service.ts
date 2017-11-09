import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Brand} from "../models/brand";
import {RouteService} from "./route-service";

@Injectable()
export class BrandService {
  constructor(private http: HttpClient,
              private routeService: RouteService) {
    if (this.brands.length <= 0) {
    this.getBrands();
  }
  }

  brands: Array<Brand> = [];

  getBrands(): any {
    this.http.get(this.routeService.routes.brands)
      .subscribe((brands) => {
        for (let i in brands) {
          if (brands.hasOwnProperty(i)) {

            let brand = brands[i];
            this.brands.push(new Brand(
              brand.id,
              brand.name
            ))

          }
        }
      });

  }

  getBrandByCarId(id: number): any {
    return this.brands.filter((el) => {
      return el.id == id
    })[0];
  }

}
