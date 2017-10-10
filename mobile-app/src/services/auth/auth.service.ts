import { Injectable }   from "@angular/core";
import { Http }         from "@angular/http";

//models
import { User } from "../../models/user/User";

@Injectable()
export class AuthService {

    public user : User;

    constructor(
        private http : Http,
    ) {

    }

    login(email : string, password : string) {
        let data = JSON.stringify({
            email       : email,
            password    : password
        })
    }

}