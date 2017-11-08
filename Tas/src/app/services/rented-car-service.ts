import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {RouteService} from "./route-service";
import {UserService} from "./user-service";
import {RentedCarPipe} from "../pipes/rented-car.pipe";

@Injectable()
export class RentedCarService {


  constructor(private http: Http,
              private routeService: RouteService,
              private userService: UserService,
              private rentPipe: RentedCarPipe) {
  }

  getMyRents(): any {
    let rents = [];
    this.http.get(this.routeService.routes.user_rents, {headers: this.userService.headers})
      .subscribe((userRents => {
        return this.populateRentArray(userRents);
      }))
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
        return true;
      }, err => {
        console.log(err);
        return false;
      })
  }

  private populateRentArray(userRents): any {
    let rents = [];
    for (let rent of userRents.json()) {
      rents.push(this.rentPipe.transform(rent))
    }
    return rents;
  }
}
