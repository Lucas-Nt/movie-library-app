import { Component, OnInit, EventEmitter, Output, OnDestroy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-movies-filter',
  templateUrl: './search-movies-filter.component.html',
  styleUrls: ['./search-movies-filter.component.scss']
})
export class SearchMoviesFilterComponent implements OnInit, OnDestroy {

  @Input() form: FormGroup;
  @Output() onSearchKeyUp = new EventEmitter();
  @Output() onClearInput = new EventEmitter();

  public searchFormSubscription: Subscription;
  public inputHasValue: boolean;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.watchFormValueChanges();

    if (this.searchService.lastMovieSearchParam) {
      this.form.patchValue(
        { movieName: this.searchService.lastMovieSearchParam },
        { emitEvent: false }
      );
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
      this.inputHasValue = Boolean(value.movieName);
      this.onSearchKeyUp.emit(value.movieName);
    });
  }

}
