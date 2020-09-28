import { Component, OnInit, Input } from '@angular/core';

import { YOUTUBE_BASE_URL } from '../../../shared/utilities/resource-utilities';
import { SafePipe } from '../../../shared/pipes/safe.pipe';
import { SafeResourceUrl } from '@angular/platform-browser';
import { MovieDetailsService } from '../movie-details.service';

@Component({
  selector: 'app-trailer-modal',
  templateUrl: './trailer-modal.component.html',
  styleUrls: ['./trailer-modal.component.scss'],
  providers: [ SafePipe ]
})
export class TrailerModalComponent implements OnInit {

  public trailerUrl: SafeResourceUrl;
  private youTubeBaseUrl = YOUTUBE_BASE_URL;

  constructor(private safe: SafePipe, private movieDetailsService: MovieDetailsService) { }

  ngOnInit() {
    this.setTrailerUrl();
  }

  private setTrailerUrl(): void {
    this.trailerUrl = this.safe.transform(
      this.youTubeBaseUrl +
      this.movieDetailsService.youTubeTrailerKey
      + '?autoplay=1'
    );
  }

}
