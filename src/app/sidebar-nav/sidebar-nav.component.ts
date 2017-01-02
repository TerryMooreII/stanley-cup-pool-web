import {Component, OnInit} from '@angular/core';
import {CurrentUserService} from "../services/currentUser/current-user.service";
import {User} from "../models/user";

@Component({
    selector: 'scp-sidebar-nav',
    templateUrl: './sidebar-nav.component.html',
    styleUrls: ['./sidebar-nav.component.less']
})
export class SidebarNavComponent implements OnInit {

    currentUser:User;

    constructor(private currentUserService: CurrentUserService) {
    }


    ngOnInit() {
        this.currentUserService.getContext().subscribe(user =>{
            this.currentUser = user;
        });
    }

}
