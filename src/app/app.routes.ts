import { Routes } from '@angular/router';
import { SearchMoviesComponent } from './components/search/search-movies/search-movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

export const APP_ROUTES: Routes = [
  // { path: 'search', loadChildren: './components/search/search-movies.module#SearchMoviesModule' },
  { path: 'search', component: SearchMoviesComponent },
  { path: 'movie-details/:id', component: MovieDetailsComponent }
];
