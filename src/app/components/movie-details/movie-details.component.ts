import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { DialogBaseComponent } from 'src/app/shared/components/dialog-base/dialog-base.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public movie: any;
  public backgroundEndpoint = 'https://image.tmdb.org/t/p/w1280/';
  public posterEndpoint = 'https://image.tmdb.org/t/p/w300/';

  constructor(private route: ActivatedRoute,
              private dialog: MatDialog,
              private location: Location) { }

  ngOnInit() {
    this.route.data.pipe(first()).subscribe(data => {
      this.movie = data.movieDetails;
    });
  }

  public createBackgroundImage(backgroundImage: string): string {
    const gradientStyle = 'linear-gradient(to bottom, rgba(255, 255, 255, 0) -600%, #24091f 100%)';

    return backgroundImage === null ? `${gradientStyle}`
                                    : `${gradientStyle}, url(${this.backgroundEndpoint}${backgroundImage})`;
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
