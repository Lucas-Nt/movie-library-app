import { Component, Input } from '@angular/core';
import { ScrollingActionsService } from '../../services/scrolling-actions.service';

@Component({
  selector: 'app-scroll-up-button',
  templateUrl: './scroll-up-button.component.html',
  styleUrls: ['./scroll-up-button.component.scss']
})
export class ScrollUpButtonComponent {

  constructor(private scrollingActionsService: ScrollingActionsService) { }

  @Input() isVisible: boolean;

  scrollToTop() {
    this.scrollingActionsService.scrollToTop('smooth');
  }

}
