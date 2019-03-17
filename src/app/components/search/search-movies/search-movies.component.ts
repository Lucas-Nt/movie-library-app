import { Component } from '@angular/core';
import { MovieResource } from '../search-movies.resource';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent {

  constructor(private movieResource: MovieResource) {}

  storedParameter: string;
  currentIndex: number;
  pageLength: number;
  totalResults: number;
  results: [];

  get hasResults() {
    return this.results &&
           this.results.length > 0;
  }

  executeSearch(param: string, pageEventObject?: PageEvent): void {

    this.storedParameter = param;
    const pageToRequest = this.pageToRequest(pageEventObject);

    if (!param) {
      this.results = [];
      return;
    }

    this.movieResource.getMovies(param, pageToRequest).subscribe((data: any) => {
      const currentPage = data.page;
      const totalPages = data.total_pages;

      this.currentIndex = currentPage - 1;
      this.results = data.results;
      this.totalResults = data.total_results;

      if (currentPage !== totalPages) {
        this.pageLength = this.results && this.results.length;
      }
    });
  }

  private pageToRequest(pageEventObject: PageEvent): number {

    let preparedPageNumber;
    const currentIndex = pageEventObject && pageEventObject.pageIndex;

    if (!currentIndex || currentIndex === 0) {
      preparedPageNumber = 1;
    } else {
      preparedPageNumber = currentIndex + 1;
    }

    return preparedPageNumber;
  }

}
