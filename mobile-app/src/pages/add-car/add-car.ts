import { Component }                from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";

//models
import { Engine }                   from '../../models/Engine';
import { CarOption }                from "../../models/CarOption";

//services
import { AdService }                from "../../services/ad/ad.service";

@Component({
  selector: 'page-add-car',
  templateUrl: 'add-car.html',
})
export class AddCarPage {
    engine  : Engine = new Engine('p',1,'1');
    option  : CarOption = new CarOption(1,false);

    formGroup   : FormGroup;

    brand           : string = 'Ford';
    name            : string = 'Stinger';
    fuelType        : string = 'PB';
    categoryType    : string = 'SPORT';
    power           : number = 280;
    driveType       : string = 'RWD';
    productionDate  : string = '2017';
    options         : Array<any>;
    photo           : string = 'https://buyersguide.caranddriver.com/media/assets/submodel/8072.jpg';
    pricePerDay     : number = 350;

    constructor(
        public navCtrl      : NavController,
        public navParams    : NavParams,
        private adService   : AdService,
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

    addCar() {
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
            millage             : 0,
            hasAirConditioning  : hasAirConditioning,
            hasElectricWindow   : hasElectricWindow,
            hasManualGearbox    : hasManualGearbox,
            hasNavi             : hasNavi,
            hasRadio            : hasRadio,
            hasSunroof          : hasSunroof,
        };

        this.adService.add(data);

    }

    clicked() {}

    ionViewDidLoad() {}

}
