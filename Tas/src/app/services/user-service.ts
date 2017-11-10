import {Injectable} from "@angular/core";
import {RouteService} from "./route-service";
import {User} from "../models/user";
import {Headers, Http} from "@angular/http";

@Injectable()
export class UserService {

  user: User;

  headers: Headers = new Headers({
    "Content-Type": 'application/json'
  });

  constructor(private http: Http,
              private routeService: RouteService) {
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
    return this.user;
  }

  isUserLogged(): any {
    return this.user != null;
  }

  isAdmin(): any {
    return this.user.roleType == this.user.role.ROLE_ADMIN;
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
  }

}
