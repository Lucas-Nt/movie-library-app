import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared/shared.module'
import * as movieDetails from './index'
import { MovieDetailsRoutingModule } from './movie-details-routing.module'

@NgModule({
  declarations: [...movieDetails.COMPONENTS],
  imports: [CommonModule, SharedModule, MovieDetailsRoutingModule],
  exports: [MovieDetailsRoutingModule],
  providers: [...movieDetails.SERVICES],
})
export class MovieDetailsModule {}
