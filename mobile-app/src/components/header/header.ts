import {Component, Input} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

    @Input() title : string;


    constructor(
        private authService : AuthService,
  )
    {}

}
