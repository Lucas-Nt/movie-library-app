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
                                  .subscribe((data: CdkScrollable) => this.evaluateStickySearch(data));

    this._subscriptions.add(routingSubscription);
    this._subscriptions.add(scrollingSubscription);
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  toggleSearchMenuOptions(): void {
    this.areSearchOptionsVisible = !this.areSearchOptionsVisible;
  }

  scrollToTop() {
    const element = document.getElementsByClassName('mat-drawer-content')[0];
    element.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private evaluateStickySearch(data: CdkScrollable) {
    const isInSearchPage = window.location.href.includes('search');

    if (!isInSearchPage) {
      this.isSearchSticky = false;
      this.cdr.detectChanges();
      return;
    }

    const topOffset = data.getElementRef().nativeElement.scrollTop || 0;
    this.isSearchSticky = topOffset > 100 ? true : false;
    this.cdr.detectChanges();
  }

}
