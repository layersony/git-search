import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() searchQuery = new EventEmitter<string>()


  constructor(githubsearchService:GithubsearchService) { 
    this.githubsearchService = githubsearchService
  }

  ngOnInit(): void {
  }

  submitQuery(){
    this.githubsearchService.getUserDetails(this.search)
    this.searchQuery.emit(this.search)
  }

}
