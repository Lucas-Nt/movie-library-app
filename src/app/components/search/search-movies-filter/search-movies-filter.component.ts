import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-movies-filter',
  templateUrl: './search-movies-filter.component.html',
  styleUrls: ['./search-movies-filter.component.scss']
})
export class SearchMoviesFilterComponent implements OnInit, OnDestroy {

  @Output() onSearchKeyUp = new EventEmitter();

  searchFormSubscription: Subscription;
  searchForm: FormGroup;
  inputHasValue: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildSearchForm();
    this.watchFormValueChanges();
  }

  ngOnDestroy(): void {
    this.searchFormSubscription.unsubscribe();
  }

  resetForm(): void {
    this.searchForm.reset();
  }

  private buildSearchForm(): void {
    this.searchForm = this.fb.group({
      movieName: ['']
    });
  }

  private watchFormValueChanges(): void {
    this.searchFormSubscription = this.searchForm.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(c => {
      this.inputHasValue = c.movieName;
      this.onSearchKeyUp.emit(c.movieName);
    });
  }

}
