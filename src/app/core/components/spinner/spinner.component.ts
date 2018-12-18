import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from '../../services/spinner.service';
import { SpinnerState } from './spinner';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  isSpinnerVisible: boolean;

  private spinnerSubscription: Subscription;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerSubscription = this.spinnerService.spinnerState
    .subscribe((state: SpinnerState) => {
      this.isSpinnerVisible = state.show;
    });
  }

  ngOnDestroy(): void {
    this.spinnerSubscription.unsubscribe();
  }

}
