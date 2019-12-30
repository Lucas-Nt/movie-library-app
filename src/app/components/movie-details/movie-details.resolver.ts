import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { MovieResource } from '../search/search-movies.resource';
import { TvShowResource } from '../search/search-tv-shows.resource';

import { Observable, forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MovieDetailsResolver implements Resolve<any> {

  constructor(private movieResource: MovieResource,
              private tvShowResource: TvShowResource) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {

    const id = route.params.id;
    const searchTypeParam = route.data['searchType'];

    return searchTypeParam === 'Movie' ? this.resolveMovieDetails(id)
                                       : this.resolveTvShowDetails(id);
  }

  private resolveMovieDetails(id: number): Observable<any> {
    return forkJoin([
      this.movieResource.getMovieDetails(id),
      this.movieResource.getMovieCredits(id).pipe(
        catchError((error: HttpErrorResponse) => {
        console.log(error);
        return of(null);
      }))
    ]);
  }

  private resolveTvShowDetails(id: number): Observable<any> {
    return forkJoin([
      this.tvShowResource.getTvShowDetails(id),
      this.tvShowResource.getTvShowCredits(id).pipe(
        catchError((error: HttpErrorResponse) => {
        console.log(error);
        return of(null);
      }))
    ]);
  }

}
