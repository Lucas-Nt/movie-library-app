import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SearchMoviesComponent } from './search-movies/search-movies.component'

const routes: Routes = [
  {
    path: '',
    component: SearchMoviesComponent,
  },
  {
    path: 'details',
    loadChildren: () => import('./../movie-details/movie-details.module').then((m) => m.MovieDetailsModule),
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class SearchMoviesRoutingModule {}
