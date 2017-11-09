import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user-service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(
              public userService: UserService) {
  }


  logout() {
    this.userService.logout();
  }

  ngOnInit(): void {
    // let hamburger = document.querySelector('.hamburger');
    // hamburger.addEventListener('click', function () {
    //   document.querySelector('.page-header').classList.toggle('nav-opened');
    // }, false);




  }

}
