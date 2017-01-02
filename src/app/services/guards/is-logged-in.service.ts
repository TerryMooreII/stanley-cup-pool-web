import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, Router} from "@angular/router";
import {CurrentUserService} from "../currentUser/current-user.service";

@Injectable()
export class IsLoggedInGuard implements CanActivate, CanActivateChild {

    constructor(private currentUserService: CurrentUserService, private router: Router) {
    }

    canActivate() {
        return this.currentUserService.getContext().map(data => {
            if (data.apikey) {
                return true;
            }

            this.router.navigate(['/login']);
            return false;
        });
    }

    canActivateChild() {
        return false;
    }


}
