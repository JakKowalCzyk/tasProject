import { Component }                                    from '@angular/core';
import { AlertController, NavController, NavParams }    from 'ionic-angular';

//models
import { CarOption }                            from "../../models/CarOption";
import { Car }                                  from "../../models/Car";

//pages
import { OrderPage }                            from "../order/order";

//services
import { AdService  }                           from "../../services/ad/ad.service";
import { AuthService }                          from "../../services/auth/auth.service";

@Component({
  selector: 'page-car',
  templateUrl: 'car.html',
})
export class CarPage {

  car      : Car;


  constructor(
      private navCtrl       : NavController,
      private navParams     : NavParams,
      private adService     : AdService,
      private authService   : AuthService,
      private alertCtrl     : AlertController,
  ) {
      this.car = navParams.get('car');
  }

  ionViewDidLoad() {
  }

  openOrderPage() {
      this.navCtrl.push(OrderPage, { 'car' : this.car})
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
  }

}
