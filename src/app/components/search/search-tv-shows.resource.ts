import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TvShowModel } from 'src/app/shared/models/movie-tv-show.model';
import { getQueryParams, MOVIE_DB_BASE_URL } from 'src/app/shared/utilities/resource-utilities';

@Injectable()
export class TvShowResource {

  private baseUrl = MOVIE_DB_BASE_URL;

  constructor(private http: HttpClient) {}

  public getTvShows(name: string, page?: number): Observable<PagedResponse<TvShowModel>> {
    const url = `${this.baseUrl}/search/tv`;
    const params = { query: name, page };
    const queryParams = getQueryParams(params);

    return this.http.get(url, { params: queryParams }).pipe(
      map(response => response as PagedResponse<TvShowModel>)
    );
  }

  public getTvShowDetails(movieID: number): Observable<any> {
    const url = `${this.baseUrl}/tv/${movieID}`;
    const params = { append_to_response: 'videos' };
    const queryParams = getQueryParams(params);

    return this.http.get(url, { params: queryParams });
  }

  public getTvShowCredits(movieID: number): Observable<any> {
    const url = `${this.baseUrl}/tv/${movieID}/credits`;
    const queryParams = getQueryParams();

    return this.http.get(url, { params: queryParams });
  }

}


