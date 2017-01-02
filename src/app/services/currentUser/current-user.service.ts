import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../../models/user";

@Injectable()
export class CurrentUserService {

    private _isLoggedIn:Boolean = false;

    private currentUser$:BehaviorSubject<User>;

    constructor() {
        this.currentUser$ = new BehaviorSubject(new User({}));
    }

    setContext (user){
        this._isLoggedIn = true;
        this.currentUser$.next(new User(user));
    }

    getContext() {
        return this.currentUser$.asObservable();
    }

    isLoggedIn(){
        return this._isLoggedIn;
    }

}
