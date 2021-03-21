import { Injectable } from '@angular/core';
import {HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';
import { Scorer } from './APIModel/scorer.model';
import { Observable } from 'rxjs';
import { standings, Standing } from './APIModel/standings.model';
import { Matches } from './APIModel/matches.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl='https://api.football-data.org/v2/competitions/2019/';
  headers = new HttpHeaders().set('X-Auth-Token', '2c71a9b6142d43e7bbdb2268fa26fa36');
  constructor(private http: HttpClient){}

  getScorer():Observable<Scorer[]>{
    let nextapiUrl='scorers';
    return this.http.get<Scorer[]>(this.apiUrl + nextapiUrl, {headers:this.headers}); 
  }

  getTeam():Observable<standings[]>{
    let nextapiUrl='standings';
    return this.http.get<standings[]>(this.apiUrl + nextapiUrl, {headers:this.headers}); 
  }

  getlastResult():Observable<Standing>{
    let nextapiUrl='standings';
    return this.http.get<Standing>(this.apiUrl + nextapiUrl, {headers:this.headers}); 
  }


  getMatch():Observable<Matches[]>{
    let nextapiUrl='matches';
    return this.http.get<Matches[]>(this.apiUrl + nextapiUrl, {headers:this.headers}); 
  }




}
