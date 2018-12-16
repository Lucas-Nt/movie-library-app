import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-movies-results',
  templateUrl: './search-movies-results.component.html',
  styleUrls: ['./search-movies-results.component.scss']
})
export class SearchMoviesResultsComponent implements OnInit {

  @Input() results: any;

  imgEndpoint = 'https://image.tmdb.org/t/p/w500/';

  constructor() { }

  ngOnInit() {
  }

}
