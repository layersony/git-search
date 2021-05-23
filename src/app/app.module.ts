import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // new
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchQueryComponent } from './search-query/search-query.component';
import { RepodetailsComponent } from './repodetails/repodetails.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShortenPipe } from './shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchQueryComponent,
    RepodetailsComponent,
    ShortenPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
