import { Component } from '@angular/core';
import { MovieResource } from '../search-movies.resource';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent {

  constructor(private movieResource: MovieResource) {}

  // TODO: define the type
  results: any;

  executeSearch(param) {

    if (!param) {
      this.results = [];
      return;
    }

    this.movieResource.getMovies(param).subscribe((data: any) => {
      this.results = data.results;
    });
  }

}
