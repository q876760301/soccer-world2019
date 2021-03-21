import { Component, OnInit } from '@angular/core';
import { Standing, standings, table } from '../APIModel/standings.model';
import { Matches } from '../APIModel/matches.model';
import { ActivatedRoute } from '@angular/router';
import { Getcompetitor } from '../getcompetitor';
import { DataService } from '../data.service';

@Component({
  selector: 'app-clast-result',
  templateUrl: './clast-result.component.html',
  styleUrls: ['./clast-result.component.css']
})
export class ClastResultComponent implements OnInit {

  Standing: Standing;
  team_Standing: standings;
  team_Table: table[];
  Matchesd: Matches[]; 
  teamid:String;
  compid:String;
  len:number;

  constructor(private activedrouted:ActivatedRoute ,private getcomp: Getcompetitor, private dataServers: DataService) {}

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
    this.len = this.team_Table.length;
    //console.log(this.Standing);
    //console.log(this.team_Table.length);
  })
}

  getIcon(id){
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
