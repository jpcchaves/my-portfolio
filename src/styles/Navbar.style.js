import styled from "styled-components";
import { theme } from "./theme";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  position: ${(props) => (props.extendNavbar ? "absolute" : "")};
  top: ${(props) => (props.extendNavbar ? "0" : "")};
  z-index: 1;
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: #000;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  text-align: center;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  text-decoration: none;
  margin: 10px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  text-decoration: none;
  margin: 10px;
`;

export const OpenLinksButton = styled.button`
  width: 2rem;
  height: 2rem;
  padding: 0;
  line-height: 2rem;
  border: none;
  outline: none;
  color: white;
  border-radius: 20%;
  font-size: 1.6rem;
  background-color: ${theme.colors.buttonColor};
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;
