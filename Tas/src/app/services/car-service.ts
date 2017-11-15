import {Car} from "../models/car";
import {Injectable} from "@angular/core";
import {CarPipe} from "../pipes/car.pipe";
import {Headers, Http} from "@angular/http";
import {RouteService} from "./route-service";
import {UserService} from "./user-service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CarService {
  constructor(private http: Http,
              private routeService: RouteService,
              private carPipe: CarPipe,
              private userService: UserService) {
    if (this.cars.length <= 0) {
      this.getCars();
    }
  }

  cars          : Array<Car> = [];
  carsCategory  : Array<Car> = [];
  filteredCars  : Array<Car> = [];

  activeFilters : any;

  getCarById(id: number) {
    return this.cars.filter((el) => {
      return el.id == id
    })[0];
  }

  getCategoryHeaders(categoryType: string): any {
    return new Headers({"categoryType": categoryType});
  }

  getFilterCars(params): any {

      this.activeFilters = params;

      let route = params.from ? this.routeService.routes.filter + '/dates' : this.routeService.routes.filter;

      this.http.get(route, { search: params })
          .subscribe((res) => {
              this.filteredCars = [];
              for (let car of res.json()) {
                  this.filteredCars.push(this.carPipe.transform(car))
              }
              //tu jeszcze posortować
          },(err) => {
            console.log(err)
          })

  }

  getCarsByCategory(categoryType: string): any {
    this.cars = [];
    this.carsCategory = [];
    this.http.get(this.routeService.routes.categories, {headers: this.getCategoryHeaders(categoryType)})
      .subscribe((cars) => {
        this.populateCarList(cars);
      });

  }

  async getCars() {
    this.cars = [];
    const res = await this.http.get(this.routeService.routes.cars).toPromise();
    return this.populateCarList(res.json())
  }

  deleteCar(car : number) {
      return this.http.delete(this.routeService.routes.cars + car, {headers: this.userService.headers})
  }

  isCarFreeInGivenDates(id: number, from: any, to: any): Observable<any> {
    return this.http.get(this.routeService.routes.cars + id + "/rented/free", {
      headers: new Headers({
        "from": from,
        "to": to
      })
    })
  }


  private populateCarList(cars) {
    this.cars = [];
    for (let carl of cars) {
      this.cars.push(
        this.carPipe.transform(carl));
    }
    return true;
  }

  async addCar(data, photo) {
    this.http.post(this.routeService.routes.addCar, data, {headers: this.userService.headers})
      .subscribe((res) => {
        this.sendPhoto(photo, res.json().id).then(value => {
          return this.getCarsWithNewPhoto(value);
        });
      }, (err) => {
        console.log(err)
      })
  }

  async getCarsWithNewPhoto(value) {
    if (value.response) {
      return await this.getCars();
    } else {
      setTimeout(() => {
        return this.getCarsWithNewPhoto(value);
      }, 500)
    }
  }

  async sendPhoto(photo, carId): Promise<any> {
    let formData: FormData = new FormData();
    formData.append('file', photo, photo.name);
    let xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open('POST', this.routeService.routes.addPhoto + carId + "/photo", true);
    xhr.setRequestHeader("enctype", "multipart/form-data");
    xhr.setRequestHeader('Authorization', this.userService.headers.toJSON().Authorization);
    // IE bug fixes to clear cache
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Cache-Control", "no-store");
    xhr.setRequestHeader("Pragma", "no-cache");

    xhr.send(formData);
    return xhr;
  }



}
