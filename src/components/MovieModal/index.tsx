import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IMAGES_BASE_PATH } from "../../../util/constants";
import { formattedDate, getOnlyYear } from "../../../util/date";
import LoadingSpinner from "../LoadingSpinner";
import {
  Container,
  BackGroundWrapper,
  BackGround,
  Box,
  ImgContainer,
  InfoContainer,
  Title,
  SubTitle,
  OverView,
} from "./styled";
const MovieModal = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState<IMovies>();

  const fetchMovies = async () => {
    const movies = (await axios.get("/api/v1/movies/list"))?.data;
    const selectedMovieVal = movies?.find(
      (item: { id: number }) => item.id === parseInt(router?.query?.movieId)
    );
    setSelectedMovie(selectedMovieVal);
  };

  useEffect(() => {
    if (selectedMovie) {
      setLoading(false);
    }
  }, [selectedMovie]);

  useEffect(() => {
    fetchMovies();
  }, [router.query]);

  return (
    <>
      {!loading ? (
        <Container>
          <BackGroundWrapper
            background={`${IMAGES_BASE_PATH}${selectedMovie?.poster_path}`}
          >
            <BackGround />
          </BackGroundWrapper>
          <Box>
            <ImgContainer>
              <img
                src={selectedMovie?.poster_path}
                alt={selectedMovie?.title}
              />
            </ImgContainer>
            <InfoContainer>
              <Title>
                <h1>
                  {selectedMovie?.title}
                  <span>{` (${getOnlyYear(
                    selectedMovie?.release_date
                  )})`}</span>
                </h1>
              </Title>
              <SubTitle>{`${formattedDate(
                selectedMovie?.release_date
              )} • ${selectedMovie?.genres?.toString()} `}</SubTitle>
              {selectedMovie?.overview && (
                <OverView>
                  <div>OverView</div>
                  <p>{selectedMovie.overview}</p>
                </OverView>
              )}
              <div>Directed By {selectedMovie?.direction}</div>
            </InfoContainer>
          </Box>
        </Container>
      ) : (
        router?.query?.movieId && <LoadingSpinner />
      )}
    </>
  );
};

export default MovieModal;
