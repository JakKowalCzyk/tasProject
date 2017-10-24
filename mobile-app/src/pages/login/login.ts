import { Component }                                            from '@angular/core';
import { AuthService }                                          from "../../services/auth/auth.service";
import { FormBuilder, FormGroup, Validators }                   from "@angular/forms";
import { RegisterPage }                                         from "../register/register";
import { HomePage }                                             from "../home/home";
import {AlertController, Events, NavController, Platform, ToastController}     from 'ionic-angular';
import { FingerprintAIO, FingerprintOptions }                   from '@ionic-native/fingerprint-aio';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    fingerprintOptions : FingerprintOptions;

    submitAttempt   : boolean = false;

    email       : string = 'krz.jozefowicz@gmail.com';
    password    : string = '123';
    formGroup   : FormGroup;

    _loggedSub      : (msg) => void;
    _errloggedSub   : (msg) => void;

    showLoading : boolean = false;

    constructor(
        private platform    : Platform,
        private fingerprint : FingerprintAIO,
        private navCtrl     : NavController,
        private authService : AuthService,
        private events      : Events,
        private alertCtrl   : AlertController,
        private formBuilder : FormBuilder,
        private toastCtrl   : ToastController,
    ) {
        this.fingerprintOptions = {
            clientId        : 'MyApp',
            clientSecret    : 'password',
            disableBackup   : true,
        };
        this.createFormGroup();
    }

    subscribeEvents() {
        this._loggedSub = (msg) => {
          this.onLogged(msg);
        };
        this._errloggedSub = (msg) => {
          this.onError(msg.msg)
        };
        this.events.subscribe('logged'        ,  this._loggedSub);
        this.events.subscribe('error:login'   ,  this._errloggedSub);
    }

    unsubscribeEvents() {
        if (this._loggedSub) {
            this._loggedSub = undefined;
        }
        // if (this._errloggedSub) {
        //     this._errloggedSub = undefined;
        // }
        // this.events.unsubscribe('logged'        , this._loggedSub);
        // this.events.unsubscribe('error:login'   , this._errloggedSub);
    }

    onError(msg : string) {
        console.log(msg);
        let alert = this.alertCtrl.create({
            title       : "Coś się popsuło",
            message     : msg,
        });
        alert.present();
    }

    onLogged(msg) {
        console.log('onLogged');
        let toast = this.toastCtrl.create({
            message : msg,
            duration: 3000,
            cssClass    : 'toastDflt'
        });
        toast.present();
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
        console.log(this.events);
        this.submitAttempt = true;

        if (!this.formGroup.valid) {
            return;
        } else {
            this.showLoading = true;
            this.authService.login(this.email, this.password);
        }
    }

    openRegister() {
        this.navCtrl.push(RegisterPage);
    }

    async fingerPrintLogin() {
        try {
            await this.platform.ready();
            //if user has naver loggedin, return
            let isDeepUserSet = this.authService.checkForDeepUser();
            if (!isDeepUserSet) return;

            let available = await this.fingerprint.isAvailable();
            console.log(available);
            if (available === "OK") {
                let result = await this.fingerprint.show(this.fingerprintOptions);
                if (result) {
                    this.authService.logWithFingerPrint();
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    ngOnInit() {
        this.subscribeEvents();
        this.fingerPrintLogin();
    }

    ionViewWillLeave() {
        this.unsubscribeEvents();
    }

}
