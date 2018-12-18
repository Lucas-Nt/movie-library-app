import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';
import { tap } from 'rxjs/operators';


// TODO: revisit this implementation
@Injectable({
  providedIn: 'root'
})

export class SpinnerInterceptorService implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.showSpinner();

    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.onEnd();
      }
    },
      (err: any) => {
        this.onEnd();
    }));
  }

  private onEnd(): void {
    this.hideSpinner();
  }

  private showSpinner(): void {
    this.spinnerService.show();
  }

  private hideSpinner(): void {
    this.spinnerService.hide();
  }

}
