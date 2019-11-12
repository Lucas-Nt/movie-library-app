import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-up-button',
  templateUrl: './scroll-up-button.component.html',
  styleUrls: ['./scroll-up-button.component.scss']
})
export class ScrollUpButtonComponent {

  constructor() { }

  @Input() isVisible: boolean;

  scrollToTop() {
    const element = document.getElementsByClassName('mat-drawer-content')[0];
    element.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
