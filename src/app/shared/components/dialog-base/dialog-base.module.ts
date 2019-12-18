import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { DialogBaseComponent } from './dialog-base.component';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    DialogBaseComponent
  ],
  exports: [
    DialogBaseComponent
  ],
})
export class DialogBaseModule {}
