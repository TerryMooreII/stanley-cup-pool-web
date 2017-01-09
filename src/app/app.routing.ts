import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {MainComponent} from "./main/main.component";
import {LoginComponent} from "./login/login.component";
import {IsLoggedInGuard} from "./services/guards/is-logged-in.service";
import {TeamsListComponent} from "./teams-list/teams-list.component";
import {LeagueListComponent} from "./league-list/league-list.component";
import {LeagueEditComponent} from "./league-edit/league-edit.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {BracketAdminComponent} from "./bracket-admin/bracket-admin.component";

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [IsLoggedInGuard],
        children: [
            {path: 'teams', component: TeamsListComponent},
            {path: 'leagues', component: LeagueListComponent},
            {path: 'leagues/new', component: LeagueEditComponent},
            {path: 'leagues/:id', component: LeagueEditComponent},
            {path: 'users', component: UserListComponent},
            {path: 'users/new', component: UserEditComponent},
            {path: 'users/:id', component: UserEditComponent},
            {path: 'bracket-admin', component: BracketAdminComponent},
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
