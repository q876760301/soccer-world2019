import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Getcompetitor } from '../getcompetitor';


@Component({
  selector: 'app-teampage',
  templateUrl: './teampage.component.html',
  styleUrls: ['./teampage.component.css']
})
export class TeampageComponent implements OnInit {

  teamid:String;
  constructor( private activedrouted:ActivatedRoute,private getcomp: Getcompetitor) { }

  ngOnInit() {
    this.getid();
  }

  getid(){
    this.activedrouted.paramMap.subscribe(p=>{
      this.teamid = p.get('id');
      //console.log(id);
    });
  }

}
