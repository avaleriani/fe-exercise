import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  & > div {
    width: 100px;
    height: 100px;
    border: 10px solid #f3f3f3;
    border-radius: 50%;
    border-top: 10px solid #383636;
    border-right: 10px solid #383636;
    border-bottom: 10px solid #383636;
    animation: spinner 1.5s linear infinite;
    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
