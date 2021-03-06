import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../../../services/car-service";
import {Car} from "../../../models/car/car";
import {BrandService} from "../../../services/brand-service";
import {Brand} from "../../../models/car/brand";
import {UserService} from "../../../services/user-service";
import {MatDialog} from "@angular/material";
import {RentDialogComponent} from "../../../components/dialog/rent/rent.dialog.component";
import {ProgressDialogComponent} from "../../../components/dialog/progress/progress.dialog.component";

@Component({
  selector: 'app-car',
  templateUrl: './car.html',
  styleUrls: ['./car.scss'],
  providers: [CarService]
})
export class CarPage implements OnInit {

  car       : Car;
  brand     : Brand;
  id        : number;
  dialogRef: any;
  ref : string;



  constructor(private route: ActivatedRoute,
              private carService: CarService,
              private brandService: BrandService,
              private userService: UserService,
              private router: Router,
              public dialog: MatDialog) {
  }

  isUserLoggedAndAdmin() {
    return this.userService.isUserLogged() && this.userService.isAdmin();
  }

  isUserLogged() {
    return this.userService.isUserLogged() && !this.userService.isAdmin();
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

  isCarLoaded(): any {
    return this.car != null && this.brand != null;
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

  async deleteCar() {
    if (window.confirm('Do you want to delete this car?')) {
      this.openProgressDialog();
      this.carService.deleteCar(this.id).subscribe((resp) => {
        this.dialogRef.close();
          this.router.navigate(['/main', {ref: 'fromdelete'}])
      });
    }
  }

  openProgressDialog() {
    this.dialogRef = this.dialog.open(ProgressDialogComponent, {disableClose: true});
  }

  rentCar() {
    let dialogRef = this.dialog.open(RentDialogComponent, {
      data: {model: this.car.model, brand: this.brand.name, id: this.car.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getCarById();
    });
  }

}
