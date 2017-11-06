import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {RouteService} from "./route-service";

@Injectable()
export class UserService {

  headers: Headers = new Headers({
    "Content-Type": 'application/json'
  });

  constructor(private http: HttpClient,
              private routeService: RouteService) {
  }

  registerUser(userData): any {
    this.http.post(this.routeService.routes.register, userData, this.headers)
      .subscribe((res) => {
        console.log(res);
      }, (err) => {
        console.log(err, 'register')
      });
  }
}
