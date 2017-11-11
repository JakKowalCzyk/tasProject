import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user-service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  constructor(public userService: UserService,
              private appComponent: AppComponent) {
  }


  logout() {
    this.userService.logout();
  }

  openSideNav() {
    this.appComponent.openSideNav();
  }

  ngOnInit(): void {
    // let hamburger = document.querySelector('.hamburger');
    // hamburger.addEventListener('click', function () {
    //   document.querySelector('.page-header').classList.toggle('nav-opened');
    // }, false);




  }

}
