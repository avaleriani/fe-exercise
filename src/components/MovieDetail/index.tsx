import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { formattedDate, getOnlyYear } from "../../../utils/date";
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
  ModalWrapper,
  CloseButton,
} from "./styled";

const MovieDetail = () => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(true);
  const [selectedMovie, setSelectedMovie] = useState<IMovies>();

  const fetchMovies = async () => {
    const movies = (await axios.get("/api/v1/movies/list"))?.data;
    const selectedMovieVal = movies?.find(
      (item: IMovies) => item.id === parseInt(router?.query?.movieId as string)
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

  const handleCloseModal = () => {
    router.push("");
  };

  return (
    <ModalWrapper>
      <CloseButton onClick={handleCloseModal}>×</CloseButton>
      {!loading ? (
        <Container>
          <BackGroundWrapper background={selectedMovie?.poster_path}>
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
    </ModalWrapper>
  );
};

export default MovieDetail;
