import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { DialogBaseComponent } from './dialog-base.component';
import { PortalModule } from '@angular/cdk/portal';


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
