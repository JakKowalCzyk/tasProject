import { Component, Input }                                 from '@angular/core';
import {
    AlertController, Events, NavController, NavParams,
    ToastController, ViewController
}                                                           from 'ionic-angular';
import { FormBuilder, FormGroup, Validators }  from "@angular/forms";

//models
import { Engine }                   from '../../models/Engine';
import { CarOption }                from "../../models/CarOption";
import { Car }                      from "../../models/Car";

//services
import { AdService }                from "../../services/ad/ad.service";

//pages & components
import { HomePage }                 from "../home/home";

@Component({
  selector: 'page-add-car',
  templateUrl: 'add-car.html',
})
export class AddCarPage {

    @Input() car    : Car = null;

    submitAttempt   = false;

    engine          : Engine = new Engine('p',1,'1');
    option          : CarOption = new CarOption(1,false);

    formGroup       : FormGroup;

    brand           : string;
    name            : string;
    fuelType        : string;
    categoryType    : string;
    power           : number;
    driveType       : string;
    productionDate  : string;
    options         : Array<any>;
    photo           : string;
    pricePerDay     : number;

    constructor(
        public navCtrl      : NavController,
        public navParams    : NavParams,
        private adService   : AdService,
        private formBuilder : FormBuilder,
        private events      : Events,
        private toastCtrl   : ToastController,
        private alertCtrl   : AlertController,
        private viewCtrl    : ViewController,
    ) {
        this.car = navParams.get('car');

        if (this.car != null) {
            this.setEditForm();
        }
        this.subscribeEvents();
        this.createFormGroup();
    }

    subscribeEvents() {
        this.events.subscribe('car:added'           ,   ()      => { this.onCarAdded() });
        this.events.subscribe('car:modified'        ,   ()      => { this.onCarModified() });
        this.events.subscribe('error:car:added'     ,   (msg)   => { this.onCarAddedError(msg.msg) });
        this.events.subscribe('error:car:modified'  ,   (msg)   => { this.onCarAddedError(msg.msg) });
    }

    onCarAdded() {
        let toast = this.toastCtrl.create({
            message     : 'Dodano nowy samochód!',
            duration    : 3000,
            cssClass    : 'toastDflt'
        });
        toast.present();
    }

    onCarModified() {
        let toast = this.toastCtrl.create({
            message     : 'Edytowano samochód, wróć na stronę główną by odświeżyć',
            duration    : 3000,
            cssClass    : 'toastDflt'
        });
        toast.present();
    }

    onCarAddedError(msg : string) {
        let alert = this.alertCtrl.create({
            title       : 'Coś się popsuło',
            message     : msg,
        });
        alert.present();
    }

    setEditForm() {
        let car = this.car;
        this.brand          = this.adService.brands[car.brand];
        this.name           = car.model;
        this.categoryType   = car.category
        this.productionDate = car.year;
        this.photo          = car.imgPath;
        this.pricePerDay    = car.price;
        this.fuelType       = car.engine.fuel;
        this.driveType      = car.engine.drive;
        this.power          = car.engine.power;
        this.options        = car.getOptions();
    }

    createFormGroup() {
        this.formGroup = this.formBuilder.group({
            brand       : ['', Validators.compose([Validators.required, Validators.pattern('[A-Z]+[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ \\-]*')])],
            name        : ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9żźćńółęąśŻŹĆĄŚĘŁÓŃ \\-]+')])],
            category    : ['', Validators.compose([Validators.required, Validators.pattern('[A-Z]+')])],
            fuel        : ['', Validators.compose([Validators.required, Validators.pattern('[A-Z]+')])],
            power       : ['', Validators.compose([Validators.required, Validators.pattern('[1-9]+[0-9]{1,3}')])],
            drive       : ['', Validators.compose([Validators.required, Validators.pattern('[A-Z]+')])],
            year        : ['', Validators.compose([Validators.required, Validators.pattern('19[0-9]{2}|20[0-2][0-9]')])],
            options     : [''],
            photo       : ['', Validators.compose([Validators.required])],
            price       : ['', Validators.compose([Validators.required, Validators.pattern('[1-9]+[0-9]*')])],
        });
    }

    addCar() {
        this.submitAttempt = true;

        if (!this.formGroup.valid) {
            return;
        }

        let hasAirConditioning  = 0;
        let hasElectricWindow   = 0;
        let hasManualGearbox    = 1;
        let hasNavi             = 0;
        let hasRadio            = 0;
        let hasSunroof          = 0;

        if (this.options != null && this.options.length > 0)
            for (let option of this.options) {
                switch (option) {
                    case 'Klimatyzacja':
                        hasAirConditioning = 1;
                        break;
                    case 'Nawigacja':
                        hasNavi = 1;
                        break;
                    case 'Elektryczne szyby':
                        hasElectricWindow = 1;
                        break;
                    case 'Radio':
                        hasRadio = 1;
                        break;
                    case 'Szyberdach':
                        hasSunroof = 1;
                        break;
                    case 'Automat':
                        hasManualGearbox = 0;
                        break;
                }
            }

        let data = {
            brand               : this.brand,
            name                : this.name,
            fuelType            : this.fuelType,
            categoryType        : this.categoryType,
            power               : this.power,
            driveType           : this.driveType,
            productionDate      : this.productionDate,
            photo               : this.photo,
            pricePerDay         : this.pricePerDay,
            hasAirConditioning  : hasAirConditioning,
            hasElectricWindow   : hasElectricWindow,
            hasManualGearbox    : hasManualGearbox,
            hasNavi             : hasNavi,
            hasRadio            : hasRadio,
            hasSunroof          : hasSunroof,
        };

        data['millage'] = 0;

        if (this.car != null) {
            data['id'] = this.car.id;
            this.adService.edit(data);
        } else {
            this.adService.add(data);
        }
    }

    ionViewWillLeave() {
        this.events.unsubscribe('car:added');
        this.events.unsubscribe('car:modified');
        this.events.unsubscribe('error:car:added');
        this.events.unsubscribe('error:car:added');
        // this.navCtrl.setRoot(HomePage);
    }
}
