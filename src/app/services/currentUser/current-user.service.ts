import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../../models/user";

@Injectable()
export class CurrentUserService {

    private _isLoggedIn: Boolean = false;

    private currentUser$: BehaviorSubject<User>;

    constructor() {
        let ls = localStorage.getItem('current-user');
        let user = ls ? JSON.parse(ls) : {};
        this.currentUser$ = new BehaviorSubject(new User(user));
    }

    setContext(user) {
        this._isLoggedIn = true;
        localStorage.setItem('current-user', JSON.stringify(user));
        this.currentUser$.next(new User(user));
    }

    getContext() {
        return this.currentUser$.asObservable();
    }

    isLoggedIn() {
        return this._isLoggedIn;
    }

    logout(){
        localStorage.removeItem('current-user');
    }

}
