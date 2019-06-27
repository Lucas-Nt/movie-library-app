import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { MovieResource } from '../search/search-movies.resource';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MovieDetailsResolver implements Resolve<any> {

  constructor(private movieResource: MovieResource) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const movieID = route.params.id;
    return this.movieResource.getMovieDetails(movieID);
  }

}
