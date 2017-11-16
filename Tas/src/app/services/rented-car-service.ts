import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {RouteService} from "./route-service";
import {UserService} from "./user-service";
import {RentedCarPipe} from "../pipes/rented-car.pipe";
import {RentedCar} from "../models/car/rented-car";
import {CarService} from "./car-service";
import {BrandService} from "./brand-service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RentedCarService {

  myRentedCars: Array<RentedCar> = [];
  myActiveRentedCars: Array<RentedCar> = [];
  myWillBeActiveRentedCars: Array<RentedCar> = [];
  myPassedRentedCars: Array<RentedCar> = [];

  constructor(private http: Http,
              private routeService: RouteService,
              private userService: UserService,
              private rentPipe: RentedCarPipe,
              private carService: CarService,
              private brandService: BrandService) {
    if (this.myRentedCars.length <= 0) {
      this.loadMyRents();
    }
  }

  loadMyRents(): any {
    this.myRentedCars = [];
    if (this.myRentedCars.length <= 0 && this.userService.user != null && !this.userService.isAdmin()) {
      this.http.get(this.routeService.routes.user_rents, {headers: this.userService.headers})
        .subscribe((userRents => {
          this.populateRentArray(userRents);
          this.myActiveRentedCars = this.getMyActiveRents();
          this.myWillBeActiveRentedCars = this.getMyWillBeActiveRents();
          this.myPassedRentedCars = this.getMyPassedRents();
        }))
    }
  }

  getMyActiveRents(): any {
    return this.myRentedCars.filter(value => {
      return value.isActive;
    })
  }

  getMyWillBeActiveRents(): any {
    return this.myRentedCars.filter(value => {
      return value.willBeActive;
    })
  }

  getMyPassedRents(): any {
    return this.myRentedCars.filter(value => {
      return !value.willBeActive && !value.isActive;
    })
  }

  getAllRents(): any {
    this.http.get(this.routeService.routes.all_rents, {headers: this.userService.headers})
      .subscribe((userRents => {
        return this.populateRentArray(userRents);
      }))
  }

  rentCar(newRentedCar): Observable<any> {
    return this.http.post(this.routeService.routes.add_rent, newRentedCar, {headers: this.userService.headers});
  }

  async cancelRent(rentId): Promise<any> {
    this.http.delete(this.routeService.routes.cancel_rent + rentId, {headers: this.userService.headers})
      .subscribe(res => {
        this.myRentedCars = this.myRentedCars.filter(value => value.id != rentId);
        this.myWillBeActiveRentedCars = this.myWillBeActiveRentedCars.filter(value => value.id != rentId);
        return true;
      }, err => {
        console.log(err);
        return false;
      })
  }

  private populateRentArray(userRents) {
    for (let rent of userRents.json()) {
      let rentedCar = this.rentPipe.transform(rent);
      let carById = this.carService.getCarById(rentedCar.carId);
      let brandByCarId = this.brandService.getBrandById(carById.brand);
      rentedCar.carModel = carById.model;
      rentedCar.carPhoto = carById.defaultCarPhoto.resizedPhotoUrl;
      rentedCar.carBrand = brandByCarId.name;
      this.myRentedCars.push(rentedCar);
    }
  }
}
