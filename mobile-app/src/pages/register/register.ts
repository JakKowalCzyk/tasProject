import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  email       : string = 'krz.jozefowicz@gmail.com';
  name        : string = 'Krzysztof Józefowciz';
  password    : string = 'qwerty';
  city        : string = 'Poznań';
  formGroup   : FormGroup;

  constructor(
      public navCtrl        : NavController,
      public navParams      : NavParams,
      private authService   : AuthService,
  ) {
    this.createFormGroup();
  }

  createFormGroup() {
    this.formGroup = new FormGroup({
      email     : new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])),
      password  : new FormControl('', Validators.compose([Validators.required])),
      city      : new FormControl('', Validators.compose([Validators.required])),
      name      : new FormControl('', Validators.compose([Validators.required]))
    });
  }

  ionViewDidLoad() {
  }

  register() {
      console.log("FDBDFB");
      let data = {
        name          : this.name,
        hashPassword  : this.password,
        email         : this.email,
        city          : this.city
      };

    this.authService.register(JSON.stringify(data));

  }

}
