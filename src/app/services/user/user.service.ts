import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {User} from "../../models/user";

@Injectable()
export class UserService {

    private url = 'http://localhost:3000';
    private endpoint = '/users';

    constructor(private http: Http) {
    }

    getAll() {
        return this.http.get(this.url + this.endpoint)
            .map((r: Response) => r.json() as User[])
    }

    get(id) {
        return this.http.get(this.url + this.endpoint + '/' + id)
            .map((r: Response) => r.json() as User)
    }

    save(user) {
        return this.http.post(this.url + this.endpoint, user)
            .map((r: Response) => r.json() as User)
    }

    update(user) {
        return this.http.put(this.url + this.endpoint + '/' + user._id, user)
            .map((r: Response) => r.json() as User)
    }

    delete(user) {
        return this.http.delete(this.url + this.endpoint + '/' + user._id);

    }
}
