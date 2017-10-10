import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AuthService} from "../../services/auth/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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

  email       : string = '';
  password    : string = '';
  formGroup   : FormGroup;

  constructor(
      private navCtrl     : NavController,
      private navParams   : NavParams,
      private authService : AuthService,
  ) {
    this.createFormGroup();
  }

  createFormGroup() {
      this.formGroup = new FormGroup({
        email   : new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])),
        password: new FormControl('', Validators.compose([Validators.required]))
      });
  }

  login() {
    if (!this.formGroup.valid) {
      console.log("Twoja matka")
    } else {
      this.authService.login(this.email, this.password);
    }
  }

  ionViewDidLoad() {

  }

}
