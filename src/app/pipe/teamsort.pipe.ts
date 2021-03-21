import { Pipe, PipeTransform } from '@angular/core';
import { table } from '../APIModel/standings.model';

@Pipe({
  name: 'teamsort'
})
export class TeamsortPipe implements PipeTransform {

  transform(team: table[]): table[] {
    if(!team){
      return team;
    }
    return team.sort((a,b)=>{
      let aname : String = a.team.name.toLowerCase();
      let bname : String = b.team.name.toLowerCase();

      return aname < bname ? -1: (aname > bname ? 1 : 0);
    });
  }

}
