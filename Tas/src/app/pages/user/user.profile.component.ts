import {Component, OnInit} from "@angular/core";
import {UserService} from "../../services/user-service";
import {User} from "../../models/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-profile',
  templateUrl: './user.profile.component.html',
  styleUrls: ['./user.profile.component.scss'],
})
export class UserProfileComponent implements OnInit {

  emailForm: FormGroup;
  nameForm: FormGroup;
  cityForm: FormGroup;
  loggedUser: User;
  step = -1;

  constructor(public userService: UserService,
              private formBuilder: FormBuilder
  ) {
    this.createFormGroup();
  }

  createFormGroup() {
    this.emailForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])],
      password: ['', Validators.compose([Validators.required])]
    });
    this.nameForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])]
    });
    this.cityForm = this.formBuilder.group({
      city: ['', Validators.compose([Validators.required])]
    });
  }

  async updateEmail() {
    if (this.isPasswordValid()) {
      this.loggedUser.email = this.emailForm.get('email').value;
      await this.updateUserEmail(this.emailForm.get('password').value);
    }
  }

  isPasswordValid(): any {
    return btoa(this.userService.user.email + ":" + this.emailForm.get('password').value) == this.loggedUser.base64Auth;
  }

  isEmailFormValid(): any {
    return this.emailForm.valid && this.isPasswordValid();
  }

  async updateName() {
    this.loggedUser.name = this.nameForm.get('name').value;
    await this.updateUser()
  }

  async updateCity() {
    this.loggedUser.city = this.cityForm.get('city').value;
    await this.updateUser();
  }

  async updateUser() {
    let success = await this.userService.updateUser(this.loggedUser);
    if (success) {
      this.loggedUser = this.userService.user;
    }
    this.resetStep();
  }

  async updateUserEmail(password: string) {
    let success = await this.userService.updateUserWithPassword(this.loggedUser, password);
    if (success) {
      this.loggedUser = this.userService.user;
    }
    this.resetStep();
  }

  resetStep() {
    this.setStep(-1);
  }

  setStep(index: number) {
    this.step = index;
  }

  ngOnInit() {
      this.loggedUser = this.userService.user
  }

}
