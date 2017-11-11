import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import 'rxjs/add/operator/map';
import {UserService} from "./services/user-service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  @ViewChild('openSide') myDiv: ElementRef;

  constructor(private userService: UserService) {

  }

  isUserLogged(): any {
    return this.userService.isUserLogged();
  }

  openSideNav() {
    this.triggerFalseClick()
  }

  triggerFalseClick() {
    let el: HTMLElement = this.myDiv.nativeElement as HTMLElement;
    el.click();
  }


  ngOnInit(): void {
    this.userService.logWithCookies();
  }
}
