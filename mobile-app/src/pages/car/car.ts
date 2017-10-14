import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Ad} from "../../models/Ad";
import { CarOption } from "../../models/CarOption";

@Component({
  selector: 'page-car',
  templateUrl: 'car.html',
})
export class CarPage {

  ad      : Ad;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams
  ) {
    this.ad = navParams.get('ad');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarPage');
  }

}
