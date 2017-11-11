import { Injectable }   from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { UserService }  from "../services/user-service";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private userService : UserService,
        private router      : Router,
    ) {}

    canActivate() {
        // return true;
        if (this.userService.isUserLogged())
            return true;
        else
            this.router.navigateByUrl('/login');
        return false;
    }

}