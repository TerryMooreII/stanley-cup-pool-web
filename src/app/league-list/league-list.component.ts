import {Component, OnInit} from "@angular/core";
import {LeagueService} from "../services/league/league.service";
import {League} from "../models/league";
import {Router} from "@angular/router";

@Component({
  selector: 'scp-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.less']
})
export class LeagueListComponent implements OnInit {
    leagues: Array<League> = [];

    constructor(private leagueService: LeagueService, private router:Router) {
    }

    ngOnInit() {
        this.leagueService.getAll().subscribe(leagues => this.leagues = leagues);
    }

    edit(league){
        this.router.navigate(['leagues', league._id]);
    }
}
