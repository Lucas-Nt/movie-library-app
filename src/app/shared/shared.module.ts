import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material.module';

import { DialogBaseComponent } from './components/dialog-base/dialog-base.component';

import * as shared from '.';

@NgModule({
  declarations: [
    ...shared.PIPES
  ],
  imports: [
    AngularMaterialModule,
    ...shared.COMPONENTS
  ],
  exports: [
    AngularMaterialModule,
    ...shared.PIPES,
    ...shared.COMPONENTS
  ],
  providers: [
    ...shared.MAPPERS
  ],
  entryComponents: [
    DialogBaseComponent
  ]
})

export class SharedModule {}
