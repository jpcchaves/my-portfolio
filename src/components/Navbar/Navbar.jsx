// Hooks
import { useState } from "react";
// Navbar Components
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../../styles/Navbar.style";

const Navbar = () => {
  // Navbar Hamburguer Hook
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
            <NavbarLink to="/skills">Skills</NavbarLink>
            <NavbarLink to="/projects">Projects</NavbarLink>
            <NavbarLink to="/contact">Contact</NavbarLink>
            <OpenLinksButton
              onClick={() => setExtendNavbar((currentValue) => !currentValue)}
            >
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer></RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/" onClick={() => setExtendNavbar(false)}>
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended
            to="/about"
            onClick={() => setExtendNavbar(false)}
          >
            About
          </NavbarLinkExtended>
          <NavbarLinkExtended
            to="/skills"
            onClick={() => setExtendNavbar(false)}
          >
            Skills
          </NavbarLinkExtended>
          <NavbarLinkExtended
            to="/projects"
            onClick={() => setExtendNavbar(false)}
          >
            Projects
          </NavbarLinkExtended>
          <NavbarLinkExtended
            to="/contact"
            onClick={() => setExtendNavbar(false)}
          >
            Contact
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
