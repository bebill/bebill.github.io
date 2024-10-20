import React from "react";
import styled from "styled-components";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaNodeJs,
  FaFigma,
  FaYarn,
  FaStripe,
} from "react-icons/fa";
import {
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
  SiJest,
  SiRedux,
  SiSass,
  SiNotion,
  SiTrello,
  SiAdobe,
  SiWebflow,
} from "react-icons/si";
import { DiNpm } from "react-icons/di";
import Background from "./Background";

const SkillsWrapper = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const SkillsTitle = styled.h2`
  font-size: 3rem;
  color: #9b773d;
  margin-bottom: 2rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #fffbeb;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  svg {
    font-size: 3rem;
    color: #9b773d;
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: #615545;
  }
`;

const Skills = () => {
  return (
    <SkillsWrapper>
      <Background />
      <SkillsTitle>My Technical Skills Set</SkillsTitle>
      <SkillsGrid>
        {/* React */}
        <SkillCard>
          <FaReact />
          <h3>React</h3>
        </SkillCard>

        {/* JavaScript */}
        <SkillCard>
          <FaJs />
          <h3>JavaScript</h3>
        </SkillCard>

        {/* TypeScript */}
        <SkillCard>
          <SiTypescript />
          <h3>TypeScript</h3>
        </SkillCard>

        {/* HTML5 */}
        <SkillCard>
          <FaHtml5 />
          <h3>HTML5</h3>
        </SkillCard>

        {/* CSS3 */}
        <SkillCard>
          <FaCss3Alt />
          <h3>CSS3</h3>
        </SkillCard>

        {/* SASS */}
        <SkillCard>
          <SiSass />
          <h3>SASS</h3>
        </SkillCard>

        {/* Tailwind CSS */}
        <SkillCard>
          <SiTailwindcss />
          <h3>Tailwind CSS</h3>
        </SkillCard>

        {/* Redux */}
        <SkillCard>
          <SiRedux />
          <h3>Redux</h3>
        </SkillCard>

        {/* Jest */}
        <SkillCard>
          <SiJest />
          <h3>Jest</h3>
        </SkillCard>

        {/* Webflow */}
        <SkillCard>
          <SiWebflow />
          <h3>Webflow</h3>
        </SkillCard>

        {/* Figma */}
        <SkillCard>
          <FaFigma />
          <h3>Figma</h3>
        </SkillCard>

        {/* Adobe Suite */}
        <SkillCard>
          <SiAdobe />
          <h3>Adobe Suite</h3>
        </SkillCard>

        {/* API Rest */}
        <SkillCard>
          <FaNodeJs />
          <h3>API Rest</h3>
        </SkillCard>

        {/* Firebase */}
        <SkillCard>
          <SiFirebase />
          <h3>Firebase</h3>
        </SkillCard>

        {/* Git */}
        <SkillCard>
          <FaGitAlt />
          <h3>Git</h3>
        </SkillCard>

        {/* Node.js */}
        <SkillCard>
          <FaNodeJs />
          <h3>Node.js</h3>
        </SkillCard>

        {/* NPM Publish */}
        <SkillCard>
          <DiNpm />
          <h3>NPM Publish</h3>
        </SkillCard>

        {/* Yarn */}
        <SkillCard>
          <FaYarn />
          <h3>Yarn</h3>
        </SkillCard>

        {/* Stripe */}
        <SkillCard>
          <FaStripe />
          <h3>Stripe</h3>
        </SkillCard>

        {/* Trello */}
        <SkillCard>
          <SiTrello />
          <h3>Trello</h3>
        </SkillCard>

        {/* Notion */}
        <SkillCard>
          <SiNotion />
          <h3>Notion</h3>
        </SkillCard>
      </SkillsGrid>
    </SkillsWrapper>
  );
};

export default Skills;
