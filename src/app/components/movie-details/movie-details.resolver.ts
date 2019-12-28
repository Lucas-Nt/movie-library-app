import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { MovieResource } from '../search/search-movies.resource';

import { Observable, forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MovieDetailsResolver implements Resolve<any> {

  constructor(private movieResource: MovieResource) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const movieID = route.params.id;
    return forkJoin([
      this.movieResource.getMovieDetails(movieID),
      this.movieResource.getMovieCredits(movieID).pipe(
        catchError((error: HttpErrorResponse) => {
        console.log(error);
        return of(null);
      }))
    ]);
  }

}
