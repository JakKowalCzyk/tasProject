import {Component} from '@angular/core';
import {CarService} from "../../services/car-service";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user-service";

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrls: ['./main.scss'],
})
export class MainPage {

  constructor(public carService: CarService,
              private userService: UserService,
              private  route: ActivatedRoute) {
  }

  isAdmin() {
    return this.userService.isUserLogged() && this.userService.isAdmin();
  }

  ngOnInit(): void {
        setTimeout(() => {
            this.carService.getCars()
        }, 500)
  }
}
