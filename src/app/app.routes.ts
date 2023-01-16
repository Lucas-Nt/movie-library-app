// import { Routes } from '@angular/router'

// import { MovieDetailsComponent } from './components/movie-details/movie-details.component'
// import { MovieDetailsResolver } from './components/movie-details/movie-details.resolver'
// import { SearchMoviesComponent } from './components/search/search-movies/search-movies.component'
// import { SearchType } from './shared/enums/search-type.enum'

// export const APP_ROUTES: Routes = [
//   {
//     path: 'search-movies',
//     component: SearchMoviesComponent,
//   },
//   {
//     path: 'movie-details/:id',
//     component: MovieDetailsComponent,
//     data: { searchType: SearchType.MOVIE }, // TODO: check if data should be passed from navigate action
//     resolve: {
//       movieDetails: MovieDetailsResolver,
//     },
//   },
//   {
//     path: 'tv-show-details/:id',
//     component: MovieDetailsComponent,
//     data: { searchType: SearchType.TV_SHOW },
//     resolve: {
//       movieDetails: MovieDetailsResolver,
//     },
//   },
// ]
