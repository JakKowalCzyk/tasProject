import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthService} from "../../services/auth/auth.service";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService : AuthService) {
  }

  ionViewDidLoad() {
    this.authService.logout();
    this.navCtrl.setRoot(HomePage);
  }

}
