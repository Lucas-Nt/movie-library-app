import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { MovieResource } from '../search-movies.resource';
import { Subscription } from 'rxjs';
import { MovieMapper } from 'src/app/shared/mappers/movie.mapper';
import { MovieViewModel } from 'src/app/shared/models/movie.model';
import { SearchMoviesService } from '../search-movies.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent implements OnInit, OnDestroy {

  constructor(private movieResource: MovieResource,
              private movieMapper: MovieMapper,
              private searchMoviesService: SearchMoviesService) {}

  storedParameter: string;
  currentIndex: number;
  pageLength: number;
  totalResults: number;
  isSearchSticky: boolean;
  results: MovieViewModel[];

  private _movieSearchSubscription = new Subscription();

  get hasResults() {
    return this.results &&
           this.results.length > 0;
  }

  ngOnInit(): void {
    // TODO: unsubscribe
    this.searchMoviesService.isSearchFilterSticky.subscribe(isSticky => {
      this.isSearchSticky = isSticky;
    });
  }

  ngOnDestroy(): void {
    this._movieSearchSubscription.unsubscribe();
  }

  executeSearch(param: string, pageEventObject?: PageEvent): void {
    this.storedParameter = param;
    const pageToRequest = this.pageToRequest(pageEventObject);

    if (!param) {
      this.results = [];
      return;
    }

    this._movieSearchSubscription = this.movieResource.getMovies(param, pageToRequest).subscribe(
      (data: any) => {
        const currentPage = data.page;
        const totalPages = data.total_pages;

        this.currentIndex = currentPage - 1;
        this.results = data.results.map(item => this.movieMapper.toViewModel(item));
        this.totalResults = data.total_results;

        if (currentPage !== totalPages) {
          this.pageLength = this.results && this.results.length;
        }
    });
  }

  private pageToRequest(pageEventObject: PageEvent): number {
    const currentIndex = pageEventObject && pageEventObject.pageIndex;
    const hasNoCurrentIndex = !currentIndex || currentIndex === 0;

    return hasNoCurrentIndex ? 1 : currentIndex + 1;
  }

}
