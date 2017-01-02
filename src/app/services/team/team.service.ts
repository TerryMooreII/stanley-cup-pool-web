import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Team} from "../../models/team";

@Injectable()
export class TeamService {

    private url = 'http://localhost:3000';
    private endpoint = '/teams';

    constructor(private http: Http) {
    }

    getAll() {
        return this.http.get(this.url + this.endpoint)
            .map((r:Response) => r.json() as Team[])
    }

}
