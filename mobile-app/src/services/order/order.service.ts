import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {RouteService} from "../route/route.service";
import {AuthService} from "../auth/auth.service";
import {HasResponse} from "../../pseudoTraits/hasResponse/HasResponse";
import {Events} from "ionic-angular";
import {Order} from "../../models/Order";
import {Car} from "../../models/Car";
import {CarPipe} from "../../pipes/car/car.pipe";

@Injectable()
export class OrderService extends HasResponse {

    userOrders  : Array<Order> = [];
    car         : Car;

    constructor(
        private eventss         : Events,
        private http            : Http,
        private routeService    : RouteService,
        private authService     : AuthService,
        private carPipe         : CarPipe,
    ) {
        super(eventss);
    }

    all() {
        this.userOrders = [];
        this.http.get(this.routeService.routes.user_orders, { headers : this.authService.getHeaders() })
            .subscribe((res) => {
                for (let order of res.json()) {
                    this.userOrders.push(new Order(
                        order.id,
                        order.carId,
                        order.from,
                        order.to,
                        order.totalPrice,
                        order.active,
                        order.willBeActive
                    ))
                }
                this.sortOrders();
            })
    }

    sortOrders() {
        this.userOrders.sort(this.sorter)
    }

    sorter(a,b) {
        if (a.from > b.from && a.to > b.to) return -1;
        if (a.from < b.from && a.to < b.to) return 1;
        if (a.from == b.from) {
            if (a.to > b.to) return -1;
            if (a.to < b.to) return 1;
        }
        return 0;
    }

    order(data) {
        this.http.post(this.routeService.routes.rent, data, { headers : this.authService.getHeaders() })
            .subscribe((res) => {
                this.success(res.json(), 'car:rented');
            },(err) => {
                this.error(err.json(), 'car:rented');
            })
    }

    getCar(carId : number) {
        this.http.get(this.routeService.routes.cars + carId)
            .subscribe((res) => {
                this.car = this.carPipe.transform(res.json())
            })
    }

    deleteOrder(orderId : number) {
        this.http.delete(this.routeService.routes.cancel_order + orderId, { headers : this.authService.getHeaders() })
            .subscribe((res) => {
                this.success(orderId, 'order:cancelled')
            },(err) => {
                this.error(err.json(), 'order:cancelled')
            })
    }
}
