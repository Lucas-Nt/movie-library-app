export interface TvShowModel {
  id: number;
  name: string;
  first_air_date: string;
  vote_average: string;
  overview: any;
  poster_path: string;
}

export interface MovieModel {
  id: number;
  title: string;
  release_date: string;
  vote_average: string;
  overview: any;
  poster_path: string;
}

export interface MovieTvShowViewModel {
  id: number;
  title: string;
  releaseDate: string;
  rating: string;
  description: any;
  poster: string;
}

export interface MovieDetailModel {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: any[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos: VideoModel;
}

export interface TvShowDetailModel {
  backdrop_path: string;
  episode_run_time: number[];
  first_air_date: string;
  genres: any[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air:  any;
  name: string;
  next_episode_to_air:  null;
  networks: any[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: any[];
  seasons: any[];
  status: string;
  type: string;
  vote_average: number;
  vote_count: number;
  videos: VideoModel;
}

export interface MovieTvShowDetailViewModel {
  id: number;
  title: string;
  releaseDate: string;
  rating: number;
  runtime: number;
  description: any;
  genres: any[];
  posterPath: string;
  backdropPath: string;
  youTubeVideoKey: string;
}

interface VideoModel {
  results: Videos[];
}

interface Videos {
  id: string;
  key: string;
}
