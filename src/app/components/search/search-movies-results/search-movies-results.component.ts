import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'

import { SearchType } from 'src/app/shared/enums/search-type.enum'

@Component({
  selector: 'app-search-movies-results',
  templateUrl: './search-movies-results.component.html',
  styleUrls: ['./search-movies-results.component.scss'],
})
export class SearchMoviesResultsComponent {
  @Input() searchType: string
  @Input() results: any

  public imgEndpoint = 'https://image.tmdb.org/t/p/w500/'
  private searchTypeEnum = SearchType

  constructor(private router: Router) {}

  movieTrackBy(index, item): number {
    return item.id || index
  }

  hasMovieImage(movieImageUrl: string): boolean {
    return movieImageUrl.includes(null) ? false : true
  }

  goToDetails(id: number): void {
    if (this.searchType === this.searchTypeEnum.MOVIE) {
      this.router.navigate([`movie/${id}`])
    } else {
      this.router.navigate([`tv-show/${id}`])
    }
  }
}
