import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgxPaginationModule} from 'ngx-pagination';

import { HttpClientModule} from '@angular/common/http';
import { DataService } from './data.service';
import { TopScorersComponent } from './top-scorers/top-scorers.component';
import { TeamRankComponent } from './team-rank/team-rank.component';
import { AllResultComponent } from './all-result/all-result.component';
import { UpcomingMatchComponent } from './upcoming-match/upcoming-match.component';
import { TeamComponent } from './team/team.component';
import { TeamResultComponent } from './teamresult/team-result.component';
import { getteam } from './getteam';

import { FilterPipe } from './pipe/resultFilter.pipe';
import { ResultSortPipe } from './pipe/result-sort.pipe';
import { TeamsortPipe } from './pipe/teamsort.pipe';
import { LastResultComponent } from './last-result/last-result.component';
import { CompetitorComponent } from './competitor/competitor.component';
import { StatusPipe } from './pipe/status.pipe';
import { Getcompetitor } from './getcompetitor';
import { CresultComponent } from './cresult/cresult.component';
import { ClastResultComponent } from './clast-result/clast-result.component';




@NgModule({
  declarations: [  AppComponent, TopScorersComponent, TeamRankComponent, AllResultComponent, UpcomingMatchComponent, TeamComponent, routingComponents, TeamResultComponent, FilterPipe, ResultSortPipe, TeamsortPipe, LastResultComponent, CompetitorComponent, StatusPipe, CresultComponent, ClastResultComponent],
  imports: [  BrowserModule, BrowserAnimationsModule, AppRoutingModule, HttpClientModule, NgxPaginationModule],
  providers: [DataService, getteam, Getcompetitor],
  bootstrap: [AppComponent]
})
export class AppModule { }