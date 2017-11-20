import {Component, OnInit} from '@angular/core';
import {CarService} from "../../../services/car-service";
import {BrandService} from "../../../services/brand-service";
import {CarHttp} from "../../../models/car/carHttp";
import {MatDialog} from "@angular/material";
import {ProgressDialogComponent} from "../../../components/dialog/progress/progress.dialog.component";
import {ActivatedRoute, Router} from "@angular/router";
import {Car} from "../../../models/car/car";
import {Brand} from "../../../models/car/brand";

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss'],
  providers: [CarService]
})
export class EditCarComponent implements OnInit {
  categories = ['SEDAN', 'SUV', 'CITY', 'SPORT'];
  fuelTypes = [
    'PB',
    'DIESEL',
    'LPG',
    'ELECTRIC'
  ];

  driveTypes = [
    'FWD',
    'RWD',
    'AWD'
  ];

  id  : number;
  car       : Car;
  model: string;
  brand: Brand;
  fuelType: string;
  categoryType: string;
  driveType: string;
  power: number;
  pricePerDay: number;
  hasElectricWindow: boolean;
  hasNavi: boolean;
  hasAirConditioning: boolean;
  hasManualGearbox: boolean;
  hasSunroof: boolean;
  hasRadio: boolean;
  year: any;
  photo: any;
  dialogRef: any;
  ref: string;

  constructor(private route: ActivatedRoute,
              public carService: CarService,
              public brandService: BrandService,
              private router: Router,
              public dialog: MatDialog) {
  }

  isFormValid(): any {
    return this.car.model != null && this.car.brand != null && this.car.categoryType != null && this.car.engine.fuel != null
      && this.car.engine.drive != null && this.isPowerValid() && this.isPriceValid() && this.isDateValid();
  }

  isPriceValid(): any {
    return this.isPricePopulated() && this.car.price > 10;
  }

  isPricePopulated() {
    return this.car.price != null;
  }

  isPowerValid(): any {
    return this.isPowerPopulated() && this.car.engine.power > 10;
  }

  isPowerPopulated() {
    return this.car.engine.power != null;
  }

  isDateValid(): any {
    return this.isYearPopulated() && +this.car.year > 1950
  }

  isYearPopulated() {
    return this.car.year != null;
  }

  async editCar() {
    this.openDialog();
    let car = this.getEditedCar();
    if (this.photo != null) {
      this.carService.sendPhoto(this.photo, this.car.id).subscribe(res => {
        this.carService.getCars();
        this.edit(car);
      });
    } else {
      this.edit(car);
    }

  }

  edit(car) {
    this.carService.editCar(car).subscribe(res => {
      console.log('routing');
      this.routeToMain(res.json().id);
    });
  }

  private getEditedCar() {
    let brandId = this.getBrandId();
    let car = new CarHttp(this.car.id, brandId, this.car.model, this.car.categoryType, this.car.price, this.car.year,
      this.car.hasAirConditioning, this.car.hasNavi, this.car.hasElectricWindow, this.car.hasRadio, this.car.hasSunroof,
      this.car.hasManualGearbox, this.car.engine.fuel, this.car.engine.drive, this.car.engine.power, 0);
    return car;
  }

  getBrandId(): any {
    if (this.brand.id) {
      return this.brand.id;
    } else {
      return this.brand;
    }
  }

  routeToMain(id) {
    this.dialogRef.close();
    this.router.navigate(['/car/' + id]);
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.photo = fileList[0];
    }
  }

  openDialog() {
    this.dialogRef = this.dialog.open(ProgressDialogComponent, {disableClose: true});
  }

  getCarById() {
    if (this.carService.cars.length <= 0) {
      setTimeout(() => {
        this.getCarById();
      }, 500);
    }
    this.car = this.carService.getCarById(this.id);
    this.getBrand();
  }

  getBrand() {
    if (this.car == null) {
      setTimeout(() => {
        this.getBrand();
      }, 500)
    } else {
      this.brand = this.brandService.getBrandById(this.car.brand);
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getCarById();
    });
  }

  isCarLoaded(): any {
    return this.car != null && this.brand != null;
  }

}
