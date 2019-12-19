import { NgModule } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { ScrollUpButtonComponent } from './components/scroll-up-button/scroll-up-button.component';
import { MainContentWrapperComponent } from './components/main-content-wrapper/main-content-wrapper.component';

@NgModule({
  declarations: [
    MenuComponent,
    SpinnerComponent,
    ScrollUpButtonComponent,
    MainContentWrapperComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
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
