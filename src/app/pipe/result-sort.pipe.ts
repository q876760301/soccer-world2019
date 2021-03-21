import { Pipe, PipeTransform } from '@angular/core';
import { Matches } from '../APIModel/matches.model';

@Pipe({
  name: 'resultSort',
  pure: false
})
export class ResultSortPipe implements PipeTransform {

  transform(gm: Matches[]): Matches[] {
    if(!gm){
      return gm;
    }
    return gm.sort((a,b)=>{
      let adate = Number(new Date(a.utcDate));
      let bdate = Number(new Date(b.utcDate));
      return bdate < adate ? -1: (bdate > adate ? 1 : 0);
    });
  }
}
