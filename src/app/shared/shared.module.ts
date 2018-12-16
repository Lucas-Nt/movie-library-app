import { NgModule } from '@angular/core';
import { SemanticUIModule } from './semantic-ui.module';


@NgModule({
  imports: [ SemanticUIModule ],
  exports: [ SemanticUIModule ]
})

export class SharedModule {}
