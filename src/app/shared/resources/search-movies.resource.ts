import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { MovieModel } from 'src/app/shared/models/movie-tv-show.model'
import { getQueryParams, MOVIE_DB_BASE_URL } from 'src/app/shared/utilities/resource-utilities'

@Injectable()
export class MovieResource {
  private baseUrl = MOVIE_DB_BASE_URL

  constructor(private http: HttpClient) {}

  public getMovies(name: string, page?: number): Observable<PagedResponse<MovieModel>> {
    const url = `${this.baseUrl}/search/movie`
    const params = { query: name, page }
    const queryParams = getQueryParams(params)

    return this.http.get(url, { params: queryParams }).pipe(map((response) => response as PagedResponse<MovieModel>))
  }

  public getMovieDetails(movieID: number): Observable<any> {
    const url = `${this.baseUrl}/movie/${movieID}`
    // eslint-disable-next-line camelcase
    const params = { append_to_response: 'videos' }
    const queryParams = getQueryParams(params)

    return this.http.get(url, { params: queryParams })
  }

  public getMovieCredits(movieID: number): Observable<any> {
    const url = `${this.baseUrl}/movie/${movieID}/credits`
    const queryParams = getQueryParams()

    return this.http.get(url, { params: queryParams })
  }
}
