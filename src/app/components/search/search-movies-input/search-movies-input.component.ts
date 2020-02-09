import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { SearchService } from '../search.service';

export enum SearchType {
  MOVIE = 'Movie',
  TV_SHOW = 'TV Show'
}

@Component({
  selector: 'app-search-movies-input',
  templateUrl: './search-movies-input.component.html',
  styleUrls: ['./search-movies-input.component.scss']
})
export class SearchMoviesInputComponent implements OnInit, OnDestroy {

  @Input() form: FormGroup;
  @Output() onSearchKeyUp = new EventEmitter();
  @Output() onClearInput = new EventEmitter();

  public searchFormSubscription: Subscription;
  public inputHasValue: boolean;
  public isMovieTypeSelected = true;
  public isTvShowTypeSelected = false;

  constructor(private searchService: SearchService) { }

  public ngOnInit(): void {
    this.prepareSearchForm();
    this.watchFormValueChanges();
  }

  public ngOnDestroy(): void {
    this.searchFormSubscription.unsubscribe();
  }

  public clearInput(): void {
    this.onClearInput.emit();
  }

  private watchFormValueChanges(): void {
    this.searchFormSubscription = this.form.valueChanges.pipe(
      debounceTime(600)
    ).subscribe(value => {
      const userInput = value.title && value.title.trim();
      this.inputHasValue = Boolean(userInput);
      this.onSearchKeyUp.emit({ title: userInput, searchType: value.searchType });
    });
  }

  private prepareSearchForm(): void {
    const hasTitle = this.searchService.lastMovieSearchParams &&
                     this.searchService.lastMovieSearchParams.title;

    if (hasTitle) {
      this.updateSearchForm(
        this.searchService.lastMovieSearchParams.title,
        this.searchService.lastMovieSearchParams.searchType
      );

      this.isMovieTypeSelected = this.searchService.lastMovieSearchParams.searchType === SearchType.MOVIE;
      this.isTvShowTypeSelected = !this.isMovieTypeSelected;
      this.inputHasValue = true;
    } else {
      this.updateSearchForm(null, SearchType.MOVIE);
    }
  }

  private updateSearchForm(titleValue: string, searchTypeValue: SearchType): void {
    this.form.patchValue({ title: titleValue, searchType: searchTypeValue });
  }

}
