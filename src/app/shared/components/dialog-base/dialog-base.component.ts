import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SafeResourceUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';

import { SafePipe } from '../../pipes/safe.pipe';

@Component({
  selector: 'app-dialog-base',
  templateUrl: './dialog-base.component.html',
  styleUrls: ['./dialog-base.component.scss'],
  providers: [ SafePipe ]
})
export class DialogBaseComponent implements OnInit {

  public trailerUrl: SafeResourceUrl;
  private youtubeMainURL = 'https://www.youtube.com/embed/';

  constructor(private safe: SafePipe,
              private dialogRef: MatDialogRef<DialogBaseComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

  public ngOnInit(): void {
    if (this.data && this.data.youtubeKey) {
      this.createTrailerUrl(this.data.youtubeKey);
    }
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  private createTrailerUrl(key: string): void {
    this.trailerUrl = this.safe.transform(this.youtubeMainURL + key + '?autoplay=1');
  }

}
