import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {TeamService} from "../services/team/team.service";
import {Team} from "../models/team";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'scp-teams-dropdown',
    templateUrl: './teams-dropdown.component.html',
    styleUrls: ['./teams-dropdown.component.less']
})
export class TeamsDropdownComponent implements OnInit {

    @Input() division:string;
    @Input() conference:string;
    @Input() value:any;
    @Output() select = new EventEmitter()

    teams: Array<Team>;
    selected:Team;
    id:string = '' + Date.now() + (Math.floor(Math.random() * 1000) + 1);


    constructor(private teamService: TeamService,  private domSanitizationService: DomSanitizer) {
    }

    ngOnInit() {
        this.teamService.getAll()
            .subscribe(teams => {
                if (this.division){
                    this.teams = teams.filter(team => {
                        if (team.division.toLowerCase() === this.division){
                            return team;
                        }
                    })
                }else if (this.conference){
                    this.teams = teams.filter(team => {
                        if (team.conference.toLowerCase() === this.conference){
                            return team;
                        }
                    })
                }else {
                    this.teams = teams;
                }
            });
    }

    onSelect(team){
        this.select.next(team);
    }

}
