import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { SearchService } from './components/search/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {

  areSearchOptionsVisible: boolean;
  isSearchSticky: boolean;
  isScrollUpButtonVisible: boolean;

  private _subscriptions = new Subscription();

  constructor(private scrollDispatcher: ScrollDispatcher,
              private router: Router,
              private searchService: SearchService,
              private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {

    const routingSubscription = this.router.events.subscribe(event => {
      // Scroll to top if accessing a page, not via browser history stack
      if (event instanceof NavigationEnd) {
        const contentContainer = document.querySelector('.mat-drawer-content') || window;
        contentContainer.scrollTo(0, 0);
        this.searchService.evaluateDataClearing(event.url);
      }

    });

    const scrollingSubscription = this.scrollDispatcher.scrolled()
                                  .pipe(debounceTime(200))
                                  .subscribe((data: CdkScrollable) => this.initiateScrollingActions(data));

    this._subscriptions.add(routingSubscription);
    this._subscriptions.add(scrollingSubscription);
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  toggleSearchMenuOptions(): void {
    this.areSearchOptionsVisible = !this.areSearchOptionsVisible;
  }

  private initiateScrollingActions(data: CdkScrollable): void {
    const topOffset = data.getElementRef().nativeElement.scrollTop || 0;
    const hasScrolledDown = topOffset > 100 ? true : false;

    if (hasScrolledDown) {
      this.showStickySearchBar(true);
      this.showScrollUpButton(true);
    } else {
      this.showScrollUpButton(false);
      this.showStickySearchBar(false);
    }

  }

  private showScrollUpButton(status: boolean): void {
    this.isScrollUpButtonVisible = status;
    this.cdr.detectChanges();
  }

  private showStickySearchBar(status: boolean) {
    const isInSearchPage = window.location.href.includes('search');

    if (!isInSearchPage) {
      this.isSearchSticky = false;
      this.cdr.detectChanges();
      return;
    }

    this.isSearchSticky = status;
    this.cdr.detectChanges();
  }

}
