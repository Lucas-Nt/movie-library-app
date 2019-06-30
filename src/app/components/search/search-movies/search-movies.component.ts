import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { MovieResource } from '../search-movies.resource';
import { Subscription } from 'rxjs';
import { MovieMapper } from 'src/app/shared/mappers/movie.mapper';
import { MovieViewModel } from 'src/app/shared/models/movie.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SearchService } from '../search.service';
import { distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent implements OnInit, OnDestroy {

  constructor(private movieResource: MovieResource,
              private fb: FormBuilder,
              private searchService: SearchService,
              private movieMapper: MovieMapper) {}

  public storedParameter: string;
  public currentIndex: number;
  public pageLength: number;
  public totalResults: number;
  public isSearchSticky: boolean;
  public results$ = this.searchService.movieResults;
  public results: MovieViewModel[];
  public searchInputForm: FormGroup;

  private _subscriptions = new Subscription();

  get hasResults() {
    return this.results &&
           this.results.length > 0;
  }

  ngOnInit(): void {
    this.buildSearchForm();
    this.watchResultChanges();
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  public executeSearch(param: string, pageEventObject?: PageEvent): void {
    this.storedParameter = this.searchService.lastMovieSearchParam = param;
    const pageToRequest = this.pageToRequest(pageEventObject);

    if (!param) {
      this.results$.next(null);
      return;
    }

    const movieSearchSubscription = this.movieResource.getMovies(param, pageToRequest)
    .subscribe((data: any) => {
      this.searchService.movieResults.next(data);
    });

    this._subscriptions.add(movieSearchSubscription);
  }

  public resetForm(): void {
    this.searchInputForm.reset();
  }

  public changePage(event: PageEvent): void {
    this.executeSearch(this.searchService.lastMovieSearchParam, event);
  }

  private pageToRequest(pageEventObject: PageEvent): number {
    const currentIndex = pageEventObject && pageEventObject.pageIndex;
    const hasNoCurrentIndex = !currentIndex || currentIndex === 0;

    return hasNoCurrentIndex ? 1 : currentIndex + 1;
  }

  private buildSearchForm(): void {
    this.searchInputForm = this.fb.group({
      movieName: ['']
    });
  }

  private watchResultChanges(): void {

    const resultsSubscription = this.results$.pipe(
      distinctUntilChanged()
    ).subscribe((data: any) => {

      if (!data) {
        this.results = [];
        return;
      }

      const currentPage = data.page;
      const totalPages = data.total_pages;

      this.currentIndex = currentPage - 1;
      this.results = data.results.map(item => this.movieMapper.toViewModel(item));
      this.totalResults = data.total_results;

      if (currentPage !== totalPages) {
        this.pageLength = this.results && this.results.length;
      }
    });

    this._subscriptions.add(resultsSubscription);
  }

}
