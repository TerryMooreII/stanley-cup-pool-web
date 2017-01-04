import {Component, OnInit} from '@angular/core';
import {CurrentUserService} from "../services/currentUser/current-user.service";
import {User} from "../models/user";
import {LoginService} from "../services/login/login.service";
import {Router} from "@angular/router";

@Component({
    selector: 'scp-sidebar-nav',
    templateUrl: './sidebar-nav.component.html',
    styleUrls: ['./sidebar-nav.component.less']
})
export class SidebarNavComponent implements OnInit {

    currentUser:User;

    constructor(private currentUserService: CurrentUserService, private loginService:LoginService, private router:Router) {
    }


    ngOnInit() {
        this.currentUserService.getContext().subscribe(user =>{
            this.currentUser = user;
        });
    }

    logout(){
        this.loginService.logout(this.currentUser);
        this.currentUserService.logout();
        this.router.navigate(['login']);
    }


}
