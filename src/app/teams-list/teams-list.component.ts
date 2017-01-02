import {Component, OnInit} from "@angular/core";
import {Team} from "../models/team";
import {TeamService} from "../services/team/team.service";
import {Observable} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";



@Component({
    selector: 'scp-teams-list',
    templateUrl: './teams-list.component.html',
    styleUrls: ['./teams-list.component.less']
})
export class TeamsListComponent implements OnInit {
    teams: Observable<Array<Team>>;

    constructor(private teamService: TeamService, private domSanitizationService: DomSanitizer) {
    }

    ngOnInit() {
        this.teams = this.teamService.getAll();

    }

}
