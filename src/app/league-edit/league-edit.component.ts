import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {League} from "../models/league";
import {User} from "../models/user";
import {UserService} from "../services/user/user.service";
import {LeagueService} from "../services/league/league.service";

@Component({
    selector: 'scp-league-edit',
    templateUrl: './league-edit.component.html',
    styleUrls: ['./league-edit.component.less']
})
export class LeagueEditComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    league: League = new League();
    seasons: Array<number>;
    points: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    users: Array<User> = [];

    constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private leagueService: LeagueService, private router: Router) {
        let year = new Date().getFullYear();
        this.seasons = [year + 1, year, year - 1];

    }

    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe(
            (param: any) => {
                let id = param['id'];
                if (id) {
                    this.getLeague(id);
                }

            });

        this.userService.getAll().subscribe(users => (this.users = users));
    }

    getLeague(id) {
        this.leagueService.get(id).subscribe(league => this.league = league);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    save() {
        let method = this.league._id ? 'update' : 'save';

        this.leagueService[method](this.league).subscribe(data => {
            console.log(data);
            this.router.navigate(['/leagues']);
        })
    }

    delete(league) {
        this.leagueService.delete(league).subscribe(() => {
            this.router.navigate(['/leagues']);
        })
    }

    isMember(user) {
        return this.league.members.some(member => user.email === member.email);
    }

    member(user) {
        let index = this.league.members.findIndex(member => member.email === user.email);
        if (index > -1) {
            this.league.members.splice(index, 1);
        } else {
            this.league.members.push(user);
        }
    }

}
