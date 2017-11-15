import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user-service";
import {User} from "../../../models/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {matchOtherValidator} from "../../../models/match-other-validator";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])],
      password: ['', Validators.compose([Validators.required])],
      repeatPass: ['', Validators.compose([Validators.required, matchOtherValidator('password')])]
    });
  }

  registerUser() {
    if (!this.registerForm.valid) {
      return;
    } else {
      let user = new User(null, this.registerForm.get('email').value, this.registerForm.get('name').value, this.registerForm.get('city').value, null, this.registerForm.get('password').value);
      this.userService.registerUser(user);
    }
  }

  isRepeatPasswordValid(): any {
    return this.registerForm.get('password').value == this.registerForm.get('repeatPass').value;
  }

  isUserPresent() {
    return this.userService.user != null;
  }

  ngOnInit() {
  }


}
