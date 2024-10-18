import React from "react";
import styled from "styled-components";

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("/wallpaper.webp");
  background-size: cover;
  opacity: 0.08; /* Set opacity to 10% */
  z-index: -1; /* Ensure it's behind other content */
`;

const Background = () => {
  return <BackgroundWrapper />;
};

export default Background;
