import {Injectable} from "@angular/core";
import {RouteService} from "./route-service";
import {User} from "../models/user";
import {Headers, Http} from "@angular/http";

@Injectable()
export class UserService {

  public user: User;

  headers: Headers = new Headers({
    "Content-Type": 'application/json'
  });

  constructor(private http: Http,
              private routeService: RouteService) {
  }

  async loginUser(email: string, pass: string) : Promise<any> {
    let base64 = btoa(email + ":" + pass);
    this.headers.append("Authorization", 'Basic ' + base64);
    const response = await this.http.get(this.routeService.routes.login, {headers: this.headers}).toPromise();
    return this.afterLogin(response.json(), base64);
      // .subscribe((res) => {
      //   console.log("Co to cm,ds");
      //   let data = res.json();
      //   if (data.id) {
      //     this.afterLogin(data, base64);
      //   }
      // }, (err) => {
      //   console.error("error login");
      //   this.headers.delete('Authorization');
      // });
  }

  async afterLogin(data, base64 = null) {
      let base = base64 || data.base64Auth;
      this.user = new User(data.id, data.email, data.name, data.city, data.roleType, base);
      this.headers.append("Authorization", 'Basic ' + this.user.base64Auth);
      return true;
  }

  isUserLogged(): any {
    return this.user != null;
  }

  registerUser(userData): any {
    this.http.post(this.routeService.routes.register, userData, this.headers)
      .subscribe((res) => {
        console.log(res);
      }, (err) => {
        console.log(err, 'register')
      });
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
