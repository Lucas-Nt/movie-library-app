import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogBaseComponent } from './dialog-base.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DialogBaseComponent
  ],
  exports: [
    DialogBaseComponent
  ],
})
export class DialogBaseModule {}
