import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { Routes, RouterModule } from '@angular/router';
import { FavouriteMoviesComponent } from './components/favourite-movies/favourite-movies.component';


const routes: Routes = [
  // { path: '', component: FavouriteMoviesComponent },
  { path: 'favourites', component: FavouriteMoviesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FavouriteMoviesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
