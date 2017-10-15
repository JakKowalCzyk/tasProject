import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Car} from "../../models/Car";


@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

    car      : Car;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams)
  {
      this.car = navParams.get('car');
  }

  ionViewDidLoad() {

  }

}
