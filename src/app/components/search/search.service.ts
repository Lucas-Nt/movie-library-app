import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { SearchType } from 'src/app/shared/enums/search-type.enum';
import { SearchParams } from './search-movies/search-movies.component';

@Injectable()
export class SearchService {

  public lastMovieSearchParams: SearchParams;
  public movieTvShowResults = new BehaviorSubject(null);

  private _defaultSearchParams: SearchParams = {
    title: '',
    searchType: SearchType.MOVIE
  };

  public evaluateDataClearing(url: string): void {
    const isInSearchOrDetailView = url.includes('search') ||
                                   url.includes('details');

    if (!isInSearchOrDetailView) {
      this.resetParams();
      this.movieTvShowResults.next(null);
    }
  }

  private resetParams(): void {
    this.lastMovieSearchParams = {
      ...this._defaultSearchParams
    };
  }

}
