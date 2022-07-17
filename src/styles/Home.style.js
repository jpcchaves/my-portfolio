import styled from "styled-components";
import { theme } from "./theme";

export const HomeWrapper = styled.header`
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

export const Banner = styled.div`
  position: absolute;
  top: 40%;
  left: 15%;
`;

export const H1Banner = styled.h1`
  color: #fcfcfc;
  font-size: 3rem;
  font-weight: 200;
  text-shadow: 0.2rem 0.3rem 2px rgba(0, 0, 0, 0.336);
  line-height: 3.5rem;
  margin-bottom: 2rem;
  opacity: 0;
  animation: moveBanner 0.5s forwards;

  @keyframes moveBanner {
    0% {
      transform: translateY(10rem) rotateY(-30deg);
    }

    100% {
      transform: translateY(0) rotateY(0);
      opacity: 1;
    }
  }
`;

export const P = styled.p`
  color: #fcfcfc;
  font-size: 2rem;
  text-shadow: 0.2rem 0.2rem rgba(0, 0, 0, 0.336);
  margin-bottom: 2rem;
  opacity: 0;
  animation: moveBanner 0.7s forwards;

  @keyframes moveBanner {
    0% {
      transform: translateY(10rem) rotateY(-30deg);
    }

    100% {
      transform: translateY(0) rotateY(0);
      opacity: 1;
    }
  }
`;

export const ButtonDownload = styled.button`
  font-size: 1rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background: #00b4db;
  background: -webkit-linear-gradient(to right, #0083b0, #00b4db);
  background: linear-gradient(to right, #0083b0, #00b4db);
  padding: 1rem 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0;
  animation: moveBanner 2s forwards;

  :hover {
    opacity: 0.8;
    color: black;
    font-weight: bolder;
  }
`;

export const DownloadCurriculo = styled.a`
  text-decoration: none;
  color: #fcfcfc;
`;
