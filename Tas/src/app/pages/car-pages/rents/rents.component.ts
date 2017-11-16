import {UserService} from "../../../services/user-service";
import {Component, OnInit} from "@angular/core";
import {RentedCarService} from "../../../services/rented-car-service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-rents',
  templateUrl: './rents.component.html',
  styleUrls: ['./rents.component.scss']
})
export class RentsComponent implements OnInit {


  constructor(public snackBar: MatSnackBar,
              private userService: UserService,
              public rentedCarSerivce: RentedCarService) {
  }

  isUserLogged() {
    return this.userService.user != null && !this.userService.isAdmin();
  }

  async cancelRent(id: number) {
    if (window.confirm('Are You sure You want cancel that rent?')) {
      let success = this.rentedCarSerivce.cancelRent(id);
      if (success) {
        this.openSnackBar('Success', 'Ok!');
      } else {
        this.openSnackBar('Cannot cancell this rent', 'Ok!');
      }
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
  }


}
