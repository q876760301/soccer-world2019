import { Injectable } from '@angular/core';


@Injectable()
export class getteam {
    teamname: String;
    teamid: number;

    constructor(){
        this.teamname = "AC Milan";
        this.teamid = 98;
    }
    
    set_teamName(teamname: String):void{
        this.teamname = teamname;
    }

    get_teamName(){
        return this.teamname;
    }

    set_id(teamid: number):void{
        this.teamid = teamid;
    }

    get_id(){
        return this.teamid;
    }
}
