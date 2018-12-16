import { FavouriteMoviesComponent } from './components/favourite-movies/favourite-movies.component';
import { Routes } from '@angular/router';
import { SearchMoviesComponent } from './components/search/search-movies/search-movies.component';

export const APP_ROUTES: Routes = [
  // { path: 'search', loadChildren: './components/search/search-movies.module#SearchMoviesModule' },
  { path: 'search', component: SearchMoviesComponent },
  { path: 'favourites', component: FavouriteMoviesComponent }
];
