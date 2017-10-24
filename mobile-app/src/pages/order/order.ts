import { Component } from '@angular/core';
import {AlertController, Events, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Car} from "../../models/Car";
import {IMyDateRange, IMyDateRangeModel, IMyDrpOptions} from "mydaterangepicker";
import {OrderService} from "../../services/order/order.service";
import {MyOrdersPage} from "../my-orders/my-orders";


@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

    car         : Car;
    dateRange   : any;
    price       : number = 0;
    days        : number = 1;

    myDatePickerOptions : IMyDrpOptions = {
        dateFormat: 'yyyy-mm-dd',
    };

  constructor(
      public navCtrl        : NavController,
      public navParams      : NavParams,
      private orderService  : OrderService,
      private events        : Events,
      private alertCtrl     : AlertController,
  )
  {
      this.car = navParams.get('car');
      this.getCalendarOptions();
      this.setPrice();
      this.subscribeEvents();
  }

  subscribeEvents() {
      this.events.subscribe('car:rented'        , (msg) => { this.onCarRented(msg) });
      this.events.subscribe('error:car:rented'  , (msg) => { this.onError(msg) })
  }

  unsubscribeEvents() {
        this.events.unsubscribe('car:rented');
        this.events.unsubscribe('error:car:rented')
    }

  onCarRented(msg) {
      let alert = this.alertCtrl.create({
          title     : "Wynajęto samochód",
          message   :
              `<ul>
                <li>Od: ${msg.from}</li>
                <li>Do: ${msg.to}</li>
                <li>Łączna cena: ${msg.totalPrice}zł</li>
               </ul>`,
          buttons   : [
              {
                  text      : 'Ok',
                  handler   : () => { this.afterOrder() }
              }
          ]
      });
      alert.present();
  }

  onError(msg) {
      let alert = this.alertCtrl.create({
          title     : 'Nie udało się wynająć samochodu',
          message   : msg.msg,
          buttons   : ['Ok']
      });
      alert.present();
  }

  getCalendarOptions() {
      let today = new Date();
      let dd    = today.getDate();
      let mm    = today.getMonth()+1;
      let yyyy  = today.getFullYear();

      console.log(yyyy,mm,dd);

      let startDate     = { year: yyyy, month: mm, day: dd };
      let disableUntil  = { year: yyyy, month: mm, day: dd-1};

      this.myDatePickerOptions['disableUntil'] = disableUntil;

      this.dateRange = {
          beginDate : startDate,
          endDate   : startDate
      }
  }

  setPrice() {
      this.days     = ((this.dateRange.endEpoc - this.dateRange.beginEpoc) / (60*60*24) +1) || 1;
      this.price    = this.days * this.car.price || 0;
      setTimeout(() => {
          this.setPrice();
      },500)
  }

  cancel() {
      this.navCtrl.pop();
  }

  order() {
      let from  = this.dateRange.beginDate;
      let to    = this.dateRange.endDate;
      let data = {
          carId     : this.car.id,
          from      : from.year + '-' + from.month + '-' + from.day,
          to        : to.year   + '-' + to.month   + '-' + to.day,
      };
      this.orderService.order(data);
  }

  afterOrder() {
      this.navCtrl.setRoot(MyOrdersPage)
  }

  ionViewWillLeave() {
      this.unsubscribeEvents();
  }

}
