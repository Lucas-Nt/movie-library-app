import { NgModule } from '@angular/core';

import { AngularMaterialModule } from './angular-material.module';
import { YearOnlyPipe } from './pipes/year-only.pipe';
import * as shared from '.';


@NgModule({
  declarations: [
    ...shared.PIPES
  ],
  imports: [
    AngularMaterialModule
  ],
  exports: [
    AngularMaterialModule,
    ...shared.PIPES
  ],
  providers: [
    ...shared.MAPPERS
  ]
})

export class SharedModule {}
