import {Component, Input} from '@angular/core';
import {Car} from "../../models/Car";
import {AdService} from "../../services/ad/ad.service";

@Component({
  selector: 'ad',
  templateUrl: 'ad.component.html'
})
export class AdComponent {

  @Input() car : Car;

  constructor(
      private adService : AdService,
  ) {
  }

}
