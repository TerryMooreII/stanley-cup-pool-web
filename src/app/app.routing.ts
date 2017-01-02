import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {MainComponent} from "./main/main.component";
import {LoginComponent} from "./login/login.component";
import {IsLoggedInGuard} from "./services/guards/is-logged-in.service";
import {TeamsListComponent} from "./teams-list/teams-list.component";

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [IsLoggedInGuard],
        children: [
             {path: 'teams-list', component: TeamsListComponent},
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
