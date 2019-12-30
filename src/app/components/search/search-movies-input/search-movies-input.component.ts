import { Component, OnInit, EventEmitter, Output, OnDestroy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { SearchService } from '../search.service';

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
  public isMovieChecked = true;
  public isTvShowChecked = false;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.form.patchValue({ searchType: 'Movie' });
    this.watchFormValueChanges();

    const hasTitle = this.searchService.lastMovieSearchParams &&
                     this.searchService.lastMovieSearchParams.title;

    if (hasTitle) {
      this.form.patchValue(
        {
          title: this.searchService.lastMovieSearchParams.title,
          searchType: this.searchService.lastMovieSearchParams.searchType
         },
        { emitEvent: false }
      );

      this.isMovieChecked = this.searchService.lastMovieSearchParams.searchType === 'Movie';
      this.isTvShowChecked = !this.isMovieChecked;
      this.inputHasValue = true;
    }
  }

  ngOnDestroy(): void {
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

}
