import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons
import Background from "./Background";
import { useNavigate } from "react-router-dom";

const AboutWrapper = styled.section`
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 3rem;
  color: #9b773d; // Light color
  margin-bottom: 2rem;
`;

const Note = styled.p`
  font-style: italic;
  color: #646263;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #646263; // Lighter text
  text-align: justify;
`;

const AboutImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 2rem auto;
`;

const SocialLinks = styled.div`
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  margin: 0 1rem;
  color: #1b435e; // Adjust this color as needed
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #9b773d; // Change color on hover
  }
`;

const CTAButton = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  font-size: 1.5rem;
  background-color: #9b773d; // Light button color
  border: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #7b622c; // Darker button on hover
  }
`;

const About = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");
  };

  return (
    <AboutWrapper>
      <Background />
      <AboutContent>
        <AboutTitle>Get To Know Your Futur Developer</AboutTitle>
        <SocialLinks>
          <Note>Connect with Me:</Note>
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
        <AboutImage src="/profile.jpg" alt="Profile picture" />
        <AboutText>
          Hello! I'm Benedicte, a passionate front-end developer based in France
          and wishing to explore the world. With a keen eye for design and a
          deep understanding of user experience, I specialize in crafting
          visually stunning and intuitive web applications. My journey in web
          development began with a fascination for how things work behind the
          scenes, and it has evolved into a commitment to creating seamless,
          engaging digital experiences.
          <br />
          <br />
          I excel in transforming creative ideas into functional realities,
          leveraging modern technologies like React, Typescript, and CSS
          frameworks to build responsive, user-friendly interfaces. I believe
          that code is not just a set of instructions but a means of bringing
          ideas to life. My work reflects not only my technical expertise but
          also my dedication to continuous learning and adaptation in this
          ever-evolving field.
          <br />
          <br />
          Beyond my technical skills, I pride myself on being a collaborative
          team player who values open communication and constructive feedback. I
          thrive in environments where creativity flourishes, and I'm always
          eager to share knowledge and support others in their journey. As you
          explore my portfolio, you'll find a showcase of my projects that
          highlight my ability to blend functionality with aesthetics. Whether
          you're looking for a sleek landing page or a complex web application,
          I'm here to bring your vision to life.
          <br />
          <br />
          Let’s create something amazing together!
          <br />
          <CTAButton onClick={handleNavigate}>Let's Get In Touch!</CTAButton>
        </AboutText>
      </AboutContent>
    </AboutWrapper>
  );
};

export default About;
