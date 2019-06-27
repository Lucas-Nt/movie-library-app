export interface MovieModel {
  id: number;
  title: string;
  release_date: string;
  vote_average: string;
  overview: any;
  poster_path: string;
}

export interface MovieViewModel {
  id: number;
  title: string;
  releaseDate: string;
  rating: string;
  description: any;
  poster: string;
}
