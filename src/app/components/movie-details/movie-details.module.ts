
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { TrailerModalComponent } from './trailer-modal/trailer-modal.component';
import * as movieDetails from './index';

@NgModule({
  declarations: [...movieDetails.COMPONENTS],
  imports: [ CommonModule, SharedModule ],
  providers: [...movieDetails.SERVICES],
  entryComponents: [TrailerModalComponent]
})
export class MovieDetailsModule {}
