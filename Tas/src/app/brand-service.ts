import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Brand} from "./models/brand";

@Injectable()
export class BrandService {
  constructor(private http: HttpClient) {

  }

  private apiUrl = 'http://159.89.12.132:8080/api/';
  brands: Array<Brand> = [];

  getBrands(): any {
  this.http.get(this.apiUrl + 'brand/')
  .subscribe((brands) =>
  {
  console.log(brands);
  for (let i in brands) {
  if (brands.hasOwnProperty(i)) {
  console.log(brands[i]);

  let brand = brands[i];
  this.brands.push(new Brand(
    brand.id,
  brand.name
))

}
}
});

}

}
