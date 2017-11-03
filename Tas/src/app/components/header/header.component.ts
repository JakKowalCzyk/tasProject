import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private http: HttpClient){
  }



  ngOnInit(): void {
    // let hamburger = document.querySelector('.hamburger');
    // hamburger.addEventListener('click', function () {
    //   document.querySelector('.page-header').classList.toggle('nav-opened');
    // }, false);




  }

}
