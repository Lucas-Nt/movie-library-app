import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MovieModel } from 'src/app/shared/models/movie.model';
import { Observable } from 'rxjs';

@Injectable()
export class MovieResource {

  private apiKey = '13c46c78a5aa0ee1329947ed2ea96a82';

  constructor(private http: HttpClient) {}

  getMovies(name: string, page?: number): Observable<PagedResponse<MovieModel>> {
    const url = 'https://api.themoviedb.org/3/search';

    return this.http.get(`${url}/movie?api_key=${this.apiKey}&query=${name}&page=${page}`).pipe(
      map(response => response as PagedResponse<MovieModel>)
    );
  }

  getMovieDetails(movieID: number) {
    const url = 'https://api.themoviedb.org/3/movie';

    return this.http.get(`${url}/${movieID}?api_key=${this.apiKey}`);
  }

}


