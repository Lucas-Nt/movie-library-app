import { MovieModel, MovieViewModel } from '../models/movie.model';

export class MovieMapper {

  public toViewModel(movie: MovieModel): MovieViewModel {
    if (!movie) {
      return{
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

}
