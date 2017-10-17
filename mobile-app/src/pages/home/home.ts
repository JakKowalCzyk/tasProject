import { Component }        from '@angular/core';
import { NavController }    from 'ionic-angular';

//Pages
import { CarPage }          from "../car/car";

//models
import { Car }              from "../../models/Car";

//Services
import { AdService }        from "../../services/ad/ad.service";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    cars : Array<Car>;

    constructor(
        private navCtrl     : NavController,
        private adService   : AdService,
        private authService : AuthService,
    ) {

    }

    openPage(car : Car) {
        this.navCtrl.push(CarPage, {'car' : car })
    }


}
