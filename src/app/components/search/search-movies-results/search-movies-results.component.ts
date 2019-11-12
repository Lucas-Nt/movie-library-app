import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-movies-results',
  templateUrl: './search-movies-results.component.html',
  styleUrls: ['./search-movies-results.component.scss']
})
export class SearchMoviesResultsComponent {

  constructor(private router: Router) {}

  @Input() results: any;

  imgEndpoint = 'https://image.tmdb.org/t/p/w500/';

  movieTrackBy(index, item): number {
    return item.id || index;
  }

  hasMovieImage(movieImageUrl: string): boolean {
    return movieImageUrl.includes(null) ? false : true;
  }

  goToDetails(id: number): void {
    this.router.navigate(['movie-details/' + id]);
  }

}
