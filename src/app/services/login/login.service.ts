import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

    url:String = 'http://localhost:3000';

    constructor(private http: Http) {
    }

    login(creds): Observable<any> {
        return this.http.post(this.url + '/login', creds)
            .map((r: Response) => r.json());

    }

    logout(user){
        this.http.post(this.url + '/logout', user);
    }

}
