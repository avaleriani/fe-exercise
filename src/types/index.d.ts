interface IMovies {
  adult: boolean;
  backdrop_path: string;
  genres: string[];
  id: number;
  original_language: string;
  direction: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface IMovieCard {
  id: number;
  poster_path: string;
  title: string;
  genres: string[];
  release_date: string;
}

interface IHomeProps {
  movies: Movies[];
}

interface IMoviePage {
  id: string | string[] | undefined;
}
