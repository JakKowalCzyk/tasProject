import { Injectable }   from "@angular/core";
import { Http, RequestOptions, Headers }         from "@angular/http";

//models
import { User } from "../../models/user/User";
import {RouteService} from "../route/route.service";

@Injectable()
export class AuthService {

    public user     : User;
    headers         : Headers = new Headers({
        "Content-Type"  : 'application/json'
    });

    constructor(
        private http : Http,
        private routeService : RouteService,
    ) {
        // this.headers.append("content-Type", "application/json");
        // this.headers.append("X-Requested-With", "XMLHttpRequest");
    }

    getHeaders() {
        return this.headers;
    }

    login(email : string, password : string) {
        let data = JSON.stringify({
            email       : email,
            password    : password
        })
    }

    register(data) {
        console.log("head", this.headers);
      this.http.post(this.routeService.routes.register, data, { headers : this.headers})
          .subscribe((res) => {
            console.log(res.json());
          });
    }

}