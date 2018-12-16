import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieResource {

  private apiKey = '13c46c78a5aa0ee1329947ed2ea96a82';

  constructor(private http: HttpClient) {}

  // https://api.themoviedb.org/3/search/movie?api_key=###&query=meg
  getMovies(name: string) {
    const url = 'https://api.themoviedb.org/3/search';
    return this.http.get(`${url}/movie?api_key=${this.apiKey}&query=${name}`);
  }
}


