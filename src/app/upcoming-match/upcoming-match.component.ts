import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Matches } from '../APIModel/matches.model';


@Component({
  selector: 'app-upcoming-match',
  templateUrl: './upcoming-match.component.html',
  styleUrls: ['./upcoming-match.component.css']
})
export class UpcomingMatchComponent implements OnInit {

  Matchesd: Matches[]; 


  p2:number=1;
  length: number;

  constructor(private dataServers: DataService) { }

  ngOnInit() {
    this.getUpcoming_Match();
  }

  getUpcoming_Match(){
    this.dataServers.getMatch().subscribe(data => {
      this.Matchesd = data;
      //console.log(this.Matchesd);
    });
  }

  getday(getdate){
    var today = new Date();
    getdate = new Date(getdate);

    var day = getdate.getDate() - today.getDate();
    var month = getdate.getMonth() - today.getMonth();
    var year = getdate.getFullYear() - today.getFullYear();
    var totalDay = day + month * 30 + year * 365;
    
    if(totalDay == 0){
      return (getdate.getHours() < 10 ? "0" + getdate.getHours() : getdate.getHours()) + ":" + (getdate.getMinutes() < 10 ? "0" + getdate.getMinutes() : getdate.getMinutes()) + ":" + (getdate.getSeconds() < 10 ? "0" + getdate.getSeconds() : getdate.getSeconds());
    }
    return totalDay + " days";
  }
}
