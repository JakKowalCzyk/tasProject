import { Component } from '@angular/core';
import {AlertController, Events, NavController, NavParams} from 'ionic-angular';
import {AuthService} from "../../services/auth/auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterPage} from "../register/register";
import {HomePage} from "../home/home";
import {AdService} from "../../services/ad/ad.service";

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

    submitAttempt   : boolean = false;

    email       : string = 'krz.jozefowicz@gmail.com';
    password    : string = '123';
    formGroup   : FormGroup;

    // ip          : string = '192.168.1.15';

    showLoading : boolean = false;

    constructor(
          private navCtrl       : NavController,
        private navParams     : NavParams,
        private authService   : AuthService,
        private events        : Events,
        private alertCtrl     : AlertController,
        private formBuilder   : FormBuilder,
    ) {
        this.createFormGroup();
        this.subscribeEvents();
    }

    subscribeEvents() {
        this.events.subscribe('logged'        , ()    => { this.onLogged() });
        this.events.subscribe('error:login'   , (msg) => { this.onError(msg.msg) });
    }

    onError(msg : string) {
        let alert = this.alertCtrl.create({
            title     : "Coś się popsuło",
            message   : msg,
        });
        alert.present();
    }

    onLogged() {
        this.showLoading = false;
        this.navCtrl.setRoot(HomePage);
    }

    createFormGroup() {
        this.formGroup = this.formBuilder.group({
            ip        : [''],
            email     : ['', Validators.compose([Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])],
            password  : ['', Validators.compose([Validators.required])]
        });
    }

    login() {
        this.submitAttempt = true;

        if (!this.formGroup.valid) {
            return;
        } else {
            this.showLoading = true;
            this.authService.login(this.email, this.password);
            // this.authService.login(this.email, this.password, this.ip);
        }
    }

    openRegister() {
        this.navCtrl.push(RegisterPage);
    }

    ionViewDidLoad() {}

    ionViewWillLeave() {
        this.events.unsubscribe('logged');
        this.events.unsubscribe('error:login');
    }

}
