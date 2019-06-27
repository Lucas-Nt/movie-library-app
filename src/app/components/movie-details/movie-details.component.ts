import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieResource } from '../search/search-movies.resource';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: any;
  bgEndpoint = 'https://image.tmdb.org/t/p/w1280/';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.pipe(first()).subscribe(data => {
      this.movie = data.movieDetails;
    });
  }

  createBackgroundUrl(backgroundImage: string) {
    return `url(${this.bgEndpoint}${backgroundImage})`;
  }

}
