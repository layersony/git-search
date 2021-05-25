import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { SearchQueryComponent } from './search-query/search-query.component';

const routes: Routes = [
  {
    path: 'index', component: LandingComponent
  },
  {
    path: 'home', component:SearchQueryComponent
  },
  {
    path: 'repos', component:RepoSearchComponent
  },
  {
    path: '',
    redirectTo: '/index', pathMatch:'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
