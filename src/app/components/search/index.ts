import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { SearchMoviesInputComponent } from './search-movies-input/search-movies-input.component';
import { SearchMoviesResultsComponent } from './search-movies-results/search-movies-results.component';

import { MovieResource } from './search-movies.resource';
import { SearchService } from './search.service';

export const COMPONENTS = [
  SearchMoviesComponent,
  SearchMoviesInputComponent,
  SearchMoviesResultsComponent
];

export const RESOURCES = [
  MovieResource
];

export const SERVICES = [
  SearchService
];

