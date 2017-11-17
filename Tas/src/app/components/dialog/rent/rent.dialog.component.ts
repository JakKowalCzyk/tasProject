import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar} from "@angular/material";
import {CarService} from "../../../services/car-service";
import {RentedCar} from "../../../models/car/rented-car";
import {RentedCarService} from "../../../services/rented-car-service";
import {ProgressDialogComponent} from "../progress/progress.dialog.component";

@Component({
  selector: 'app-rent-component',
  templateUrl: './rent.dialog.component.html',
  styleUrls: ['./rent.dialog.component.scss'],
})
export class RentDialogComponent {

  from: any;
  to: any;
  isFree = true;
  dialogRefProgress: any;


  constructor(public dialogRef: MatDialogRef<RentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private carService: CarService,
              private rentedCarService: RentedCarService,
              public snackBar: MatSnackBar,
              public dialog: MatDialog) {
  }

  isFromBeforeTo() {
    return this.from <= this.to;
  }

  areCarDatesPopulated(): any {
    return this.from != null && this.to != null;
  }

  areDatesAfterAtLeastToday(): any {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return this.from > yesterday && this.to > yesterday;
  }

  areDatesValid(): any {
    return this.areCarDatesPopulated() && this.areDatesAfterAtLeastToday() && this.isFromBeforeTo();
  }

  closeDialog(): void {
    let begin = (this.from.getFullYear()) + '-' + (this.from.getMonth() + 1) + '-' + this.from.getDate();
    let end = (this.to.getFullYear()) + '-' + (this.to.getMonth() + 1) + '-' + this.to.getDate();
    this.carService.isCarFreeInGivenDates(this.data.id, begin, end).subscribe(res => {
      let isFree = res.json();
      if (isFree) {
        this.openProgressDialog();
        this.isFree = true;
        this.rentCar(begin, end);
        this.dialogRef.close();
      } else {
        this.isFree = false;
      }
    });
  }

  rentCar(begin: string, end: string) {
    this.rentedCarService.rentCar(new RentedCar(null, this.data.id, null, null, null, begin, end, null))
      .subscribe(res => {
        this.dialogRefProgress.close();
        let rent = res.json();
        let message = 'Your rent will begin at ' + rent.from + '. Total price: ' + rent.totalPrice + 'zł';
        this.rentedCarService.loadMyRents();
        this.openSnackBar(message, 'OK!');
      }, err => {
        this.dialogRefProgress.close();
        this.openSnackBar('Cannot start rent', 'OK!');
      });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  openProgressDialog() {
    this.dialogRefProgress = this.dialog.open(ProgressDialogComponent, {disableClose: true});
  }
}
