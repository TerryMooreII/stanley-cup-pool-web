import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login/login.service";
import {Router} from "@angular/router";
import {CurrentUserService} from "../services/currentUser/current-user.service";

@Component({
    selector: 'scp-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
    isError:Boolean = false;
    user:any = {email:'asdf@gmail.com', password:'bulls2'};


    constructor(private loginService: LoginService, private router:Router, private currentUserService:CurrentUserService) {
    }

    ngOnInit() {
    }

    login() {
        this.loginService.login({email: this.user.email, password: this.user.password})
            .subscribe(data => {

                this.currentUserService.setContext(data);
                this.router.navigate(['/']);


            }, err => this.isError = true);
    }

}
