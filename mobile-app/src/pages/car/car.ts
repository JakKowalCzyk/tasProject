import { Component }                            from '@angular/core';
import { IonicPage, NavController, NavParams }  from 'ionic-angular';

//models
import { CarOption }                            from "../../models/CarOption";
import { Car }                                  from "../../models/Car";

//pages
import { OrderPage }                            from "../order/order";
import {AdService} from "../../services/ad/ad.service";

@Component({
  selector: 'page-car',
  templateUrl: 'car.html',
})
export class CarPage {

  car      : Car;


  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private adService : AdService,
  ) {
      this.car = navParams.get('car');
  }

  ionViewDidLoad() {
  }

  openOrderPage() {
      this.navCtrl.push(OrderPage, { 'car' : this.car})
  }

}
