import { Component, OnInit } from '@angular/core';
import { GithubsearchService } from '../githubsearch.service'

@Component({
  selector: 'app-search-query',
  templateUrl: './search-query.component.html',
  styleUrls: ['./search-query.component.css']
})
export class SearchQueryComponent implements OnInit {

  search:string = '';
  githubsearchService: GithubsearchService;

  constructor(githubsearchService:GithubsearchService) { 
    this.githubsearchService = githubsearchService
  }

  ngOnInit(): void {
  }

  submitQuery(){
    this.githubsearchService.getUserDetails(this.search)
  }

}
