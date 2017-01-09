import {Component, OnInit} from '@angular/core';
import {TeamService} from "../services/team/team.service";
import {Team} from "../models/team";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'scp-teams-dropdown',
    templateUrl: './teams-dropdown.component.html',
    styleUrls: ['./teams-dropdown.component.less']
})
export class TeamsDropdownComponent implements OnInit {
    teams: Array<Team>;
    selected:Team;
    id:string = '' + Date.now();

    constructor(private teamService: TeamService,  private domSanitizationService: DomSanitizer) {
    }

    ngOnInit() {
        this.teamService.getAll().subscribe(teams => this.teams = teams);
    }

    select(team){
        this.selected = team;
    }

}
