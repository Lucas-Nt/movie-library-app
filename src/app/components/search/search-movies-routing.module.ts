import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SearchMoviesComponent } from './search-movies/search-movies.component'

const routes: Routes = [
  {
    path: '',
    component: SearchMoviesComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchMoviesRoutingModule {}
