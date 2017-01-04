import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {League} from "../../models/league";

@Injectable()
export class LeagueService {

    private url = 'http://localhost:3000';
    private endpoint = '/leagues';

    constructor(private http: Http) {
    }

    getAll() {
        return this.http.get(this.url + this.endpoint)
            .map((r:Response) => r.json() as League[])
    }

    get(id) {
        return this.http.get(this.url + this.endpoint + '/' + id)
            .map((r:Response) => r.json() as League)
    }

    save(league){
        return this.http.post(this.url + this.endpoint, league)
            .map((r:Response) => r.json() as League)
    }

    update(league){
        return this.http.put(this.url + this.endpoint + '/' + league._id, league)
            .map((r:Response) => r.json() as League)
    }

    delete(league){
        return this.http.delete(this.url + this.endpoint + '/' + league._id, league);
    }
}
