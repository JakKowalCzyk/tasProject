import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user-service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(public userService: UserService,
              private formBuilder: FormBuilder) {
    this.createFormGroup();
  }

  createFormGroup() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  login() {
    if (!this.loginForm.valid) {
      return;
    } else {
      console.log(this.loginForm.get('email').value);
      console.log(this.loginForm.get('password').value);
      this.userService.loginUser(this.loginForm.get('email').value, this.loginForm.get('password').value);
    }
  }

  ngOnInit() {
  }

}
