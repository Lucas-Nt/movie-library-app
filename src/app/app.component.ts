import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, zip } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { SearchService } from './components/search/search.service';
import { ScrollActionsService } from './core/services/scroll-actions.service';
import { areAllItemsNull } from './shared/generic-utilities';
import { isEqual } from 'lodash';
import { SpinnerService } from './core/services/spinner.service';
import { SpinnerState } from './core/components/spinner/spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {

  public areSearchOptionsVisible: boolean;
  public isSearchBarSticky: boolean;
  public isScrollUpButtonVisible: boolean;
  public isSmallScreen: boolean;
  public isLoading: boolean;

  private _subscriptions = new Subscription();

  constructor(private scrollDispatcher: ScrollDispatcher,
              private router: Router,
              private cdr: ChangeDetectorRef,
              private searchService: SearchService,
              private spinnerService: SpinnerService,
              private scrollActionsService: ScrollActionsService) {}

  ngOnInit(): void {
    this.isSmallScreen = window.innerWidth < 1300;

    const spinnerSubscription = this.spinnerService.spinnerState
      .subscribe((state: SpinnerState) => {
        this.isLoading = state.show;
      });

    const routingSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollActionsService.scrollToTop();
        this.searchService.evaluateDataClearing(event.url);
      }
    });

    const scrollingSubscription = this.scrollDispatcher.scrolled()
                                  .pipe(debounceTime(200))
                                  .subscribe((data: CdkScrollable) =>
                                    this.scrollActionsService.initiateScrollingFlagsCheck(data)
                                  );

    const scrollFlagsSubscription = zip(
      this.scrollActionsService.isSearchBarSticky,
      this.scrollActionsService.isScrollUpButtonVisible
    ).pipe(
      filter(values => !areAllItemsNull(values)),
      distinctUntilChanged(isEqual)
    ).subscribe((statuses: boolean[]) => {
      this.isSearchBarSticky = statuses[0];
      this.isScrollUpButtonVisible = statuses[1];
      this.cdr.detectChanges();
    });

    this._subscriptions.add(spinnerSubscription);
    this._subscriptions.add(routingSubscription);
    this._subscriptions.add(scrollingSubscription);
    this._subscriptions.add(scrollFlagsSubscription);
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  public toggleSearchMenuOptions(): void {
    this.areSearchOptionsVisible = !this.areSearchOptionsVisible;
  }

}
