import { Injectable }           from "@angular/core";
import { Http, Headers }        from "@angular/http";
import { Events }               from "ionic-angular";

//models
import { User }                 from "../../models/user/User";

//services
import {RouteService}           from "../route/route.service";

@Injectable()
export class AuthService {

    public user     : User;

    headers         : Headers = new Headers({
        "Content-Type"  : 'application/json'
    });

    constructor(
        private http            : Http,
        private routeService    : RouteService,
        private events          : Events
    ) {
    }

    getHeaders() {
        return this.headers;
    }

    login(email : string, pass : string) {
        let base64 = btoa(email + ":" + pass);
        this.headers.append("Authorization", 'Basic ' + base64);

        this.http.get(this.routeService.routes.login, { headers : this.headers })
            .subscribe((res) => {
                let data = res.json();
                if (data.id) {
                    this.user = new User(data.id, data.email, data.name, data.city, base64);
                    this.events.publish('logged');
                }
            },(err) => {
                console.log(err.json())
            })
    }

    register(data) {
      this.http.post(this.routeService.routes.register, data, { headers : this.headers })
          .subscribe((res) => {
            console.log(res.json());
          });
    }

}