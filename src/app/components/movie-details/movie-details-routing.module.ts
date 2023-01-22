import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SearchType } from 'src/app/shared/enums/search-type.enum'
import { MovieDetailsComponent } from './movie-details.component'
import { MovieDetailsResolver } from './movie-details.resolver'

const routes: Routes = [
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
    data: { searchType: SearchType.MOVIE },
    resolve: {
      movieDetails: MovieDetailsResolver,
    },
  },
  {
    path: 'tv-show/:id',
    component: MovieDetailsComponent,
    data: { searchType: SearchType.TV_SHOW },
    resolve: {
      movieDetails: MovieDetailsResolver,
    },
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [MovieDetailsResolver],
})
export class MovieDetailsRoutingModule {}
