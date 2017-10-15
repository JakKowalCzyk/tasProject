import {Injectable} from "@angular/core";

@Injectable()
export class RouteService {

    base : string = "http://192.168.1.15:8080/api/";

    routes = {
        'cars'          : this.base + 'car/',
        'brands'        : this.base + 'brand/',

        //user
        'register'      : this.base + 'user',
        'login'         : this.base + 'user/me',
        'logout'        : this.base + 'user/logout',
    };

}