import { CdkScrollable } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ScrollActionsService {

  public isScrollUpButtonVisible = new BehaviorSubject<boolean>(null);
  public isSearchBarSticky = new BehaviorSubject<boolean>(null);

  public scrollToTop(scrollBehavior?: ScrollBehavior): void {
    const element = document.getElementsByClassName('mat-drawer-content')[0] || window;
    scrollBehavior = scrollBehavior || 'auto';
    element.scrollTo({ top: 0, behavior: scrollBehavior });
  }

  public initiateScrollingFlagsCheck(data: CdkScrollable): void {
    const topOffset = data.getElementRef().nativeElement.scrollTop || 0;
    const hasScrolledDown = topOffset > 100;

    this.isScrollUpButtonVisible.next(hasScrolledDown);
    this.evaluateStickySearchBar(hasScrolledDown);
  }

  private evaluateStickySearchBar(status: boolean) {
    const isInSearchPage = window.location.href.includes('search');

    if (!isInSearchPage) {
      this.isSearchBarSticky.next(false);
      return;
    }

    this.isSearchBarSticky.next(status);
  }

}
