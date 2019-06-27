import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SearchMoviesService } from './components/search/search-movies.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy{

  areSearchOptionsVisible: boolean;
  isSearchSticky: boolean;

  private _scrollingSubscription: Subscription;

  constructor(private scrollDispatcher: ScrollDispatcher,
              private router: Router,
              private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {

    this.router.events.subscribe(event => {
      // Scroll to top if accessing a page, not via browser history stack
      if (event instanceof NavigationEnd) {
          const contentContainer = document.querySelector('.mat-drawer-content') || window;
          contentContainer.scrollTo(0, 0);
      }
    });

    this._scrollingSubscription = this.scrollDispatcher.scrolled()
                                  .pipe(debounceTime(200))
                                  .subscribe((data: CdkScrollable) => this.evaluateStickySearch(data));
  }

  ngOnDestroy(): void {
    this._scrollingSubscription.unsubscribe();
  }

  toggleSearchMenuOptions(): void {
    this.areSearchOptionsVisible = !this.areSearchOptionsVisible;
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
