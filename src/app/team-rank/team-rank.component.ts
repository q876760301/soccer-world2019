import { Component, OnInit } from '@angular/core';
import { standings } from '../APIModel/standings.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-team-rank',
  templateUrl: './team-rank.component.html',
  styleUrls: ['./team-rank.component.css']
})
export class TeamRankComponent implements OnInit {

  team_rank: standings[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.get_Team_Rank();
  }

  get_Team_Rank(){
    this.dataService.getTeam().subscribe(data =>{
      this.team_rank = data;
      //console.log(this.team_rank);
    })
  }

}
