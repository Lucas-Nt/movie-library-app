
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import * as movieDetails from './index';


@NgModule({
  declarations: [...movieDetails.COMPONENTS],
  imports: [CommonModule, SharedModule],
  providers: [...movieDetails.SERVICES],
  entryComponents: []
})
export class MovieDetailsModule {}
