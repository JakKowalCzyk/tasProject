import { Component }                                            from '@angular/core';
import { AlertController, Events, NavController, NavParams }    from 'ionic-angular';

//models
import { Car }                                  from "../../models/Car";

//pages
import { OrderPage }                            from "../order/order";
import { AddCarPage }                           from "../add-car/add-car";
import { HomePage }                             from "../home/home";

//services
import { AdService  }                           from "../../services/ad/ad.service";
import { AuthService }                          from "../../services/auth/auth.service";
import {LoginPage} from "../login/login";
import {Engine} from "../../models/Engine";
import {CarPipe} from "../../pipes/car/car.pipe";


@Component({
  selector: 'page-car',
  templateUrl: 'car.html',
})
export class CarPage {

    car         : Car;
    _carEdited  : (car) => void;

    constructor(
        private navCtrl       : NavController,
        private navParams     : NavParams,
        private adService     : AdService,
        private authService   : AuthService,
        private alertCtrl     : AlertController,
        private events        : Events,
        private carPipe       : CarPipe,
    ) {

        this.car = navParams.get('car');
        this.subscribeEvents();
    }

    subscribeEvents() {
        this._carEdited = (car) => {
            this.onCarEdited(car)
        };
        this.events.subscribe('car:modified', this._carEdited);
    }

    onCarEdited(car) {
        setTimeout(() => {
            this.car = this.carPipe.transform(car);
        },500);
    }

    ionViewDidEnter() {
        this.car = this.navParams.get('car');
    }

    openOrderPage() {
        this.navCtrl.push(OrderPage, { 'car' : this.car})
    }

    openLoginPage() {
        this.navCtrl.setRoot(LoginPage);
    }

    showConfirm() {
      let alert = this.alertCtrl.create({
          title         : "Usuwanie auta",
          subTitle      : "Czy jesteś pewien, że chcesz usunąć ten samochód ze swojej oferty?",
          buttons       : [
              {
                  text      : "Anuluj",
                  role      : "cancel",
              },
              {
                  text      : "Usuń",
                  handler   : () => { this.deleteCar() }
              }
          ]
      })
      alert.present();
  }

    deleteCar() {
        this.adService.deleteCar(this.car.id);
        this.navCtrl.setRoot(HomePage);
    }

    editCar() {
        this.navCtrl.push(AddCarPage, { car : this.car })
    }
}
