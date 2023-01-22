import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'search',
    loadChildren: () => import('./components/search/search-movies.module').then((m) => m.SearchMoviesModule),
  },
  {
    path: 'details',
    loadChildren: () => import('./components/movie-details/movie-details.module').then((m) => m.MovieDetailsModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  // {
  //   path: '**',
  //   loadChildren: () => import('./components/not-found/not-found.module').then((m) => m.NotFoundModule),
  // },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
