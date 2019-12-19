import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import _random from 'lodash/random';


@Injectable({
  providedIn: 'root'
})

export class BackgroundImageService {

  public currentBackgroundImage = new BehaviorSubject<string | null>(null);

  private _defaultBackgroundImages = [
    '../../../assets/images/alien.jpg',
    '../../../assets/images/breakingBad.jpg',
    '../../../assets/images/theMartian.jpg',
    '../../../assets/images/ironMan.jpg'
  ];

  private _backgroundEndpoint = 'https://image.tmdb.org/t/p/w1280/';
  private _gradientStyle = 'linear-gradient(to bottom, rgba(255, 255, 255, 0) -600%, #24091f 100%)';

  public setBackground(image = null): void {

    const newImage = !image ? this.setDefaultBackground()
                            : this.createBackgroundStyle(this._backgroundEndpoint + image);

    this.currentBackgroundImage.next(newImage);
  }

  private setDefaultBackground(): string {
    const totalImagesNumber = this._defaultBackgroundImages.length - 1;
    const randomImageNumber = _random(0, totalImagesNumber);
    const randomImagePath = this._defaultBackgroundImages[randomImageNumber];

    return this.createBackgroundStyle(randomImagePath);
  }

  private createBackgroundStyle(imagePath: string): string {
    return `${this._gradientStyle}, url(${imagePath})`;
  }
}
