import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";
import {
  MovieListStyled,
  InputContainer,
  NoMovieTextStyled,
} from "@/styles/homepage";
import { useRouter } from "next/router";
import MovieDetail from "@/components/MovieDetail";

const Home: React.FC = () => {
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [searchQuery, setSearchQuery] = useState<string | undefined>();

  const router = useRouter();
  const { movieId } = router?.query;

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const moviesData = (await axios.get("/api/v1/movies/list"))?.data;
    setMovies(moviesData);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  const handleSearch = async () => {
    try {
      const moviesData = (
        await axios.get(`/api/v1/movies/search?searchTerm=${searchQuery}`)
      )?.data;
      setMovies(moviesData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Movie App</title>
      </Head>
      <InputContainer>
        <input
          placeholder="Search For a Movie"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Search</button>
      </InputContainer>
      <MovieListStyled>
        {movies.length ? (
          movies?.map(({ id, ...movie }: IMovieCard) => (
            <MovieCard key={id} id={id} {...movie} />
          ))
        ) : (
          <NoMovieTextStyled>
            No movie found related to the entered word.
          </NoMovieTextStyled>
        )}
      </MovieListStyled>
      {movieId && <MovieDetail />}
    </>
  );
};

export default Home;
