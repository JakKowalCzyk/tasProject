import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {RouteService} from "./route-service";
import {UserService} from "./user-service";
import {RentedCarPipe} from "../pipes/rented-car.pipe";
import {RentedCar} from "../models/rented-car";
import {CarService} from "./car-service";
import {BrandService} from "./brand-service";

@Injectable()
export class RentedCarService {

  myRentedCars: Array<RentedCar> = [];

  constructor(private http: Http,
              private routeService: RouteService,
              private userService: UserService,
              private rentPipe: RentedCarPipe,
              private carService: CarService,
              private brandService: BrandService) {
      if (this.myRentedCars.length <= 0) this.loadMyRents();
  }

  loadMyRents(): any {
    this.myRentedCars = [];
    if (this.myRentedCars.length <= 0 && this.userService.user != null && !this.userService.isAdmin()) {
      this.http.get(this.routeService.routes.user_rents, {headers: this.userService.headers})
        .subscribe((userRents => {
          this.populateRentArray(userRents);
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

  rentCar(newRentedCar): any {
    this.http.post(this.routeService.routes.add_rent, {headers: this.userService.headers})
      .subscribe(rent => {
        return rent.json();
      }, err => {
        console.log(err);
      })
  }

  async cancelRent(rentId): Promise<any> {
    this.http.delete(this.routeService.routes.cancel_rent + rentId, {headers: this.userService.headers})
      .subscribe(res => {
        this.myRentedCars = this.myRentedCars.filter(value => value.id != rentId);
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
      console.log(rentedCar);
      this.myRentedCars.push(rentedCar);
    }
  }
}
