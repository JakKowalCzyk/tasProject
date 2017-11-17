import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user-service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RentedCarService} from "../../../services/rented-car-service";
import {ProgressDialogComponent} from "../../../components/dialog/progress/progress.dialog.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  logged: boolean = true;
  dialogRefProgress: any;

  constructor(
    public userService    : UserService,
    private formBuilder   : FormBuilder,
    private router        : Router,
    private rentedCarService: RentedCarService,
    public dialog: MatDialog
  ) {
    this.createFormGroup();
  }

  createFormGroup() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  async login() {
    if (!this.loginForm.valid) {
      return;
    } else {
      this.openProgressDialog();
      let success = await this.userService.loginUser(this.loginForm.get('email').value, this.loginForm.get('password').value);
      if (success) {
        this.rentedCarService.loadMyRents();
        this.dialogRefProgress.close();
        this.router.navigateByUrl('/me');
      } else {
        this.dialogRefProgress.close();
        this.router.navigateByUrl('/login');
        this.logged = false;
      }
    }
  }

  isUserPresent(): any {
    return this.userService.user != null;
  }

  openProgressDialog() {
    this.dialogRefProgress = this.dialog.open(ProgressDialogComponent, {disableClose: true});
  }

  ngOnInit() {
  }

}
