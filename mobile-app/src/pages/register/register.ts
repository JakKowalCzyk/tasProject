import { Component } from '@angular/core';
import {AlertController, Events, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

    submitAttempt   : boolean = false;

    email       : string = 'krz.jozefowicz@gmail.com';
    name        : string = 'Krzysztof Józefowciz';
    password    : string = 'qwerty';
    city        : string = 'Poznań';
    formGroup   : FormGroup;

    constructor(
        public navCtrl        : NavController,
        public navParams      : NavParams,
        private authService   : AuthService,
        private events        : Events,
        private alertCtrl     : AlertController,
        private formBuilder   : FormBuilder,
    ) {
        this.subscribeEvents();
        this.createFormGroup();
    }

    subscribeEvents() {
        this.events.subscribe('error', (msg)  => { this.onError(msg.msg)})
    }

    onError(msg : string) {
        let alert = this.alertCtrl.create({
            title     : 'Coś się popsuło',
            message   : msg,
        })
        alert.present();
    }

    createFormGroup() {
        this.formGroup = this.formBuilder.group({
            name        : ['', Validators.compose([Validators.required, Validators.pattern('[A-Z]+[A-Za-z \\-]*')])],
            email       : ['', Validators.compose([Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])],
            password    : ['', Validators.compose([Validators.required])],
            city        : ['', Validators.compose([Validators.required, Validators.pattern('[A-Z]+[A-Za-z \\-]*')])],
        });
    }


  ionViewDidLoad() {
  }

  register() {

      this.submitAttempt = true;
      if (!this.formGroup.valid) {
          return;
      }

      let data = {
        name          : this.name,
        hashPassword  : this.password,
        email         : this.email,
        city          : this.city
      };

    this.authService.register(JSON.stringify(data));

  }

}
