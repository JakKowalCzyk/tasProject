import {Injectable} from "@angular/core";

@Injectable
export class RouteService {

  baseApi: string = "http://159.89.12.132:8080/api/";

  routes = {
    'cars': this.baseApi + 'car/',
    'car': this.baseApi + 'car/',
    'brands': this.baseApi + 'brand/',
    'addCar': this.baseApi + 'car',
    'addBrand': this.baseApi + 'brand',
    'categories': this.baseApi + 'type/category/',
    'filter': this.baseApi + 'car/filter',
    'addPhoto': this.baseApi + 'car/',

    //user
    'register': this.baseApi + 'user',
    'login': this.baseApi + 'user/me',
    'logout': this.baseApi + 'user/logout',

    //orders
    'rent': this.baseApi + 'car/rented',
    'user_orders': this.baseApi + 'car/rented/user/me',
    'all_orders': this.baseApi + 'car/rented/',
    'cancel_order': this.baseApi + 'car/rented/cancel/',
  };

}
