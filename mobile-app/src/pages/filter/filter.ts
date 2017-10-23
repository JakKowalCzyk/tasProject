import { Component } from '@angular/core';
import {AlertController, Events, NavController, NavParams} from 'ionic-angular';
import {IMyDrpOptions} from "mydaterangepicker";
import {FilterService} from "../../services/filter/filter.service";
import {AdService} from "../../services/ad/ad.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Engine} from "../../models/Engine";
import {CarOption} from "../../models/CarOption";
import {filter} from "rxjs/operator/filter";

@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {

    myDatePickerOptions : IMyDrpOptions = {
        dateFormat: 'yyyy-mm-dd',
    };

    engine          : Engine = new Engine('p',1,'1');
    option          : CarOption = new CarOption(1,false);

    formGroup       : FormGroup;

    dateRange       : any;
    brand           : string;
    fuelType        : string;
    categoryType    : string;
    minPower        : number;
    driveType       : string;
    options         : Array<any>;
    maxPrice        : number;

    _onLoggedOut    : ()    => void;
    _onLogged       : ()    => void;

    calendarOpened  : boolean = false;

    constructor(
        private navCtrl         : NavController,
        private navParams       : NavParams,
        private alertCtrl       : AlertController,
        private events          : Events,
        private formBuilder     : FormBuilder,
        private filterService   : FilterService,
        private adService       : AdService,
    ) {
        this.subscribeEvents();
        this.createFormGroup();
        this.setForm();
    }

    subscribeEvents() {
        this.events.subscribe('car:filtered'        ,   ()      => { this.cancel() });
        this.events.subscribe('error:car:filtered'  ,   (msg)   => { this.onFilterError(msg.msg) });
        this._onLogged = () => {
            this.deleteFilters()
        };
        this._onLoggedOut = () => {
            this.deleteFilters()
        };
        this.events.subscribe('loggedOut' , this._onLoggedOut );
        this.events.subscribe('logged'    , this._onLogged );
    }

    unsubscribeEvents() {
        this.events.unsubscribe('car:filtered');
        this.events.unsubscribe('error:car:filtered');
        if (this._onLogged) {
            this.events.unsubscribe('logged', this._onLogged);
            this._onLogged = undefined;
        }
        if (this._onLoggedOut) {
            this.events.unsubscribe('loggedOut', this._onLoggedOut);
            this._onLoggedOut = undefined;
        }
    }

    setForm() {
        if (this.filterService.activeFilters) {
            console.log(this.filterService.activeFilters);
            let filters = this.filterService.activeFilters;

            this.brand              = this.adService.brands[filters.brandId];
            this.fuelType           = filters.fuelType;
            this.categoryType       = filters.categoryType;
            this.minPower           = filters.powerBiggerThan;
            this.driveType          = filters.driveType;
            this.maxPrice           = filters.priceSmallerThan;
            this.options            = [];

            this.dateRange = {
                beginDate    : filters.beginDate,
                endDate      : filters.endDate,
            };

            if (filters.hasRadio)           this.options.push('Radio');
            if (filters.hasElectricWindow)  this.options.push('Elektryczne szyby');
            if (filters.hasAirConditioning) this.options.push('Klimatyzacja');
            if (filters.hasSunroof)         this.options.push('Szyberdach');
            if (filters.hasNavi)            this.options.push('Nawigacja');
            if (filters.hasManualGearbox && filters.hasManualGearbox == false)   this.options.push('Automat');
        }
    }

    createFormGroup() {
        this.formGroup = this.formBuilder.group({
            brand       : ['', Validators.compose([Validators.required, Validators.pattern('[A-Z]*[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ \\-]*')])],
            category    : ['', Validators.compose([Validators.required, Validators.pattern('[A-Z]*')])],
            fuel        : ['', Validators.compose([Validators.required, Validators.pattern('[A-Z]*')])],
            power       : ['', Validators.compose([Validators.required, Validators.pattern('[1-9]*[0-9]{1,3}')])],
            drive       : ['', Validators.compose([Validators.required, Validators.pattern('[A-Z]*')])],
            options     : [''],
            price       : ['', Validators.compose([Validators.required, Validators.pattern('[1-9]*[0-9]*')])],
            date        : [''],
        });
    }

    doFilter() {
        let data = {
            brand               : this.brand        || undefined,
            fuelType            : this.fuelType     || undefined,
            categoryType        : this.categoryType || undefined,
            powerBiggerThan     : this.minPower     || undefined,
            driveType           : this.driveType    || undefined,
            priceSmallerThan    : this.maxPrice     || undefined,
        };
        if (this.options != null && this.options.length > 0)
            for (let option of this.options) {
                switch (option) {
                    case 'Klimatyzacja':
                        data['hasAirConditioning'] = 1;
                        break;
                    case 'Nawigacja':
                        data['hasNavi'] = 1;
                        break;
                    case 'Elektryczne szyby':
                        data['hasElectricWindow'] = 1;
                        break;
                    case 'Radio':
                        data['hasRadio'] = 1;
                        break;
                    case 'Szyberdach':
                        data['hasSunroof'] = 1;
                        break;
                    case 'Automat':
                        data['hasManualGearbox'] = 0;
                        break;
                }
            }

        if (this.dateRange && this.dateRange.beginDate) {
            let begin = this.dateRange.beginDate;
            let end = this.dateRange.endDate;
            data['beginDate']   = begin;
            data['endDate']     = end;
            data['from']        = begin.year + '-' + begin.month + '-' + begin.day;
            data['to']          = end.year   + '-' + end.month   + '-' + end.day;
        }
        this.filterService.filter(data);
    }

    cancel() {
        this.navCtrl.pop();
    }

    onFilterError(msg : string) {
        let alert = this.alertCtrl.create({
            title   : "Coś się popsuło",
            message : msg
        });
        alert.present();
    }

    deleteFilters() {
        this.brand              = null;
        this.fuelType           = null;
        this.categoryType       = null;
        this.minPower           = null;
        this.driveType          = null;
        this.maxPrice           = null;
        this.options            = [];
        this.dateRange          = null;
        this.filterService.activeFilters = null;

        console.log(this.brand);
    }

    calendarToggle() {
        this.calendarOpened = !this.calendarOpened;
    }

    ionViewWillLeave() {
        this.unsubscribeEvents();
        console.log('fiters', this.events)
    }

}
