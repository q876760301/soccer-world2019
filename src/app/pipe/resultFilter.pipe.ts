import { Pipe, PipeTransform } from '@angular/core';
import { Matches } from '../APIModel/matches.model';
@Pipe({
  name: 'resultFilter',
  pure: false
})

export class FilterPipe implements PipeTransform {

  transform(gm: Matches[], id:String): Matches[] {
    if(!gm){
      return gm;
    }

    return gm.filter(gm => 
      (gm.homeTeam.id.toString().indexOf(id.toLowerCase()) !== -1)
      ||(gm.awayTeam.id.toString().indexOf(id.toLowerCase()) !== -1)
      );
  }
}
