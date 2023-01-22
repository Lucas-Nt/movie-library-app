import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routing.module'
import { CoreModule } from './core/core.module'
import { SpinnerInterceptorService } from './core/interceptors/spinner.interceptor'
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule, AppRoutingModule, SharedModule, CoreModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
