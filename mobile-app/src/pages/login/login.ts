import { Component } from '@angular/core';
import {Events, NavController, NavParams} from 'ionic-angular';
import {AuthService} from "../../services/auth/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterPage} from "../register/register";
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email       : string = 'krz.jozefowicz@gmail.com';
  password    : string = '123';
  formGroup   : FormGroup;

  showLoading : boolean = false;

  constructor(
      private navCtrl       : NavController,
      private navParams     : NavParams,
      private authService   : AuthService,
      private events        : Events,
  ) {
    this.createFormGroup();
    this.subscribeEvents();
  }

  subscribeEvents() {
      this.events.subscribe('logged', () => { this.onLogged() });
  }

  onLogged() {
      this.showLoading = false;
      this.navCtrl.setRoot(HomePage);
  }

  createFormGroup() {
      this.formGroup = new FormGroup({
        email   : new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])),
        password: new FormControl('', Validators.compose([Validators.required]))
      });
  }

  login() {
      if (!this.formGroup.valid) {
          console.log("FBVFD");
      } else {
          this.showLoading = true;
          this.authService.login(this.email, this.password);
      }
  }

  openRegister() {
    this.navCtrl.push(RegisterPage);
  }

  ionViewDidLoad() {

  }

}
