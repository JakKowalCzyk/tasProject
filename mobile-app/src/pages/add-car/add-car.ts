import { Component }                from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormControl, FormGroup, Validators}                from "@angular/forms";

@Component({
  selector: 'page-add-car',
  templateUrl: 'add-car.html',
})
export class AddCarPage {

    formGroup   : FormGroup;


    brandId         : number;
    name            : string;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) {
        this.createFormGroup();
    }

    createFormGroup() {
        this.formGroup = new FormGroup({
            brand     : new FormControl('', Validators.compose([Validators.required])),
            name      : new FormControl('', Validators.compose([Validators.required])),
            // city      : new FormControl('', Validators.compose([Validators.required])),
            // name      : new FormControl('', Validators.compose([Validators.required]))
        });
    }

    clicked() {}

    ionViewDidLoad() {}

}
