import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../services/user/user.service";
import {Subscription} from "rxjs";
import {User} from "../models/user";

@Component({
    selector: 'scp-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.less']
})
export class UserEditComponent implements OnInit, OnDestroy {

    private subscription: Subscription;
    user: User = new User();

    constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {
    }

    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe(
            (param: any) => {
                let id = param['id'];
                if (id) {
                    this.getUser(id);
                }
            });
    }

    getUser(id) {
        this.userService.get(id).subscribe(user => this.user = user);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    save() {
        let method = this.user._id ? 'update' : 'save';

        this.userService[method](this.user).subscribe(() => {
            this.router.navigate(['/users']);
        });
    }

    delete(league) {
        this.userService.delete(league).subscribe(() => {
            this.router.navigate(['/users']);
        });
    }


}
