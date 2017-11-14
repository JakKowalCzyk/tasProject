import {Injectable} from "@angular/core";

@Injectable()
export class RouteService {

  baseApi : string = "http://159.89.12.132:8080/api/";

  routes = {
    'cars'          : this.baseApi + 'car/',
    'car'           : this.baseApi + 'car/',
    'brands'        : this.baseApi + 'brand/',
    'addCar'        : this.baseApi + 'car',
    'addBrand'      : this.baseApi + 'brand',
    'categories': this.baseApi + 'type/categoryType/',
    'filter'        : this.baseApi + 'car/filter',
    'addPhoto'      : this.baseApi + 'car/',

    //user
    'register'      : this.baseApi + 'user',
    'update': this.baseApi + 'user',
    'deleteUser': this.baseApi + 'user',
    'login'         : this.baseApi + 'user/me',
    'logout'        : this.baseApi + 'user/logout',
    'users': this.baseApi + 'user/',
    'admin': this.baseApi + 'user/',
    'user': this.baseApi + 'user/',

    //orders
    "add_rent": this.baseApi + 'car/rented',
    "user_rents": this.baseApi + 'car/rented/user/me',
    "all_rents": this.baseApi + 'car/rented/',
    "cancel_rent": this.baseApi + 'car/rented/cancel/',
  };

}
