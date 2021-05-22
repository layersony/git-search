import { Component } from '@angular/core';
import { GithubsearchService } from './githubsearch.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gitsearch';

  constructor(private githubsearchService:GithubsearchService){
    this.githubsearchService = githubsearchService
  }

  checkworking(){
    this.githubsearchService.getUserRepos('layersony')
  }
}
