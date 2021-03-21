import { Component, OnInit } from '@angular/core';
import { standings } from '../APIModel/standings.model';
import { DataService } from '../data.service';
import { getteam } from '../getteam';
import { Router, ActivatedRoute } from '@angular/router';
import { Getcompetitor } from '../getcompetitor';

@Component({
  selector: 'app-competitor',
  templateUrl: './competitor.component.html',
  styleUrls: ['./competitor.component.css']
})
export class CompetitorComponent implements OnInit {

  team_rank: standings[];
  teamname: String;
  teamid: String;
  compid: String;

  constructor(private activedrouted:ActivatedRoute, private dataService: DataService,private getcom:Getcompetitor,private getteam:getteam, private router: Router) {}

  ngOnInit() {
    this.getid();
    this.get_Component();
    //console.log(this.getcom.getname());
  }
  

  get_Component(){
    this.dataService.getTeam().subscribe(data =>{
      this.team_rank = data;
      //console.log(this.team_rank);
    })
  }

  getid(){
    this.activedrouted.paramMap.subscribe(p=>{
      this.teamid = p.get('id');
      //console.log(id);
    });
  }

  nowteam(id){
    if(this.teamid == id){
      return "nowteam";
    }
    return "competitor";
  }

  haschoose(id){
    if(this.teamid == id){
      return "  (Now)";
    }
    return;
  }
  
  radiochange(e){
    this.compid = e.target.value;
    this.getcom.setid(this.compid);
  }

  c(id){
    if((this.teamid == id)&&(this.compid == id)){
      return true;
    }
    return false;
  }

}
