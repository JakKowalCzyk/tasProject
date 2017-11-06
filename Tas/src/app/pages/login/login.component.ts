import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user-service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  loginForm: FormGroup;

  constructor(public userService: UserService,
              private formBuilder: FormBuilder) {
    this.createFormGroup();
  }

  //https://toddmotto.com/angular-2-forms-reactive

  createFormGroup() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  login() {
    console.log(this.email);
    this.userService.loginUser(this.email, this.password);
  }

  ngOnInit() {
  }

}
