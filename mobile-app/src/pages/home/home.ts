import { Component }        from '@angular/core';
import {AlertController, Events, ModalController, NavController}    from 'ionic-angular';

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

    _openFilter     : () => void;
    _openSort       : () => void;

    constructor(
        private navCtrl         : NavController,
        private adService       : AdService,
        private authService     : AuthService,
        private events          : Events,
        private filterService   : FilterService,
        private alertCtrl       : AlertController,
    ) {

    }

    subscribeEvents() {
        this._openFilter = () => {
            this.openFilter();
        };
        this._openSort = () => {
            this.openSort();
        };
        this.events.subscribe('filter:open' , this._openFilter);
        this.events.subscribe('sort:open'   , this._openSort);
    }

    openFilter() {
        this.navCtrl.push(FilterPage);
    }

    openSort() {
        let alert = this.alertCtrl.create({
            title   : 'Sortowanie',
            buttons : [
                'cancel',
                {
                    text    : 'Ok',
                    handler : (data : any) => { this.sort(data) }
                }
            ]
        });
        let input;

        input = {
            type    : 'radio',
            label   : 'Cena rosnąco',
            value   : '1'
        };
        this.filterService.activeSort == 1 ? input['checked'] = true : '';
        alert.addInput(input);

        input = {
            type    : 'radio',
            label   : 'Cena malejąco',
            value   : '2'
        };
        this.filterService.activeSort == 2 ? input['checked'] = true : '';
        alert.addInput(input);

        input = {
            type    : 'radio',
            label   : 'Moc malejąco',
            value   : '3'
        };
        this.filterService.activeSort == 3 ? input['checked'] = true : '';
        alert.addInput(input);
        alert.present()
    }

    sort(data) {
        this.filterService.sort(Number(data));
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
