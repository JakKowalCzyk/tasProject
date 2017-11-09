import {Car} from "../models/car";
import {Injectable} from "@angular/core";
import {CarPipe} from "../pipes/car.pipe";
import {Http} from "@angular/http";
import {RouteService} from "./route-service";

@Injectable()
export class CarService {
  constructor(private http: Http,
              private routeService: RouteService,
              private carPipe: CarPipe) {
    if (this.cars.length <= 0) {
      this.getCars();
    }
  }

  cars: Array<Car> = [];
  carsCategory: Array<Car> = [];

  getCarById(id: number): any {
    console.log(this.cars);
    return this.cars.filter((el) => {
      return el.id == id
    })[0];
  }

  getCategoryHeaders(categoryType: string): any {
    return new Headers({"categoryType": categoryType});
  }

  getFilterCars(params): any{
    this.cars = [];
    this.carsCategory = [];
    console.log(params);
    this.http.get(this.routeService.routes.filter , { params: params

    })
      .subscribe((cars) => {
        this.populateCarList(cars);
      });

  }

  getCarsByCategory(categoryType: string): any {
    this.cars = [];
    this.carsCategory = [];
    this.http.get(this.routeService.routes.categories, {headers: this.getCategoryHeaders(categoryType)})
      .subscribe((cars) => {
        this.populateCarList(cars);
      });

  }

  getCars(): any {
    this.cars = [];
    this.http.get(this.routeService.routes.cars)
      .subscribe((cars) => {
        this.populateCarList(cars);
      });

  }

  private populateCarList(cars) {
    for (let carl of cars.json()) {
      this.cars.push(
        this.carPipe.transform(carl));
    }
  }
}
