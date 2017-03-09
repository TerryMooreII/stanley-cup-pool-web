import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'scp-bracket-admin',
    templateUrl: './bracket-admin.component.html',
    styleUrls: ['./bracket-admin.component.less']
})
export class BracketAdminComponent implements OnInit {
    bracket: any;

    constructor() {
    }

    ngOnInit() {

        this.bracket = {
            year: 2017,
            playoffs: {
                eastern: {
                    one: {
                        team: {
                            shortName: 'Ottawa'
                        },
                        wins: {}
                    }
                }
            }
        }
    }

}
