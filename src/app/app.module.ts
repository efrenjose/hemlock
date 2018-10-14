import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { TeamMembersService } from './shared/team-members.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Http } from '../../node_modules/@angular/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TeamMembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [TeamMembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 