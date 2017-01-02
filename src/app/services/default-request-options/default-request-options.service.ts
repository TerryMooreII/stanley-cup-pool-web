import { Injectable } from '@angular/core';
import {BaseRequestOptions, Headers, RequestOptionsArgs, RequestOptions} from "@angular/http";
import {CurrentUserService} from "../currentUser/current-user.service";
import {User} from "../../models/user";


@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {
    user:User;

    constructor(private currentUserService:CurrentUserService){
        super();
        this.currentUserService.getContext().subscribe(user => {
            this.user = user;
        });


    }

    merge(options?: RequestOptionsArgs): RequestOptions {
        let newOptions = super.merge(options);

        newOptions.headers.set('X-API-KEY', this.user.apikey);
        return newOptions;
    }
}
