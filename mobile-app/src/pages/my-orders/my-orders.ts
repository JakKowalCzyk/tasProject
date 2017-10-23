import { Component } from '@angular/core';
import {Events, NavController, NavParams} from 'ionic-angular';
import {OrderService} from "../../services/order/order.service";

@Component({
  selector: 'page-my-orders',
  templateUrl: 'my-orders.html',
})
export class MyOrdersPage {

    _orderCancelled : () => void;

    constructor(
        private navCtrl       : NavController,
        private navParams     : NavParams,
        private orderService  : OrderService,
        private events        : Events,
    ) {
        this.reload();
        this.subscribeEvents();
    }

    subscribeEvents() {
        this._orderCancelled = () => {
            this.reload()
        };
        this.events.subscribe('order:cancelled', this._orderCancelled)
    }

    reload() {
        this.orderService.all();
    }

}
