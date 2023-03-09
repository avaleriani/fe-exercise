import Link from "next/link";
import React, { FC } from "react";
import { formattedDate } from "../../../util/date";
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
      <Link href={`/movie/${id}`}>
        <ImageContainer>
          <img src={poster_path} alt={title} />
        </ImageContainer>
      </Link>
      <InfoContainer>
        <LinkStyled href={`/movie/${id}`}>{title}</LinkStyled>
        <GenresWrapper>
          <GenreStyled>{genres?.toString()}</GenreStyled>
        </GenresWrapper>
        <div>{formattedDate(release_date)}</div>
      </InfoContainer>
    </MovieCardWrapper>
  );
};

export default MovieCard;
