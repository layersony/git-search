import { Component, OnInit } from '@angular/core';
import { GithubsearchService } from '../githubsearch.service'
import { faUtensils ,faLaptopCode,faSearch ,faFileCode, faCodeBranch, faMapMarker, faUserAlt, faUserFriends, faClone} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-repodetails',
  templateUrl: './repodetails.component.html',
  styleUrls: ['./repodetails.component.css']
})
export class RepodetailsComponent implements OnInit {
  faFileCode = faFileCode
  faCodeBranch = faCodeBranch
  faMapMarker = faMapMarker
  faUserAlt = faUserAlt
  faUserFriends = faUserFriends
  faClone = faClone
  faSearch = faSearch
  faLaptopCode = faLaptopCode
  faUtensils = faUtensils

  repos: any = []
  

  githubsearchService: GithubsearchService;

  constructor(githubsearchService:GithubsearchService) { 
    this.githubsearchService = githubsearchService
    
  }
  
  ngOnInit(): void {
    this.repos = this.githubsearchService.repoData
  }

  showAll(){
    
  }

}
