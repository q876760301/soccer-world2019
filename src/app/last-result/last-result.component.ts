import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { getteam } from '../getteam';
import { Matches } from '../APIModel/matches.model';
import { standings, Standing, table } from '../APIModel/standings.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-last-result',
  templateUrl: './last-result.component.html',
  styleUrls: ['./last-result.component.css']
})
export class LastResultComponent implements OnInit {

  Standing: Standing;
  team_Standing: standings;
  team_Table: table[];
  Matchesd: Matches[]; 
  teamid:String;
  len:number;

  constructor(private activedrouted:ActivatedRoute ,private getteam: getteam, private dataServers: DataService) {
    //console.log(this.getteam.get_teamName());
    //console.log(this.getteam.get_id());
   }

  ngOnInit() {
    this.getid();
    this.getTeamInfo();
    this.getteamresult(); 
  }

  getid(){
    this.activedrouted.paramMap.subscribe(p=>{
      this.teamid = p.get('id');
      //console.log(id);
    });
  }

  getteamresult(){
    this.dataServers.getMatch().subscribe(data => {
      this.Matchesd = data;
      //console.log(this.Matchesd);
    });
  }

 getTeamInfo(){
  this.dataServers.getlastResult().subscribe(data =>{
    this.Standing = data;
    this.team_Standing = this.Standing.standings[0];
    this.team_Table = this.team_Standing.table;
    //console.log(this.Standing);
    //console.log(this.team_Table.length);
    this.len = this.team_Table.length;
  })
}

  getInfo(id){
    //console.log(id);
    for(let i = 0; i < this.len; i++){
      if(id == this.team_Table[i].team.id){
        //console.log(this.team_Table[i].team.id);
        //console.log(this.team_Table[i].team.crestUrl)
        return this.team_Table[i].team.crestUrl;     
      }
    }
  }
  
}
