import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {OrderService} from "../../services/order/order.service";

@Component({
  selector: 'page-my-orders',
  templateUrl: 'my-orders.html',
})
export class MyOrdersPage {

  constructor(
      public navCtrl        : NavController,
      public navParams      : NavParams,
      private orderService  : OrderService,
  ) {
      orderService.all();
  }


}
