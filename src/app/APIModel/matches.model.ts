export class Matches{
    id: number;
    matchday: number;
    status: String;
    utcDate: Date;
    awayTeam:{
        id: number;
        name: String;
    }
    homeTeam:{
        id: number;
        name: String; 
    }
    score:{
        fullTime:{
            homeTeam: number;
            awayTeam: number;
        }
    }
}