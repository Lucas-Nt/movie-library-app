import { Location } from '@angular/common'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ActivatedRoute } from '@angular/router'
import { first } from 'rxjs/operators'
import { BackgroundImageService } from 'src/app/core/services/background-image.service'
import { SearchType } from 'src/app/shared/enums/search-type.enum'
import { MovieTvShowMapper } from 'src/app/shared/mappers/movie-tv-show.mapper'
import { POSTER_BASE_URL } from 'src/app/shared/utilities/resource-utilities'
import { MovieDetailsService } from './movie-details.service'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  public data: any
  public isMovie: boolean
  public posterEndpoint = POSTER_BASE_URL

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private location: Location,
    private movieTvShowMapper: MovieTvShowMapper,
    private movieDetailsService: MovieDetailsService,
    private backgroundImageService: BackgroundImageService
  ) {}

  public ngOnInit() {
    this.subscribeToRouteData()
  }

  public ngOnDestroy(): void {
    this.backgroundImageService.setBackground()
  }

  public goToPreviousPage(): void {
    this.location.back()
  }

  public openTrailerDialog(key: string): void {
    console.log(key)
    alert('should open dialog! implementation pending!')
    // this.dialog.open(DialogBaseComponent, {
    //   data: {
    //     component: TrailerModalComponent
    //   },
    //   width: '60%',
    //   height: '60%'
    // });
  }

  private subscribeToRouteData() {
    this.route.data.pipe(first()).subscribe((data) => {
      this.isMovie = data.searchType === SearchType.MOVIE
      this.data = this.isMovie
        ? this.movieTvShowMapper.toMovieDetailVM(data.movieDetails[0])
        : this.movieTvShowMapper.toTvShowDetailVM(data.movieDetails[0])

      this.data.credits = data.movieDetails[1]
      this.movieDetailsService.youTubeTrailerKey = this.data.youTubeVideoKey
      this.backgroundImageService.setBackground(this.data.backdropPath)
    })
  }
}
