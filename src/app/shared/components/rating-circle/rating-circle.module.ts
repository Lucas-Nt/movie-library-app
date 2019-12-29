import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RatingCircleComponent } from './rating-circle.component';


@NgModule({
  imports: [ CommonModule ],
  declarations: [
    RatingCircleComponent
  ],
  exports: [
    RatingCircleComponent
  ],
})
export class RatingCircleModule {}
