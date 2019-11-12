import { Component, Inject, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SafePipe } from '../../pipes/safe.pipe';

@Component({
  selector: 'app-dialog-base',
  templateUrl: './dialog-base.component.html',
  providers: [ SafePipe ]
})
export class DialogBaseComponent implements OnInit {

  public trailerUrl: SafeResourceUrl;
  private youtubeMainURL = 'https://www.youtube.com/embed/';

  constructor(private safe: SafePipe,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    if (this.data && this.data.youtubeKey) {
      this.createTrailerUrl(this.data.youtubeKey);
    }
  }

  private createTrailerUrl(key: string): void {
    this.trailerUrl = this.safe.transform(this.youtubeMainURL + key + '?autoplay=1');
  }

}
