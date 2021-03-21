import { Component, OnInit } from '@angular/core';
import { standings } from '../APIModel/standings.model';
import { DataService } from '../data.service';
import { getteam } from '../getteam';
import { Router } from '@angular/router';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team_rank: standings[];

  teamname: String;
  teamid: number;
  constructor(private dataService: DataService,private getteam:getteam, private router: Router) {}

  ngOnInit() {
    this.get_Team();
  }

  get_Team(){
    this.dataService.getTeam().subscribe(data =>{
      this.team_rank = data;
      //console.log(this.team_rank);
    })
  }
  
}
