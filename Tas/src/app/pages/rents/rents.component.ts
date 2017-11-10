import {UserService} from "../../services/user-service";
import {Component, OnInit} from "@angular/core";
import {RentedCarService} from "../../services/rented-car-service";
import {RentedCar} from "../../models/rented-car";

@Component({
  selector: 'app-rents',
  templateUrl: './rents.component.html',
  styleUrls: ['./rents.component.scss']
})
export class RentsComponent implements OnInit {

  myActiveRentedCars: Array<RentedCar> = [];
  myWillBeActiveRentedCars: Array<RentedCar> = [];
  myPassedRentedCars: Array<RentedCar> = [];


  constructor(private userService: UserService,
              private rentedCarSerivce: RentedCarService) {
  }

  isUserLogged() {
    return this.userService.user != null && !this.userService.isAdmin();
  }

  async cancelRent(id: number) {
    let success = this.rentedCarSerivce.cancelRent(id);
    if (success) {
      this.myWillBeActiveRentedCars = this.myWillBeActiveRentedCars.filter(value => value.id != id);
    }
  }

  ngOnInit(): void {
    this.myActiveRentedCars = this.rentedCarSerivce.getMyActiveRents();
    this.myWillBeActiveRentedCars = this.rentedCarSerivce.getMyWillBeActiveRents();
    this.myPassedRentedCars = this.rentedCarSerivce.getMyPassedRents();
  }

}
