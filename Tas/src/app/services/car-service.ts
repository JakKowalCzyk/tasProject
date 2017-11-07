import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Car} from "../models/car";
import {Injectable} from "@angular/core";
import {CarPipe} from "../pipes/car.pipe";
import {Http} from "@angular/http";
import {RouteService} from "./route-service";

@Injectable()
export class CarService {
  constructor(private http: Http,
              private httpClient: HttpClient,
              private routeService: RouteService,
              private carPipe: CarPipe) {
    if (this.cars.length <= 0) {
      this.getCars();
    }
  }

  cars: Array<Car> = [];
  carsCategory: Array<Car> = [];

  getCarById(id: number): any {
    this.http.get(this.routeService.routes.car + id)
      .subscribe(data => {
        return this.carPipe.transform(data.json());
      });
  }

  getCarsByCategory(categoryType: string): any {
    this.cars = [];
    this.carsCategory = [];
    this.httpClient.get(this.routeService.routes.categories, {
      headers: new HttpHeaders().set('categoryType', categoryType),
    })
      .subscribe((cars) => {
        console.log(cars);
        for (let carl in cars) {
          if (cars.hasOwnProperty(carl)) {
            console.log(cars[carl]);

            let car = cars[carl];
            this.cars.push(
              this.carPipe.transform(car)
            )
          }
        }
      });

  }

  getCars(): any {
    this.cars = [];
    this.http.get(this.routeService.routes.cars)
      .subscribe((cars) => {
        console.log(cars);
        for (let carl in cars) {
          if (cars.hasOwnProperty(carl)) {
            console.log(cars[carl]);

            let car = cars[carl];
            this.cars.push(
              this.carPipe.transform(car));
          }
        }
        console.log(this.cars)
      });

  }
}
