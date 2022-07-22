import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme, isVisible }) => css`
    background-color: ${theme.colors.buttonColor};
    opacity: ${isVisible ? "1" : "0"};
    font-size: 2rem;
    padding: 0.4rem 0.5rem;
    color: white;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 3;
    border-radius: 20%;
    box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.421);
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
      opacity: 0.8;
    }
  `}
`;
