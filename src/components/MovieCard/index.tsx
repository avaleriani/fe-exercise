import Link from "next/link";
import React, { FC } from "react";
import { formattedDate } from "../../../utils/date";
import {
  ImageContainer,
  MovieCardWrapper,
  InfoContainer,
  LinkStyled,
  GenresWrapper,
  GenreStyled,
} from "./styled";

const MovieCard: FC<IMovieCard> = ({
  poster_path,
  title,
  genres,
  release_date,
  id,
}) => {
  return (
    <MovieCardWrapper data-testid="MovieCard__Component">
      <Link href={`?movieId=${id}`} data-testid="MovieBackground__Link">
        <ImageContainer>
          <img src={poster_path} alt={title} />
        </ImageContainer>
      </Link>
      <InfoContainer>
        <LinkStyled href={`?movieId=${id}`}>{title}</LinkStyled>
        <GenresWrapper>
          {genres && <GenreStyled>{genres.join(", ")}</GenreStyled>}
        </GenresWrapper>
        <div>{formattedDate(release_date)}</div>
      </InfoContainer>
    </MovieCardWrapper>
  );
};

export default MovieCard;
