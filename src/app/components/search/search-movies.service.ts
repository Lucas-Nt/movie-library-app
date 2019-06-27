import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchMoviesService {
  isSearchFilterSticky = new BehaviorSubject(false);
}
