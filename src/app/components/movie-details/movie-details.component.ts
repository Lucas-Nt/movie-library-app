import { Location } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { DialogBaseComponent } from 'src/app/shared/components/dialog-base/dialog-base.component';
import { BackgroundImageService } from 'src/app/core/services/background-image.service';
import { MovieTvShowMapper } from 'src/app/shared/mappers/movie-tv-show.mapper';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  public data: any;
  public isMovie: boolean;
  public posterEndpoint = 'https://image.tmdb.org/t/p/w300/';

  constructor(private route: ActivatedRoute,
              private dialog: MatDialog,
              private location: Location,
              private movieTvShowMapper: MovieTvShowMapper,
              private backgroundImageService: BackgroundImageService) { }

  ngOnInit() {
    this.route.data.pipe(first()).subscribe(data => {
      this.isMovie = data.searchType === 'Movie';

      // TODO: rename 'movie'
      this.data = this.isMovie ? this.movieTvShowMapper.toMovieDetailViewModel(data.movieDetails[0])
                               : this.movieTvShowMapper.toTvShowDetailViewModel(data.movieDetails[0]);

      this.data.credits = data.movieDetails[1];
      this.backgroundImageService.setBackground(this.data.backdropPath);
    });
  }

  ngOnDestroy(): void {
    this.backgroundImageService.setBackground();
  }

  public goToPreviousPage(): void {
    this.location.back();
  }

  public openTrailerDialog(stringParam: string): void {
    this.dialog.open(DialogBaseComponent, {
      data: { dialogType: 'video', youtubeKey: stringParam },
      width: '60%',
      height: '60%'
    });
  }

}
