import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../models/user";
import {UserService} from "../services/user/user.service";

@Component({
    selector: 'scp-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

    users: Array<User> = [];

    constructor(private userService: UserService, private router: Router) {
    }

    ngOnInit() {
        this.userService.getAll().subscribe(users => this.users = users);
    }

    edit(user) {
        console.log(user)
        this.router.navigate(['users', user._id]);
    }
}
