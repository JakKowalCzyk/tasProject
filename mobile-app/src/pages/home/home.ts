import { Component }        from '@angular/core';
import {Events, ModalController, NavController}    from 'ionic-angular';

//Pages
import { CarPage }          from "../car/car";
import { AddCarPage } from "../add-car/add-car";

//models
import { Car }              from "../../models/Car";

//Services
import { AdService }        from "../../services/ad/ad.service";
import { AuthService } from "../../services/auth/auth.service";
import {FilterPage} from "../filter/filter";
import {FilterService} from "../../services/filter/filter.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    cars            : Array<Car>;

    constructor(
        private navCtrl         : NavController,
        private adService       : AdService,
        private authService     : AuthService,
        private events          : Events,
        private modalCtrl       : ModalController,
        private filterService   : FilterService,
    ) {

    }

    subscribeEvents() {
        this.events.subscribe('filter:open' , () => { this.openFilter() });
        this.events.subscribe('sort:open'   , () => { this.openFilter() });
    }

    openFilter() {
        this.unsubscribeEvents();
        this.navCtrl.push(FilterPage);
    }

    openPage(car : Car) {
        this.unsubscribeEvents();
        this.navCtrl.push(CarPage, {'car' : car })
    }

    ionViewWillEnter() {
        this.subscribeEvents();
    }

    unsubscribeEvents() {
        this.events.unsubscribe('filter:open');
        this.events.unsubscribe('sort:open');
    }

    ionViewDidLeave() {
        this.unsubscribeEvents();
    }

}
