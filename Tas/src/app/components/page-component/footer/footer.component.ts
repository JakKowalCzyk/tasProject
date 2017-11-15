import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user-service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  isUserLogged(): any {
    return this.userService.isUserLogged();
  }

  ngOnInit() {
  }

}
