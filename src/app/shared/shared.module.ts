import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material.module';


@NgModule({
  imports: [ AngularMaterialModule ],
  exports: [ AngularMaterialModule ]
})

export class SharedModule {}
