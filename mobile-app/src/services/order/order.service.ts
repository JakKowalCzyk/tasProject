import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {RouteService} from "../route/route.service";
import {AuthService} from "../auth/auth.service";
import {HasResponse} from "../../pseudoTraits/hasResponse/HasResponse";
import {Events} from "ionic-angular";

@Injectable()
export class OrderService extends HasResponse {

    constructor(
        private eventss         : Events,
        private http            : Http,
        private routeService    : RouteService,
        private authService     : AuthService,
    ) {
        super(eventss);
    }

    order(data) {
        this.http.post(this.routeService.routes.rent, data, { headers : this.authService.getHeaders() })
            .subscribe((res) => {
                this.success(res.json(), 'car:rented');
                console.log(res.json())
            },(err) => {
                this.error(err.json(), 'car:rented');
                console.log(err.json())
            })
    }

}