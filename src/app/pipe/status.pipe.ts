import { Pipe, PipeTransform } from '@angular/core';
import { Matches } from '../APIModel/matches.model';

@Pipe({
  name: 'Status',
  pure: false
})
export class StatusPipe implements PipeTransform {

  transform(gm: Matches[], status:String): Matches[] {
    if(!gm){
      return gm;
    }

    return gm.filter(gm => (gm.status.toLowerCase().indexOf(status.toLowerCase()) !== -1));
  }

}
