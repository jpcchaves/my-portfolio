import styled from "styled-components";

export const HomeWrapper = styled.section`
  width: 100%;
  height: 100vh;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  opacity: 0.6;
  animation: zoom 15s;

  @keyframes zoom {
    0% {
      transform: scale(1.5);
    }

    100% {
      transform: scale(1);
    }
  }
`;
