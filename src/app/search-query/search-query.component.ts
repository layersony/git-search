import { Component, OnInit } from '@angular/core';
import { GithubsearchService } from '../githubsearch.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-search-query',
  templateUrl: './search-query.component.html',
  styleUrls: ['./search-query.component.css']
})
export class SearchQueryComponent implements OnInit {
  faSearch = faSearch;
  search:string = '';
  githubsearchService: GithubsearchService;
  public shwinput = true;
  public showrepo = false;



  constructor(githubsearchService:GithubsearchService) { 
    this.githubsearchService = githubsearchService
  }

  ngOnInit(): void {
  }

  submitQuery(){
    this.githubsearchService.getUserDetails(this.search)
    this.shwinput = false;
    this.showrepo = true;
  }

  showrepodata(event:any){
    this.shwinput = event;
    this.showrepo = false;
  }
}
