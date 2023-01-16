import { HttpParams } from '@angular/common/http'
import { Params } from '@angular/router'

const API_KEY = '13c46c78a5aa0ee1329947ed2ea96a82'
export const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3'
export const YOUTUBE_BASE_URL = 'https://www.youtube.com/embed/'
export const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w300/'

export function getQueryParams(params?: Params): HttpParams {
  let httpParams = new HttpParams()

  params = { ...params, api_key: API_KEY }

  Object.keys(params).forEach((key: string) => {
    httpParams = httpParams.set(key, params[key])
  })

  return httpParams
}
