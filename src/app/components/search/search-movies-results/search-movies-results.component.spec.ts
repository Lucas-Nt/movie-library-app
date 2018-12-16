import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMoviesResultsComponent } from './search-movies-results.component';

describe('SearchMovieResultsComponent', () => {
  let component: SearchMoviesResultsComponent;
  let fixture: ComponentFixture<SearchMoviesResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMoviesResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMoviesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
