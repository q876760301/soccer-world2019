import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Matches } from '../APIModel/matches.model';
import { standings, Standing, table } from '../APIModel/standings.model';
import { ActivatedRoute } from '@angular/router';
import { Getcompetitor } from '../getcompetitor';

declare function getlength(): any;

@Component({
  selector: 'app-cresult',
  templateUrl: './cresult.component.html',
  styleUrls: ['./cresult.component.css']
})
export class CresultComponent implements OnInit {


  Standing: Standing;
  team_Standing: standings;
  team_Table: table[];
  Matchesd: Matches[]; 
  teamid:String;
  compid:String;
  len:number;
  tablelen:number;

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
    //console.log(this.Standing);
    //console.log(this.team_Table.length);
    this.len = this.team_Table.length;
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

  checklength(){
    this.tablelen = getlength();
    console.log(this.tablelen);
    return this.tablelen;
  }

}
