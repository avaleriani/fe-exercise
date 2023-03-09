import Link from "next/link";
import styled from "styled-components";
import { size } from "../../../util/constants";

export const MovieCardWrapper = styled.div`
  margin: 10px;
  @media (min-width: ${size.mobileL}) {
    min-width: 250px;
    max-width: 250px;
  }
`;

export const ImageContainer = styled.a`
  width: 100%;
  border-radius: 10px;
  color: black;
  display: block;
  & > img {
    width: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
`;

export const InfoContainer = styled.div`
  position: relative;
  padding: 15px 10px 10px 10px;
  color: white;
`;

export const LinkStyled = styled(Link)`
  white-space: nowrap;
  overflow: hidden;
  font-weight: bold;
  font-size: 18px;
  text-overflow: ellipsis;
  display: block;
`;

export const GenresWrapper = styled.div`
  margin: 16px 0;
`;

export const GenreStyled = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 17px;
`;
