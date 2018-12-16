import { NgModule } from '@angular/core';

import {
  SuiSidebarModule,
  SuiSearchModule,
  SuiRatingModule
} from 'ng2-semantic-ui';

@NgModule({
  imports: [
    SuiSidebarModule,
    SuiSearchModule,
    SuiRatingModule
  ],
  exports: [
    SuiSidebarModule,
    SuiSearchModule,
    SuiRatingModule
  ]
})

export class SemanticUIModule {}
