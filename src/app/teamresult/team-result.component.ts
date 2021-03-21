import { Component, OnInit} from '@angular/core';
import { getteam } from '../getteam';
import { DataService } from '../data.service';
import { Matches } from '../APIModel/matches.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-team-result',
  templateUrl: './team_result.component.html',
  styleUrls: ['./team-result.component.css']
})
export class TeamResultComponent implements OnInit {

  Matchesd: Matches[]; 

  teamid: String;
  p3: number =1;
  constructor(private activedrouted:ActivatedRoute, private getteam: getteam, private dataServers: DataService) {}

  ngOnInit() {
    this.getid();
    this.getteamresult();
  }

  getteamresult(){
    this.dataServers.getMatch().subscribe(data => {
      this.Matchesd = data;
      //console.log(this.Matchesd);
    });
  }

  getid(){
    this.activedrouted.paramMap.subscribe(p=>{
      this.teamid = p.get('id');
      //console.log(id);
    });
  }

}
