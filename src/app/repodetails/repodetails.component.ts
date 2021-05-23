import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { GithubsearchService } from '../githubsearch.service'
import { faUtensils ,faLaptopCode,faSearch ,faFileCode, faCodeBranch, faMapMarker, faUserAlt, faUserFriends, faClone} from '@fortawesome/free-solid-svg-icons';
import { Userdetail } from '../userdetail'

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
  usrde:any;
  searchrepos:any = []

  reposearch:string = ''
  
  githubsearchService: GithubsearchService;

  constructor(githubsearchService:GithubsearchService) { 
    this.githubsearchService = githubsearchService
  }
  
  ngOnInit() {
    this.repos = this.githubsearchService.repoData
    this.usrde = this.githubsearchService.userdetail
    console.log(this.usrde)
  }
  
  searchrepo(){
    // for (let i = 0; i< this.repos.length; i++){
    //   // console.log(this.repos[i].name.toLowerCase().split(/[-_ ]/g))
    //   // if (this.repos[i][0].name.toLowerCase().split(/[-_ ]/g) === this.reposearch){
    //   //   console.log('working')
    //   // }
    // }
  }
}
