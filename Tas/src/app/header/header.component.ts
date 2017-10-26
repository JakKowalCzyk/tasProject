import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Car} from "../models/car";
import {Engine} from "../models/engine";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private http: HttpClient){
  }



  ngOnInit(): void {
    let hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', function () {
      document.querySelector('.page-header').classList.toggle('nav-opened');
    }, false);




  }

}
