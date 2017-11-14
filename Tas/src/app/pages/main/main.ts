import {Component} from '@angular/core';
import {CarService} from "../../services/car-service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrls: ['./main.scss'],
})
export class MainPage {

  constructor(public carService: CarService,
              private  route: ActivatedRoute) {
  }


  ngOnInit(): void {
        setTimeout(() => {
            this.carService.getCars()
        }, 500)
  }
}
