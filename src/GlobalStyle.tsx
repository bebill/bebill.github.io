import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #121112; /* Couleur de fond sombre */
    color: #f8f9fa; /* Texte clair */
    overflow-x: hidden;
    transition: background-color 0.3s, color 0.3s; /* Transition pour le changement de thème */
  }

  h1, h2, h3, h4, h5 {
    font-weight: bold;
    color: #9B773D; /* Couleur des titres */
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .fade-in {
    animation: fadeIn 1.5s ease-in;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  button {
    background-color: #9B773D; /* Couleur du bouton */
    color: #fffbeb;
    padding: 0.75rem 1.5rem;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #615545; /* Couleur du bouton au survol */
  }

  /* Styles pour le thème clair */
  .light-theme {
    background-color: #f8f9fa; /* Couleur de fond clair */
    color: #121112; /* Texte sombre */
  }

  .light-theme h1, .light-theme h2, .light-theme h3, .light-theme h4, .light-theme h5 {
    color: #444243; /* Couleur des titres dans le thème clair */
  }

  .light-theme button {
    background-color: #444243; /* Couleur du bouton dans le thème clair */
  }

  .light-theme button:hover {
    background-color: #9B773D; /* Couleur du bouton au survol dans le thème clair */
  }
`;
