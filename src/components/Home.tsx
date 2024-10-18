import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Background from "./Background";

const HomeWrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-size: cover;
  color: #fffbeb;
`;

const Name = styled.h1`
  font-size: 4rem;
  letter-spacing: 0.5rem;
  animation: fadeIn 3s ease;
  color: #9b773d;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-top: 0.5rem;
  animation: fadeIn 3s ease;
  color: #655545;
`;

const Subtitle = styled.h3`
  font-size: 1.2rem;
  margin-top: 1rem;
  animation: fadeIn 3s ease;
  color: #646263;
  font-weight: normal;
  font-style: italic;
`;

const CTAButton = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  font-size: 1.5rem;
  background-color: #9b773d;
  border: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #7b622c;
  }
`;

const SocialLinks = styled.div`
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  margin: 0 1rem;
  color: #1b435e;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #9b773d;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/projects");
  };

  return (
    <HomeWrapper>
      <Background />
      <Name> Bénédicte Billaud</Name>
      <Title>Front-End Developer</Title>
      <Subtitle>Crafting Elegant Solutions for Everyone</Subtitle>
      <CTAButton onClick={handleNavigate}>Explore My Work</CTAButton>
      <SocialLinks>
        <SocialLink
          href="https://github.com/bebill/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/benedictebillaud"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </SocialLink>
      </SocialLinks>
    </HomeWrapper>
  );
};

export default Home;
