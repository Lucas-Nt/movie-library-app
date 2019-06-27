import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieResource } from '../search/search-movies.resource';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: any;
  bgEndpoint = 'https://image.tmdb.org/t/p/w1280/';

  constructor(private route: ActivatedRoute,
              private movieResource: MovieResource) { }

  ngOnInit() {
    const movieID = this.route.snapshot.params['id'];
    this.movieResource.getMovieDetails(movieID).subscribe(response => {
      this.movie = response;
    });
  }

  createBackgroundUrl(backgroundImage: string) {
    return `url(${this.bgEndpoint}${backgroundImage})`;
  }

}
