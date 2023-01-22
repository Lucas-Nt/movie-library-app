import { MovieResource } from 'src/app/shared/resources/search-movies.resource'
import { TvShowResource } from '../search/search-tv-shows.resource'
import { MovieDetailsComponent } from './movie-details.component'
import { MovieDetailsService } from './movie-details.service'

export const COMPONENTS = [MovieDetailsComponent]

export const SERVICES = [MovieDetailsService, MovieResource, TvShowResource]
