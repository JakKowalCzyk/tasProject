import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../models/car/car";

@Component({
  selector: 'app-carc',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

    @Input() car : Car;

  constructor() { }

  ngOnInit() {
  }

}
