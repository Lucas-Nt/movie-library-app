import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BackgroundImageService } from '../../services/background-image.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-content-wrapper',
  templateUrl: './main-content-wrapper.component.html',
  styleUrls: ['./main-content-wrapper.component.scss']
})
export class MainContentWrapperComponent implements OnInit, OnDestroy {

  @Input() cssClass: string; // TODO: is this really needed?

  public get backgroundImage(): string {
    return this._backgroundImage;
  }

  private _backgroundImage: string;
  private _backgroundImageSubscription = new Subscription();
  private _currentBackgroundImage$ = this.backgroundImageService.currentBackgroundImage;

  constructor(private backgroundImageService: BackgroundImageService) { }

  ngOnInit(): void {
    this.backgroundImageService.setBackground();

    this._backgroundImageSubscription = this._currentBackgroundImage$.subscribe(newImage => {
      this._backgroundImage = newImage;
    });
  }

  ngOnDestroy(): void {
    this._backgroundImageSubscription.unsubscribe();
  }
}
