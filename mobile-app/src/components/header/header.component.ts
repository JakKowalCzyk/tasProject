import {Component, Input} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Events} from "ionic-angular";

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

    @Input() title : string;


    constructor(
        private authService : AuthService,
        private events      : Events,
  )
    {}

    openFilter() {
        this.events.publish('filter:open');
    }

}