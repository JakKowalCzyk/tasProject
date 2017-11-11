import { Injectable }   from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { UserService }  from "../services/user-service";


@Injectable()
export class AdminGuard implements CanActivate {
    constructor(
        private userService : UserService,
        private router      : Router,
    ) {}

    canActivate() {
        // return true;
        if (this.userService.isAdmin())
            return true;
        else
            this.router.navigateByUrl('/main');
        return false;
    }

}