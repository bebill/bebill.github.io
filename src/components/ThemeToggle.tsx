import React, { useState } from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
  background-color: #9b773d; /* Couleur du bouton */
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #615545; /* Couleur au survol */
  }
`;

const ThemeToggle = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
    document.body.classList.toggle("light-theme", !isLightTheme);
  };

  return (
    <ToggleButton onClick={toggleTheme}>
      {isLightTheme ? "Switch to Dark Theme" : "Switch to Light Theme"}
    </ToggleButton>
  );
};

export default ThemeToggle;
