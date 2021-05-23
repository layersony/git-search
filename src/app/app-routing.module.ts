import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { SearchQueryComponent } from './search-query/search-query.component';

const routes: Routes = [
  {
    path: 'home', component:SearchQueryComponent
  },
  {
    path: 'repos', component:RepoSearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
