import {
  MovieDetailModel, MovieModel, MovieTvShowDetailViewModel, MovieTvShowViewModel, TvShowDetailModel, TvShowModel
} from '../models/movie-tv-show.model';

export class MovieTvShowMapper {

  public toMovieVM(movie: MovieModel): MovieTvShowViewModel {
    if (!movie) {
      return {
        id : null,
        title: null,
        releaseDate: '',
        rating: null,
        description: '',
        poster: ''
      };
    }

    return {
      id : movie.id,
      title: movie.title,
      releaseDate: movie.release_date,
      rating: movie.vote_average,
      description: movie.overview,
      poster: movie.poster_path
    };
  }

  public toMovieDetailVM(movie: MovieDetailModel): MovieTvShowDetailViewModel {
    if (!movie) {
      return {
        id : null,
        title: null,
        releaseDate: null,
        description: null,
        genres: [],
        rating: null,
        runtime: null,
        posterPath: null,
        backdropPath: null,
        youTubeVideoKey: null
      };
    }

      return {
        id : movie.id,
        title: movie.original_title,
        releaseDate: movie.release_date,
        description: movie.overview,
        genres: movie.genres,
        rating: +movie.vote_average.toFixed(1),
        runtime: movie.runtime,
        posterPath: movie.poster_path,
        backdropPath: movie.backdrop_path,
        youTubeVideoKey: movie.videos && movie.videos.results.length && movie.videos.results[0].key
      };
  }

  public toTvShowVM(tvShow: TvShowModel): MovieTvShowViewModel {
    if (!tvShow) {
      return {
        id : null,
        title: null,
        releaseDate: '',
        rating: null,
        description: '',
        poster: ''
      };
    }

    return {
      id : tvShow.id,
      title: tvShow.name,
      releaseDate: tvShow.first_air_date,
      rating: tvShow.vote_average,
      description: tvShow.overview,
      poster: tvShow.poster_path
    };
  }

  public toTvShowDetailVM(tvShow: TvShowDetailModel): MovieTvShowDetailViewModel {
    if (!tvShow) {
      return {
        id : null,
        title: null,
        releaseDate: null,
        description: null,
        genres: [],
        runtime: null,
        rating: null,
        posterPath: null,
        backdropPath: null,
        youTubeVideoKey: null
      };
    }

      return {
        id : tvShow.id,
        title: tvShow.name,
        releaseDate: tvShow.first_air_date,
        description: tvShow.overview,
        genres: tvShow.genres,
        runtime: null,
        rating: +tvShow.vote_average.toFixed(1),
        posterPath: tvShow.poster_path,
        backdropPath: tvShow.backdrop_path,
        youTubeVideoKey: tvShow.videos && tvShow.videos.results.length && tvShow.videos.results[0].key
      };
  }

}
