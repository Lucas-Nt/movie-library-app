import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import * as search from './index';
import { SemanticUIModule } from 'src/app/shared/semantic-ui.module';

@NgModule({
  declarations: [
    ...search.COMPONENTS
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SemanticUIModule
  ],
  providers: [
    ...search.RESOURCES
  ]
})

export class SearchMoviesModule {}
