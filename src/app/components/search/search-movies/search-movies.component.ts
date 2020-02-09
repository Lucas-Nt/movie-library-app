import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material';

import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

import { ScrollActionsService } from 'src/app/core/services/scroll-actions.service';
import { SearchType } from 'src/app/shared/enums/search-type.enum';
import { MovieTvShowMapper } from 'src/app/shared/mappers/movie-tv-show.mapper';
import { MovieTvShowViewModel } from 'src/app/shared/models/movie-tv-show.model';
import { MovieResource } from '../search-movies.resource';
import { TvShowResource } from '../search-tv-shows.resource';
import { SearchService } from '../search.service';

enum Results {
  ShowResults = 'Show Results',
  NoResultsFound = 'No Results Found'
}

export interface SearchParams {
  title: string;
  searchType: SearchType;
}

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent implements OnInit, OnDestroy {

  constructor(private movieResource: MovieResource,
              private tvShowResource: TvShowResource,
              private fb: FormBuilder,
              private searchService: SearchService,
              private scrollActionsService: ScrollActionsService,
              private movieTvShowMapper: MovieTvShowMapper) {}

  public storedParameter: SearchParams;
  public currentIndex: number;
  public maxItemsPerPage = 20;
  public totalResults: number;
  public results$ = this.searchService.movieTvShowResults;
  public results: MovieTvShowViewModel[];
  public searchInputForm: FormGroup;
  public resultEnum = Results;

  public get resultValue(): string {
    if (this.results === null) {
      return;
    }

    return this.results && this.results.length === 0
            ? this.resultEnum.NoResultsFound
            : this.resultEnum.ShowResults;
  }

  private _subscriptions = new Subscription();

  public ngOnInit(): void {
    this.buildSearchForm();
    this.watchResultChanges();
  }

  public ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  public executeSearch(parameters: SearchParams, pageEventObject?: PageEvent): void {
    this.searchService.lastMovieSearchParams = parameters;
    const pageToRequest = this.pageToRequest(pageEventObject);

    if (!parameters.title) {
      this.results$.next(null);
      return;
    }

    const searchTypes = {
      'Movie': () => this.searchForMovies(parameters.title, pageToRequest),
      'TV Show': () => this.searchForTvShows(parameters.title, pageToRequest),
    };

    searchTypes[parameters.searchType]();
  }

  public resetInput(): void {
    this.searchInputForm.get('title').reset();
  }

  public changePage(event: PageEvent): void {
    this.executeSearch(this.searchService.lastMovieSearchParams, event);
    this.scrollActionsService.scrollToTop('smooth');
  }

  private get _isSearchTypeMovie(): boolean {
    return this.searchService.lastMovieSearchParams.searchType === SearchType.MOVIE;
  }

  private pageToRequest(pageEventObject: PageEvent): number {
    const currentIndex = pageEventObject && pageEventObject.pageIndex;
    const hasNoCurrentIndex = !currentIndex || currentIndex === 0;

    return hasNoCurrentIndex ? 1 : currentIndex + 1;
  }

  private buildSearchForm(): void {
    this.searchInputForm = this.fb.group({
      searchType: [''],
      title: ['']
    });
  }

  private watchResultChanges(): void {

    const resultsSubscription = this.results$.pipe(
      distinctUntilChanged()
    ).subscribe((data: any) => {

      if (!data) {
        this.results = null;
        return;
      }

      const totalResults = data && data.total_results;

      this.currentIndex =  data.page - 1;

      this.results = totalResults > 0
                     ? data.results.map(item => this.transformToViewModel(item))
                     : [] ;

      this.totalResults = totalResults;
    });

    this._subscriptions.add(resultsSubscription);
  }

  private searchForMovies(title: string, pageToRequest: number): void {
    const movieSearchSubscription = this.movieResource.getMovies(title, pageToRequest)
    .subscribe((data: any) => {
      this.searchService.movieTvShowResults.next(data);
    });

    this._subscriptions.add(movieSearchSubscription);
  }

  private searchForTvShows(title: string, pageToRequest: number): void {
    const tvShowSearchSubscription = this.tvShowResource.getTvShows(title, pageToRequest)
    .subscribe((data: any) => {
      this.searchService.movieTvShowResults.next(data);
    });

    this._subscriptions.add(tvShowSearchSubscription);
  }

  private transformToViewModel(item): any {
    return this._isSearchTypeMovie ? this.movieTvShowMapper.toMovieViewModel(item)
                                   : this.movieTvShowMapper.toTvShowViewModel(item);
  }

}
