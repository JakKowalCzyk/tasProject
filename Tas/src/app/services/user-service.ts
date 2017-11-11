import { Injectable }       from "@angular/core";
import { RouteService }     from "./route-service";
import { User }             from "../models/user";
import { Headers, Http }    from "@angular/http";
import { CookieService }    from 'angular2-cookie/services/cookies.service';
import {RentedCarService} from "./rented-car-service";


@Injectable()
export class UserService {

  user: User;
  ADMIN: string = 'ROLE_ADMIN';
  USER: string = 'ROLE_USER';

  headers: Headers = new Headers({
    "Content-Type": 'application/json'
  });

  constructor(
      private http              : Http,
      private routeService      : RouteService,
      private cookies           : CookieService,
  ) {
  }

  async loginUser(email: string, pass: string) : Promise<any> {
    let base64 = btoa(email + ":" + pass);
    this.headers.append("Authorization", 'Basic ' + base64);
    try {
      const response = await this.http.get(this.routeService.routes.login, {headers: this.headers}).toPromise();
      return this.afterLogin(response.json(), base64);
    } catch (e) {
      this.headers.delete('Authorization');
      return false;
    }
  }

  async afterLogin(data, base64 = null) {
      let base = base64 || data.base64Auth;
      this.user = new User(data.id, data.email, data.name, data.city, data.roleType, base);
      this.user.base64Auth = base;
      this.cookies.putObject('user', this.user);

    return this.user;
  }

  logWithCookies() {
      let cookie = this.cookies.getObject('user');
      if (cookie == null) return;
      this.afterLogin(cookie)
  }

  isUserLogged(): any {
    return this.user != null;
  }

  isAdmin(): any {
    return this.user.roleType == this.ADMIN;
  }

  registerUser(userData): any {
    this.http.post(this.routeService.routes.register, userData, {headers: this.headers})
      .subscribe((res) => {
        console.log(res);
      }, (err) => {
        console.log(err, 'register')
      });
  }

  async updateUser(userData): Promise<any> {
    try {
      const response = await this.http.put(this.routeService.routes.update, userData, {headers: this.headers}).toPromise();
      return this.afterUpdate(response.json());
    }
    catch (e) {
      return false;
    }
  }

  async afterUpdate(data) {
    this.user.name = data.name;
    this.user.city = data.city;
    return this.user;
  }

  async afterUpdateWithPassword(data, password: string) {
    this.user.email = data.email;
    let base64 = btoa(this.user.email + ":" + password);
    this.user.base64Auth = base64;
    this.headers.delete('Authorization');
    this.headers.append("Authorization", 'Basic ' + base64);
    return this.user;
  }

  async updateUserWithPassword(userData, password: string): Promise<any> {
    try {
      const response = await this.http.put(this.routeService.routes.update, userData, {headers: this.headers}).toPromise();
      return this.afterUpdateWithPassword(response.json(), password);
    }
    catch (e) {
      return false;
    }
  }

  logout() {
    this.http.get(this.routeService.routes.logout, {headers: this.headers})
      .subscribe((res) => {
        this.afterLogout();
      })
  }

  afterLogout() {
    this.headers.delete('Authorization');
    this.user = null;
    this.cookies.remove('user');
  }

}
