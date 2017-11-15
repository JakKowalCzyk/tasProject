import {Injectable} from "@angular/core";

@Injectable()
export class RouteService {

    base : string = "http://159.89.12.132:8080/api/";

    routes = {
        'cars'          : this.base + 'car/',
        'brands'        : this.base + 'brand/',
        'addCar'        : this.base + 'car',
        'addBrand'      : this.base + 'brand',
      'categories': this.base + 'type/categoryType/',
        'filter'        : this.base + 'car/filter',
        'addPhoto'      : this.base + 'car/',

        //user
        'register'      : this.base + 'user',
        'login'         : this.base + 'user/me',
        'logout'        : this.base + 'user/logout',

        //orders
        'rent'          : this.base + 'car/rented',
        'user_orders'   : this.base + 'car/rented/user/me',
        'all_orders'    : this.base + 'car/rented/',
        'cancel_order'  : this.base + 'car/rented/cancel/',
    };
}
