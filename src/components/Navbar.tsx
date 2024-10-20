import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: #121112;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const NavLogo = styled(Link)`
  color: #9b773d;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NavMenu = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};
    overflow: hidden;
    flex-direction: column;
    background-color: #121112;
    transition: height 0.3s ease-in-out;
  }
`;

const NavLink = styled(Link)`
  color: #9b773d;
  font-size: 1.2rem;
  margin: 0 1rem;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #615545;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    color: #9b773d;
    font-size: 2rem;
    cursor: pointer;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavLogo to="/">Bénédicte Billaud</NavLogo>
      <MobileIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      <NavMenu isOpen={isOpen}>
        <NavLink to="/" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={toggleMenu}>
          Profile
        </NavLink>
        <NavLink to="/projects" onClick={toggleMenu}>
          Portfolio
        </NavLink>
        <NavLink to="/skills" onClick={toggleMenu}>
          Skills
        </NavLink>
        <NavLink to="/contact" onClick={toggleMenu}>
          Contact
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
