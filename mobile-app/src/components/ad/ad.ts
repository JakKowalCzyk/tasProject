import {Component, Input} from '@angular/core';
import {Ad} from "../../models/Ad";

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

  @Input() ad : Ad;

  text: string;

  constructor() {
    console.log('Hello AdComponent Component');
    this.text = 'Hello World';
  }

}
