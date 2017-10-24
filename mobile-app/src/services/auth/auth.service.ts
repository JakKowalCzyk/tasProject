import { Injectable }           from "@angular/core";
import { Http, Headers }        from "@angular/http";
import { Events }               from "ionic-angular";
import { Storage }              from "@ionic/storage";

//models
import { User }                 from "../../models/user/User";

//services
import {RouteService}           from "../route/route.service";
import {HasResponse} from "../../pseudoTraits/hasResponse/HasResponse";

@Injectable()
export class AuthService extends HasResponse {

    public user     : User;

    headers         : Headers = new Headers({
        "Content-Type"  : 'application/json'
    });

    constructor(
        private http            : Http,
        private routeService    : RouteService,
        private eventss          : Events,
        private storage         : Storage,
    ) {
        super(eventss)
    }

    getHeaders() {
        return this.headers;
    }

    logWithStorage() {
        this.storage.get('user').then((val) => {
            if (val != null)
                this.afterLogin(val);
        })

    }

    logWithFingerPrint() {
        this.storage.get('deepUser').then((user) => {
            user ? this.afterLogin(user) : this.error({message : 'Spróbuj zalogować się klasycznie'}, 'login');
        })
    }

    login(email : string, pass : string) {
        let base64 = btoa(email + ":" + pass);
        this.headers.append("Authorization", 'Basic ' + base64);

        this.http.get(this.routeService.routes.login, { headers : this.headers })
            .subscribe((res) => {
                let data = res.json();
                if (data.id) {
                    this.afterLogin(data, base64);
                }
            },(err) => {
                this.error(err.json(), 'login')
            })
    }

    afterLogin(data, base64 = null) {
        let base  = base64 || data.base64Auth;
        this.user = new User(data.id, data.email, data.name, data.city, data.roleType, base);
        //jeśli base64 nie jest null, to znaczy, że ta metoda jest wywołana ze zwykłego logowania, więc wrzucamy usera do storage
        if (base64 != null) {
            this.storage.set('user'     , this.user);
            this.storage.set('deepUser' , this.user);
        } else {
            this.headers.append("Authorization", 'Basic ' + this.user.base64Auth);
        }
        this.success('Zalogowano poprawnie', 'logged');
    }

    register(data) {
      this.http.post(this.routeService.routes.register, data, { headers : this.headers })
          .subscribe((res) => {
            console.log(res.json());
          },(err) => {
            this.error(err.json(), 'register')
          });
    }

    logout() {
        this.http.get(this.routeService.routes.logout, { headers : this.headers })
            .subscribe((res) => {
                this.success('', 'loggedOut');
                this.afterLogout();
            })
    }

    afterLogout() {
        this.headers.delete('Authorization');
        this.user = null;
        this.storage.remove('user');
    }

    async checkForDeepUser() {
        let deepUser = await this.storage.get('deepUser');
        return deepUser != null;
    }
}
