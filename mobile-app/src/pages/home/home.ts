import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Ad} from "../../models/Ad";
import {AdService} from "../../services/ad/ad.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    Ads : Array<Ad>;

    constructor(
        public navCtrl      : NavController,
        private adService   : AdService,
    ) {

    }




}
