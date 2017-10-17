import {Injectable} from "@angular/core";

@Injectable()
export class RouteService {

    base : string = "http://192.168.1.15:8080/api/";
    // base : string = "";

    // routes;

    routes = {
        'cars'          : this.base + 'car/',
        'brands'        : this.base + 'brand/',
        'addCar'        : this.base + 'car',
        'addBrand'      : this.base + 'brand',
        'categories'    : this.base + 'type/category/',

        //user
        'register'      : this.base + 'user',
        'login'         : this.base + 'user/me',
        'logout'        : this.base + 'user/logout',
    };


    // setIp(ip : string) {
    //     this.base = "http://" + ip + ":8080/api/";
    //     this.makeRoutes();
    // }

    // makeRoutes() {
    //     this.routes = {
    //         'cars'          : this.base + 'car/',
    //         'brands'        : this.base + 'brand/',
    //         'addCar'        : this.base + 'car',
    //         'addBrand'      : this.base + 'brand',
    //
    //         //user
    //         'register'      : this.base + 'user',
    //         'login'         : this.base + 'user/me',
    //         'logout'        : this.base + 'user/logout',
    //     };
    // }

}