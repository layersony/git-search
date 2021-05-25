import { Component, OnInit } from '@angular/core';
import { LandingService } from '../landing.service'
import { faReply ,faLaptopCode,faSearch ,faFileCode, faCodeBranch, faMapMarker, faUserAlt, faUserFriends, faClone} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  faFileCode = faFileCode
  faCodeBranch = faCodeBranch
  faMapMarker = faMapMarker
  faUserAlt = faUserAlt
  faUserFriends = faUserFriends
  faClone = faClone
  faSearch = faSearch
  faLaptopCode = faLaptopCode
  faReply = faReply

  repos: any = []
  usrde:any;
  searchrepos:any = []

  githubsearchService: LandingService;

  constructor(githubsearchService:LandingService) { 
    this.githubsearchService = githubsearchService
  }

  ngOnInit() {
    this.githubsearchService.getUserDetails('layersony')
    this.repos = this.githubsearchService.repoData
    this.usrde = this.githubsearchService.userdetail
  }

  maxvalue(){
    let fun = Number.MIN_VALUE;
    let arr = this.repos

    for (let i=0; i<arr.length;i++){
      if(arr[i].forks>fun){
        fun = arr[i].forks
      }
    }
    return fun;
  }

}
