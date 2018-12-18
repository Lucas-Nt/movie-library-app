import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SpinnerState } from '../components/spinner/spinner';

// TODO: revisit this implementation
@Injectable({
  providedIn: 'root'
})

export class SpinnerService {

  private spinnerSubject = new Subject<SpinnerState>();
  spinnerState = this.spinnerSubject.asObservable();

  constructor() { }

  show() {
    this.spinnerSubject.next(<SpinnerState>{ show: true });
  }

  hide() {
    this.spinnerSubject.next(<SpinnerState>{ show: false });
  }

}
