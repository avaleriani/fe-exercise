import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 70%;
  padding: 40px 50px;
`;

export const BackGroundWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${(props: { background: any }) => props.background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const BackGround = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  opacity: 0.7;
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ImgContainer = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  & > img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const InfoContainer = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  color: gray;
`;

export const Title = styled.div`
  color: white;
  font-family: "Roboto", sans-serif;
  & > h1 {
    font-size: 35px;
    & > span {
      color: gray;
    }
  }
`;
export const SubTitle = styled.div`
  color: white;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const OverView = styled.div`
  margin-top: 20px;
  & > :nth-child(1) {
    margin-bottom: 15px;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    color: white;
  }
  & > :nth-child(2) {
    color: white;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  padding: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  top: 0;
  right: 0;
  color: white;
`;
