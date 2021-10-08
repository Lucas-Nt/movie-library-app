import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DialogBaseComponent } from './dialog-base.component';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [
    DialogBaseComponent
  ],
  exports: [
    DialogBaseComponent
  ],
})
export class DialogBaseModule {}
