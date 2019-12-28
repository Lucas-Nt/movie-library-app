import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, zip } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { SearchService } from './components/search/search.service';
import { ScrollingActionsService } from './core/services/scrolling-actions.service';
import { areAllItemsNull } from './shared/generic-utilities';
import _isEqual from 'lodash/isEqual';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {

  public areSearchOptionsVisible: boolean;
  public isSearchBarSticky: boolean;
  public isScrollUpButtonVisible: boolean;

  private _subscriptions = new Subscription();

  constructor(private scrollDispatcher: ScrollDispatcher,
              private router: Router,
              private cdr: ChangeDetectorRef,
              private searchService: SearchService,
              private scrollingActionsService: ScrollingActionsService) {}

  ngOnInit(): void {

    const routingSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollingActionsService.scrollToTop();
        this.searchService.evaluateDataClearing(event.url);
      }
    });

    const scrollingSubscription = this.scrollDispatcher.scrolled()
                                  .pipe(debounceTime(200))
                                  .subscribe((data: CdkScrollable) =>
                                    this.scrollingActionsService.initiateScrollingFlagsCheck(data)
                                  );

    const scrollingFlagsSubscription = zip(
      this.scrollingActionsService.isSearchBarSticky,
      this.scrollingActionsService.isScrollUpButtonVisible
    ).pipe(
      filter(values => !areAllItemsNull(values)),
      distinctUntilChanged(_isEqual)
    ).subscribe((statuses: boolean[]) => {
      this.isSearchBarSticky = statuses[0];
      this.isScrollUpButtonVisible = statuses[1];
      this.cdr.detectChanges();
    });

    this._subscriptions.add(scrollingFlagsSubscription);
    this._subscriptions.add(routingSubscription);
    this._subscriptions.add(scrollingSubscription);
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  public toggleSearchMenuOptions(): void {
    this.areSearchOptionsVisible = !this.areSearchOptionsVisible;
  }

}
