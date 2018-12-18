import { NgModule } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MenuComponent,
    SpinnerComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    CommonModule
  ],
  exports: [
    MenuComponent,
    SpinnerComponent ]
})

export class CoreModule {}
