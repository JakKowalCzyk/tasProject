import {Component, OnInit} from "@angular/core";
import {UserService} from "../../services/user-service";
import {User} from "../../models/user";


@Component({
  selector: 'app-profile',
  templateUrl: './user.profile.component.html',
  styleUrls: ['./user.profile.component.scss'],
})
export class UserProfileComponent implements OnInit {

  loggedUser: User;
  step = -1;

  constructor(
      public userService: UserService
  ) {
  }


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit() {
      this.loggedUser = this.userService.user
  }

}
