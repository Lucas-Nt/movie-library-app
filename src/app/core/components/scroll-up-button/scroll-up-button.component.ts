import { Component, Input } from '@angular/core';
import { ScrollActionsService } from '../../services/scroll-actions.service';

@Component({
  selector: 'app-scroll-up-button',
  templateUrl: './scroll-up-button.component.html',
  styleUrls: ['./scroll-up-button.component.scss']
})
export class ScrollUpButtonComponent {

  constructor(private scrollActionsService: ScrollActionsService) { }

  @Input() isVisible: boolean;

  scrollToTop() {
    this.scrollActionsService.scrollToTop('smooth');
  }

}
