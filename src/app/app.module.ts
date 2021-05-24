import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // new
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { NgProgressModule } from '@ngx-progressbar/core';
// import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchQueryComponent } from './search-query/search-query.component';
import { RepodetailsComponent } from './repodetails/repodetails.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShortenPipe } from './shorten.pipe';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { HighestforksDirective } from './highestforks.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchQueryComponent,
    RepodetailsComponent,
    ShortenPipe,
    RepoSearchComponent,
    HighestforksDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    // NgProgressModule.forRoot(),
    // NgProgressHttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
