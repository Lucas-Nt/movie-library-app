import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'

import { MovieResource } from '../../shared/resources/search-movies.resource'
import { TvShowResource } from '../search/search-tv-shows.resource'

import { HttpErrorResponse } from '@angular/common/http'
import { forkJoin, Observable, of } from 'rxjs'
import { catchError } from 'rxjs/operators'

import { SearchType } from 'src/app/shared/enums/search-type.enum'

@Injectable()
export class MovieDetailsResolver implements Resolve<any> {
  private searchTypeEnum = SearchType

  constructor(private movieResource: MovieResource, private tvShowResource: TvShowResource) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.params.id
    const searchTypeParam = route.data.searchType

    return searchTypeParam === this.searchTypeEnum.MOVIE ? this.resolveMovieDetails(id) : this.resolveTvShowDetails(id)
  }

  private resolveMovieDetails(id: number): Observable<any> {
    return forkJoin([
      this.movieResource.getMovieDetails(id),
      this.movieResource.getMovieCredits(id).pipe(
        catchError((error: HttpErrorResponse) => {
          console.log(error)

          return of(null)
        })
      ),
    ])
  }

  private resolveTvShowDetails(id: number): Observable<any> {
    return forkJoin([
      this.tvShowResource.getTvShowDetails(id),
      this.tvShowResource.getTvShowCredits(id).pipe(
        catchError((error: HttpErrorResponse) => {
          console.log(error)

          return of(null)
        })
      ),
    ])
  }
}
