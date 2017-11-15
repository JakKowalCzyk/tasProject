import {Component} from '@angular/core';
import {CarService} from "../../services/car-service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user-service";

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrls: ['./main.scss'],
})
export class MainPage {

    ref : string;

  constructor(
      public carService     : CarService,
      private userService   : UserService,
      private route         : ActivatedRoute,
      private router        : Router,
  ) {
  }

  isAdmin() {
    return this.userService.isUserLogged() && this.userService.isAdmin();
  }

  async onCarDeleted() {
      const res = await this.carService.getCars();
      this.router.navigateByUrl('/main');
  }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
          this.ref = params['ref'];
          if (this.ref == 'fromdelete') this.onCarDeleted()
      })
  }
}
