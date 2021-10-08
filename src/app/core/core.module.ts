import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MainContentWrapperComponent } from './components/main-content-wrapper/main-content-wrapper.component';
import { MenuComponent } from './components/menu/menu.component';
import { ScrollUpButtonComponent } from './components/scroll-up-button/scroll-up-button.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    MenuComponent,
    SpinnerComponent,
    ScrollUpButtonComponent,
    MainContentWrapperComponent
  ],
  imports: [
    RouterModule,
    SharedModule, // Remove shared from core
    CommonModule
  ],
  exports: [
    MenuComponent,
    SpinnerComponent,
    ScrollUpButtonComponent,
    MainContentWrapperComponent
  ]
})

export class CoreModule {}
