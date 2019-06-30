import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SearchService {

  public lastMovieSearchParam: string;
  public movieResults = new BehaviorSubject(null);

  public evaluateDataClearing(url: string): void {
    const isInMovieSection = url.includes('movie');

    if (!isInMovieSection) {
      this.lastMovieSearchParam = '';
      this.movieResults.next(null);
    }
  }

}
