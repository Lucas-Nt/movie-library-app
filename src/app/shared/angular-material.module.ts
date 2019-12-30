import { NgModule } from '@angular/core';

import {
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatPaginatorModule,
  MatChipsModule,
  MatDialogModule,
  MatRadioModule
} from '@angular/material';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatPaginatorModule,
    MatChipsModule,
    MatDialogModule,
    MatRadioModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatPaginatorModule,
    MatChipsModule,
    MatDialogModule,
    MatRadioModule
  ]
})

export class AngularMaterialModule {}
