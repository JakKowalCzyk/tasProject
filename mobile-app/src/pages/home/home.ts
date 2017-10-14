import { Component }        from '@angular/core';
import { NavController }    from 'ionic-angular';

//Pages
import { CarPage }          from "../car/car";

//Components
import { Ad }               from "../../models/Ad";

//Services
import { AdService }        from "../../services/ad/ad.service";

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

    openPage(ad : Ad) {
        this.navCtrl.push(CarPage, {'ad' : ad})
    }


}
