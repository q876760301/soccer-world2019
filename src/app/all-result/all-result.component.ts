import { Component, OnInit } from '@angular/core';
import { Matches } from '../APIModel/matches.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-all-result',
  templateUrl: './all-result.component.html',
  styleUrls: ['./all-result.component.css']
})
export class AllResultComponent implements OnInit {
  Matchesd: Matches[]; 
  p: number=1;
  
  constructor(private dataServers:DataService) { }

  ngOnInit() {
    this.getAll_Result();
  }

  getAll_Result(){
    this.dataServers.getMatch().subscribe(data => {
      this.Matchesd = data;
      //console.log(this.Matchesd);
    });
  }

}
