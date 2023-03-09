import styled from "styled-components";
import { size } from "../../util/constants";

export const MovieListStyled = styled.div`
  width: 80%;
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: ${size.mobileS}) {
    width: 100%;
  }

  @media (max-width: ${size.tablet}) and (min-width: ${size.mobileL}) {
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 10px 20px;
  position: relative;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 35px auto;
  & > input {
    width: 100%;
    border: none;
    outline: none;
    height: 30px;
    font-size: 18px;
    &::-webkit-input-placeholder {
      font-size: 18px;
    }
  }
  & > button {
    outline: none;
    border: none;
    background-color: grey;
    border-radius: 20px;
    height: 100%;
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    color: white;
    position: absolute;
    top: 0;
    right: -1px;
    width: 100px;
    font-size: 18px;
  }
`;
