import {Component, OnInit} from "@angular/core";
import {UserService} from "../../services/user-service";
import {User} from "../../models/user";


@Component({
  selector: 'app-profile',
  templateUrl: './user.profile.component.html',
  styleUrls: ['./user.profile.component.scss'],
  providers: [UserService]
})
export class UserProfileComponent implements OnInit {

  loggedUser: User;

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
    this.loggedUser = this.userService.user;
    console.log(this.loggedUser);
  }

}
