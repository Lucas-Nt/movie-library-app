import { Routes } from '@angular/router';
import { SearchMoviesComponent } from './components/search/search-movies/search-movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieDetailsResolver } from './components/movie-details/movie-details.resolver';

export const APP_ROUTES: Routes = [
  {
    path: 'search-movies',
    component: SearchMoviesComponent
  },
  {
    path: 'movie-details/:id',
    component: MovieDetailsComponent,
    resolve: {
      movieDetails: MovieDetailsResolver
    }
  }
];
