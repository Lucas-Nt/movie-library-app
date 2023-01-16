import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared/shared.module'

import * as search from './index'
import { SearchMoviesRoutingModule } from './search-movies-routing.module'

@NgModule({
  declarations: [...search.COMPONENTS],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, SearchMoviesRoutingModule],
  providers: [...search.RESOURCES, ...search.SERVICES],
})
export class SearchMoviesModule {}
