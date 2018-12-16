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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildSearchForm();
    this.watchFormValueChanges();
  }

  ngOnDestroy(): void {
    this.searchFormSubscription.unsubscribe();
  }

  private buildSearchForm(): void {
    this.searchForm = this.fb.group({
      movieName: ['']
    });
  }

  private watchFormValueChanges(): void {
    this.searchFormSubscription = this.searchForm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(c => {
      this.onSearchKeyUp.emit(c.movieName);
    });
  }

}
