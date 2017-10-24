import {Component, Input} from '@angular/core';
import {Events} from "ionic-angular";

@Component({
  selector: 'header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {

    @Input() title      : string;
    @Input() withIcons  : boolean = false;

    constructor(
        private events      : Events,
  )
    {}

    openFilter() {
        this.events.publish('filter:open');
    }

    openSort() {
        this.events.publish('sort:open');
    }

}
