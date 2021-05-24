import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any): any {
    let uploadtime = new Date(value).getTime() // time on list
    let tdate = new Date().getTime(); // current time
    let diff = tdate - uploadtime; 
    var diffday = Math.floor(diff% 86400000)% 7;
    var diffHrs = Math.floor((diff % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diff % 86400000) % 3600000) / 60000);  // mins
    if (diffHrs == 0){
      return diffMins +' mins ago'
    }
    else if(diffday){
      return diffday +' Days ago'
    }
    else if (diffHrs ){
      return diffHrs + ' hr(s) ago'
    }
  }
}
