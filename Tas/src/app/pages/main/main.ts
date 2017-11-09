import {Component} from '@angular/core';
import {CarService} from "../../services/car-service";

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrls: ['./main.scss'],
})
export class MainPage {

  constructor(public carService: CarService) {
  }


  ngOnInit(): void {

  }
}
