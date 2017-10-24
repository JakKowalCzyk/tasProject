import {Component, Input} from '@angular/core';
import {Order} from "../../models/Order";
import {Car} from "../../models/Car";
import {AdService} from "../../services/ad/ad.service";
import {AlertController, Events, ToastController} from "ionic-angular";
import {OrderService} from "../../services/order/order.service";

@Component({
  selector: 'order',
  templateUrl: 'order.component.html'
})
export class OrderComponent {

    @Input() order  : Order;

    car             : Car;

    //events
    _orderCanceled      : (orderId) => void;
    _orderCancelError   : (msg)     => void;

    constructor(
        private adService   : AdService,
        private alertCtrl   : AlertController,
        private orderService: OrderService,
        private events      : Events,
        private toastCtrl   : ToastController,
    ) {}

    ngOnInit() {
        this.car = this.adService.getCarById(this.order.carId);
        this.subscribeEvents();
    }

    subscribeEvents() {
        this._orderCanceled     = (id)  => { this.onOrderCancelled(id) };
        this._orderCancelError  = (msg) => { this.onOrderCancelError(msg) };

        this.events.subscribe('order:cancelled'         , this._orderCanceled);
        this.events.subscribe('error:order:cancelled'   , this._orderCancelError);
    }

    onOrderCancelled(id) {
        if (id != this.order.id)
            return;
        let toast = this.toastCtrl.create({
            message : 'Poprawnie anulowano zamówienie',
            duration: 3000,
            cssClass: 'toastDflt'
        });
        toast.present()
    }

    onOrderCancelError(msg) {
        let alert = this.alertCtrl.create({
            title   : 'Nie udało się anulować rezerwacji',
            message : msg.msg,
        });
        alert.present();
    }

    cancelOrder() {
        let alert = this.alertCtrl.create({
            title   : 'Anulowanie rezerwacji',
            message : 'Czy na pewno chcesz usunąć rezerwację?',
            buttons : [
                {
                    text : 'Anuluj',
                    role : 'cancel'
                },
                {
                    text    : 'Usuń',
                    handler : () => { this.deleteOrder() }
                }
            ]
        });
        alert.present()
    }

    deleteOrder() {
        this.orderService.deleteOrder(this.order.id);
    }
}
