import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {UserService} from "./services/user-service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  constructor(
      private userService   : UserService
  ) {

  }

  ngOnInit(): void {
    this.userService.logWithCookies();
  }
}
