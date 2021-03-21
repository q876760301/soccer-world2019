export class Standing{
    standings: standings[];
}

export class standings{
    table: table[];
    stage: String;
    type: String;
}

export class table{
    won: number;
    draw: number;
    goalDifference: number;
    goalsAgainst: number;
    goalsFor: number;
    lost: number;
    playedGames: number;
    points: number;
    position: number;
    team:{
        id: number;
        name: String;
        crestUrl: String;
    };
}