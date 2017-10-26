import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Response,Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Car} from "./models/car";
import {Engine} from "./models/engine";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template: `<h1>{{title}}</h1><h2>{{title}} details!</h2>`
})

export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {


  }
}
