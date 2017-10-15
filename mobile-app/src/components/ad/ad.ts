import {Component, Input} from '@angular/core';
import {Car} from "../../models/Car";
import {AdService} from "../../services/ad/ad.service";

/**
 * Generated class for the AdComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ad',
  templateUrl: 'ad.html'
})
export class AdComponent {

  @Input() car : Car;

  constructor(
      private adService : AdService,
  ) {
  }

}
