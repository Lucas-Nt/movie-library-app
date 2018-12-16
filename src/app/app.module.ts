import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { FavouriteMoviesComponent } from './components/favourite-movies/favourite-movies.component';
import { APP_ROUTES } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchMoviesModule } from './components/search/search-movies.module';


@NgModule({
  declarations: [
    AppComponent,
    FavouriteMoviesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    SearchMoviesModule,
    RouterModule.forRoot(APP_ROUTES),
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
