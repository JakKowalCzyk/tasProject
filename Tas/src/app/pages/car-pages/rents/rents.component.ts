import {UserService} from "../../../services/user-service";
import {Component, OnInit} from "@angular/core";
import {RentedCarService} from "../../../services/rented-car-service";
import {MatDialog, MatSnackBar} from "@angular/material";
import {ProgressDialogComponent} from "../../../components/dialog/progress/progress.dialog.component";

@Component({
  selector: 'app-rents',
  templateUrl: './rents.component.html',
  styleUrls: ['./rents.component.scss']
})
export class RentsComponent implements OnInit {

  dialogRefProgress: any;

  constructor(public snackBar: MatSnackBar,
              private userService: UserService,
              public rentedCarService: RentedCarService,
              public dialog: MatDialog) {
  }

  isUserLogged() {
    return this.userService.user != null && !this.userService.isAdmin();
  }

  async cancelRent(id: number) {
    if (window.confirm('Are You sure You want cancel that rent?')) {
      this.openProgressDialog();
      let success = this.rentedCarService.cancelRent(id);
      if (success) {
        this.dialogRefProgress.close();
        this.openSnackBar('Success', 'Ok!');
      } else {
        this.dialogRefProgress.close();
        this.openSnackBar('Cannot cancell this rent', 'Ok!');
      }
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openProgressDialog() {
    this.dialogRefProgress = this.dialog.open(ProgressDialogComponent, {disableClose: true});
  }

  ngOnInit(): void {
  }


}
