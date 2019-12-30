import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MovieModel } from 'src/app/shared/models/movie-tv-show.model';
import { Observable } from 'rxjs';

@Injectable()
export class TvShowResource {

  private apiKey = '13c46c78a5aa0ee1329947ed2ea96a82';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getTvShows(name: string, page?: number): Observable<PagedResponse<MovieModel>> {
    const url = `${this.baseUrl}/search`;

    return this.http.get(`${url}/tv?api_key=${this.apiKey}&query=${name}&page=${page}`).pipe(
      map(response => response as PagedResponse<MovieModel>)
    );
  }

  getTvShowDetails(movieID: number): Observable<any> {
    const url = `${this.baseUrl}/tv`;

    return this.http.get(`${url}/${movieID}?api_key=${this.apiKey}&append_to_response=videos`);
  }

  getTvShowCredits(movieID: number): Observable<any> {
    const url = `${this.baseUrl}/tv/${movieID}/credits`;

    return this.http.get(`${url}?api_key=${this.apiKey}`);
  }

}


