import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import * as search from './index';

@NgModule({
  declarations: [
    ...search.COMPONENTS
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    ...search.RESOURCES,
    ...search.SERVICES
  ]
})

export class SearchMoviesModule {}
