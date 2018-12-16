import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMoviesFilterComponent } from './search-movies-filter.component';

describe('SearchMoviesFilterComponent', () => {
  let component: SearchMoviesFilterComponent;
  let fixture: ComponentFixture<SearchMoviesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMoviesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMoviesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
