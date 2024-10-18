import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const NavLink = styled(Link)`
  color: #9b773d; // Couleur d'origine de la palette pour le texte
  font-size: 1.2rem;
  transition: color 0.3s;
  margin: 0 1rem; // Espacement entre les liens

  &:hover {
    color: #615545; // Couleur plus claire au survol
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <div>
        <NavLink to="/about">Profile</NavLink>
        <NavLink to="/projects">Portfolio</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
