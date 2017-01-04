import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, RequestOptions} from '@angular/http';

import { AppComponent } from './app.component';
import {MaterializeModule} from "angular2-materialize";
import {appRouting} from "./app.routing";
import { LoginComponent } from './login/login.component';
import {LoginService} from "./services/login/login.service";
import { MainComponent } from './main/main.component';
import {CurrentUserService} from "./services/currentUser/current-user.service";
import {IsLoggedInGuard} from "./services/guards/is-logged-in.service";
import {TeamService} from "./services/team/team.service";
import { TeamsListComponent } from './teams-list/teams-list.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import {DefaultRequestOptions} from "./services/default-request-options/default-request-options.service";
import { LeagueListComponent } from './league-list/league-list.component';
import {LeagueService} from "./services/league/league.service";
import { LeagueEditComponent } from './league-edit/league-edit.component';
import {UserService} from "./services/user/user.service";
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    TeamsListComponent,
    SidebarNavComponent,
    LeagueListComponent,
    LeagueEditComponent,
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    appRouting
  ],
  providers: [
      {provide: RequestOptions, useClass: DefaultRequestOptions },
      LeagueService,
      UserService,
      LoginService,
      TeamService,
      CurrentUserService,
      IsLoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
