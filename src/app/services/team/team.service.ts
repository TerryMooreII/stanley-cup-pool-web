import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Team} from "../../models/team";
import 'rxjs/Rx';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class TeamService {

    teamsCache:BehaviorSubject<Array<Team>> = new BehaviorSubject([]);

    private url = 'http://localhost:3000';
    private endpoint = '/teams';

    constructor(private http: Http) {
        this.http.get(this.url + this.endpoint)
            .map((r:Response) => r.json() as Team[])
            .subscribe(teams => this.teamsCache.next(teams));
    }

    getAll() {
        return this.teamsCache.asObservable();
    }

}
