import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { SearchMoviesFilterComponent } from './search-movies-filter/search-movies-filter.component';
import { SearchMoviesResultsComponent } from './search-movies-results/search-movies-results.component';

import { MovieResource } from './search-movies.resource';
import { SearchService } from './search.service';

export const COMPONENTS = [
  SearchMoviesComponent,
  SearchMoviesFilterComponent,
  SearchMoviesResultsComponent
];

export const RESOURCES = [
  MovieResource
];

export const SERVICES = [
  SearchService
];

