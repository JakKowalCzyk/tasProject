import {Component, Input} from '@angular/core';
import {Order} from "../../models/Order";
import {Car} from "../../models/Car";
import {AdService} from "../../services/ad/ad.service";

@Component({
  selector: 'order',
  templateUrl: 'order.component.html'
})
export class OrderComponent {

    @Input() order  : Order;

    car             : Car;

    constructor(
        private adService   : AdService,
    ) {}

    ngOnInit() {
        this.car = this.adService.getCarById(this.order.carId);
    }


}
