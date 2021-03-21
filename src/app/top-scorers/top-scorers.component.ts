import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Scorer } from '../APIModel/scorer.model';

@Component({
  selector: 'app-top-scorers',
  templateUrl: './top-scorers.component.html',
  styleUrls: ['./top-scorers.component.css']
})
export class TopScorersComponent implements OnInit {

  sco: Scorer[];


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.get_Top_10_Scorers();
  }

  get_Top_10_Scorers(){
    this.dataService.getScorer().subscribe(data =>{
      this.sco = data;
      //console.log(this.sco);
    })
  }

}
