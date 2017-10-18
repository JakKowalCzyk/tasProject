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

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    cars            : Array<Car>;
    eventsActive    : boolean;

    constructor(
        private navCtrl     : NavController,
        private adService   : AdService,
        private authService : AuthService,
        private events      : Events,
        private modalCtrl   : ModalController,
    ) {

    }

    subscribeEvents() {
        this.events.subscribe('filter:open' , () => { this.openFilter() });
        this.events.subscribe('sort:open'   , () => { this.openFilter() });
    }

    openFilter() {
        this.unsubscribeEvents();
        this.navCtrl.push(AddCarPage, { filter : true });
        // let modal = this.modalCtrl.create(AddCarPage, { filter : true });
        // modal.present();
    }

    openPage(car : Car) {
        this.navCtrl.push(CarPage, {'car' : car })
    }

    ionViewDidLoad() {
        console.log('cons', this.eventsActive);
        if (!this.eventsActive) {
            console.log('cons, subskrybuiję');
            this.subscribeEvents();
            this.eventsActive = true;
        }
    }

    unsubscribeEvents() {
        this.events.unsubscribe('filter:open');
        this.events.unsubscribe('sort:open');
    }

    ionViewDidLeave() {
        console.log('leaving', this.eventsActive);
        if (this.eventsActive) {
            this.unsubscribeEvents();
            this.eventsActive = false;
        }
    }

}
