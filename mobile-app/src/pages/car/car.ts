import { Component }                            from '@angular/core';
import { IonicPage, NavController, NavParams }  from 'ionic-angular';

//models
import { CarOption }                            from "../../models/CarOption";
import { Car }                                  from "../../models/Car";

//pages
import { OrderPage }                            from "../order/order";

@Component({
  selector: 'page-car',
  templateUrl: 'car.html',
})
export class CarPage {

  car      : Car;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams
  ) {
      this.car = navParams.get('car');
  }

  ionViewDidLoad() {
  }

  openOrderPage() {
      this.navCtrl.push(OrderPage, { 'car' : this.car})
  }

}
