import { NgModule } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ MenuComponent ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [ MenuComponent ]
})

export class CoreModule {}
