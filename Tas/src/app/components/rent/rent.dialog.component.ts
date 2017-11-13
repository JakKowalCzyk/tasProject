import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {CarService} from "../../services/car-service";

@Component({
  selector: 'app-rent-component',
  templateUrl: './rent.dialog.component.html',
  styleUrls: ['./rent.dialog.component.scss'],
})
export class RentDialogComponent {

  from: any;
  to: any;
  minDate: any;
  isFree = true;

  constructor(public dialogRef: MatDialogRef<RentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private carService: CarService) {
  }

  isCarDatesPopulated(): any {
    if (this.from == null || this.to == null) {
      return false;
    }
    else {
      return true;
    }
  }

  closeDialog(): void {
    let begin = (this.from.getFullYear()) + '-' + (this.from.getMonth() + 1) + '-' + this.from.getDate();
    let end = (this.to.getFullYear()) + '-' + (this.to.getMonth() + 1) + '-' + this.to.getDate();
    this.carService.isCarFreeInGivenDates(this.data.id, begin, end).subscribe(res => {
      let isFree = res.json();
      if (isFree) {
        this.isFree = true;
        this.rentCar();
        this.dialogRef.close();
      } else {
        this.isFree = false;
      }
    });
  }

  rentCar() {

  }
}
