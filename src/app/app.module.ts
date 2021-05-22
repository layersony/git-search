import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // new
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchQueryComponent } from './search-query/search-query.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchQueryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
