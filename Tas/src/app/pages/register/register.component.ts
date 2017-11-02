import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user-service";
import {User} from "../../models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {


  constructor(private userService: UserService) {
  }

  registerUser(email: string, pass: string, repeat: string) {
    if (pass == repeat) {
      let user = new User(null, email, pass, "poznan", null, pass);
      this.userService.registerUser(user);
    }
    else
      console.log("wrong password")
  }

  ngOnInit() {
  }


}
