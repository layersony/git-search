import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faReply ,faFileCode, faCodeBranch, faMapMarker, faUserAlt, faUserFriends, faClone, faLaptopCode  } from '@fortawesome/free-solid-svg-icons';
import { GithubsearchService } from '../githubsearch.service';


@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {
  faFileCode = faFileCode
  faCodeBranch = faCodeBranch
  faMapMarker = faMapMarker
  faUserAlt = faUserAlt
  faUserFriends = faUserFriends
  faClone = faClone
  faLaptopCode = faLaptopCode


  faReply = faReply
  @Output() goback = new EventEmitter<boolean>()
  hideRepo!: boolean;
  repos: any = []
  totalcount!: number


  reposearch:string = ''
  githubsearchService: GithubsearchService;

  constructor(githubsearchService:GithubsearchService) { 
    this.githubsearchService = githubsearchService
  }
  ngOnInit(): void {
    this.repos = this.githubsearchService.searchreps
    this.totalcount = this.githubsearchService.totalCount
    console.log(this.totalcount)
  }

  toback(){
    this.hideRepo = true
    this.goback.emit(this.hideRepo)
  }

  searchrepo(){
    this.githubsearchService.getRepos(this.reposearch)
    console.log(this.reposearch)
  }
  maxvalue(){
    let fun = Number.MIN_VALUE;
    let arr = this.repos

    for (let i=0; i<arr.length;i++){
      console.log(arr[i].forks)
      if(arr[i].forks>fun){
        fun = arr[i].forks
      }
    }
    console.log(fun)
    return fun;
  }

}
