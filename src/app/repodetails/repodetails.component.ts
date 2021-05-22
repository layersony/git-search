import { Component, OnInit } from '@angular/core';
import { GithubsearchService } from '../githubsearch.service'


@Component({
  selector: 'app-repodetails',
  templateUrl: './repodetails.component.html',
  styleUrls: ['./repodetails.component.css']
})
export class RepodetailsComponent implements OnInit {

  repos: any = []

  githubsearchService: GithubsearchService;

  constructor(githubsearchService:GithubsearchService) { 
    this.githubsearchService = githubsearchService
    
  }
  
  ngOnInit(): void {
    this.repos = this.githubsearchService.repoData
    console.log(this.githubsearchService.userdetail)
  }
}
