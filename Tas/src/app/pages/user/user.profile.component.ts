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

  nameForm: FormGroup;
  loggedUser: User;
  step = -1;

  constructor(public userService: UserService,
              private formBuilder: FormBuilder
  ) {
    this.createFormGroup();
  }

  createFormGroup() {
    this.nameForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])]
    });
  }

  updateName() {
    this.loggedUser.name = this.nameForm.get('name').value;
    this.updateUser()
  }


  updateUser() {
    this.userService.updateUser(this.loggedUser).then(value => this.loggedUser = value);
  }

  setStep(index: number) {
    this.step = index;
  }

  ngOnInit() {
      this.loggedUser = this.userService.user
  }

}
