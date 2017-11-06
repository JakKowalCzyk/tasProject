import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user-service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private http: HttpClient,
              public userService: UserService) {
  }



  ngOnInit(): void {
    // let hamburger = document.querySelector('.hamburger');
    // hamburger.addEventListener('click', function () {
    //   document.querySelector('.page-header').classList.toggle('nav-opened');
    // }, false);




  }

}
