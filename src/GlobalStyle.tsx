import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #121112;
    color: #f8f9fa;
    overflow-x: hidden;
    transition: background-color 0.3s, color 0.3s;
  }

  h1, h2, h3, h4, h5 {
    font-weight: bold;
    color: #9B773D;
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
    background-color: #9B773D;
    color: #fffbeb;
    padding: 0.75rem 1.5rem;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #615545;
  }

  /* Styles pour le thème clair */
  .light-theme {
    background-color: #f8f9fa;
    color: #121112;
  }

  .light-theme h1, .light-theme h2, .light-theme h3, .light-theme h4, .light-theme h5 {
    color: #444243;
  }

  .light-theme button {
    background-color: #444243; 
  }

  .light-theme button:hover {
    background-color: #9B773D; 
  }

    /* Responsive typography */
    @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
`;
