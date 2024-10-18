import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Background from "./Background";

const ProjectsWrapper = styled.section`
  padding: 4rem 2rem;
`;

const ProjectMainTitle = styled.h2`
  font-size: 3rem;
  color: #9b773d; // Light color
  margin-bottom: 2rem;
  text-align: center;
`;

const ProjectCard = styled.div`
  background-color: #fffbeb; // Couleur de fond pour les cartes de projet
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
  border-radius: 8px; // Arrondir les bords des cartes

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); // Ombre plus marquée au survol
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: #9b773d; // Couleur du titre correspondant à la palette
`;

const ProjectLink = styled(Link)`
  color: #615545; // Couleur du lien correspondant à la palette
  text-decoration: none; // Supprime le soulignement
  transition: color 0.3s;

  &:hover {
    color: #444243; // Changement de couleur au survol
  }
`;

const Projects = () => {
  return (
    <ProjectsWrapper>
      <Background />
      <ProjectMainTitle>My Projects</ProjectMainTitle>
      <ProjectCard>
        <ProjectTitle>Booki: Travel Agency Homepage</ProjectTitle>
        <p style={{ color: "#9B773D", margin: " 0.5rem 0" }}>
          HTML | CSS | Responsive Design
        </p>
        <ProjectLink to="/projects/1">See Details</ProjectLink>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>
          Ohmyfood: Dynamic Webpage with CSS Animations
        </ProjectTitle>
        <p style={{ color: "#9B773D", margin: " 0.5rem 0" }}>
          CSS Animations | SASS | Mobile-First
        </p>
        <ProjectLink to="/projects/2">See Details</ProjectLink>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>
          GameOn: Create a Landing Page with JavaScript
        </ProjectTitle>
        <p style={{ color: "#9B773D", margin: " 0.5rem 0" }}>
          JavaScript | Form Validation | Event Handling
        </p>
        <ProjectLink to="/projects/3">See Details</ProjectLink>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>FishEye: Accessible Photography Platform</ProjectTitle>
        <p style={{ color: "#9B773D", margin: " 0.5rem 0" }}>
          JavaScript | Accessibility | Modular Design
        </p>
        <ProjectLink to="/projects/4">See Details</ProjectLink>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>
          Les Petits Plats: Efficient Search Algorithm Development
        </ProjectTitle>
        <p style={{ color: "#9B773D", margin: " 0.5rem 0" }}>
          JavaScript | Search Algorithm | Green Code Principles
        </p>
        <ProjectLink to="/projects/5">See Details</ProjectLink>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>
          Billed: Debugging and Testing a SaaS HR Application
        </ProjectTitle>
        <p style={{ color: "#9B773D", margin: " 0.5rem 0" }}>
          JavaScript | Unit Testing | Integration Testing | Debugging
        </p>
        <ProjectLink to="/projects/6">See Details</ProjectLink>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>
          Learn@Home: Educational Support Application Requirements
        </ProjectTitle>
        <p style={{ color: "#9B773D", margin: " 0.5rem 0" }}>
          Agile Methodology | User Stories | UX/UI Design
        </p>
        <ProjectLink to="/projects/7">See Details</ProjectLink>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>
          Kasa: Web Application Development with React and React Router
        </ProjectTitle>
        <p style={{ color: "#9B773D", margin: " 0.5rem 0" }}>
          React | React Router | Typescript | SASS | CSS Animations
        </p>
        <ProjectLink to="/projects/8">See Details</ProjectLink>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>SportSee: Analytics Dashboard Development</ProjectTitle>
        <p style={{ color: "#9B773D", margin: " 0.5rem 0" }}>
          React | Typescript | Data Visualization | API Integration | Recharts
        </p>
        <ProjectLink to="/projects/9">See Details</ProjectLink>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>
          Argent Bank: Banking User Account with API Integration
        </ProjectTitle>
        <p style={{ color: "#9B773D", margin: " 0.5rem 0" }}>
          React | Typescript | Redux | API Integration | Swagger
        </p>
        <ProjectLink to="/projects/10">See Details</ProjectLink>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>HRnet: Migration from jQuery to React</ProjectTitle>
        <p style={{ color: "#9B773D", margin: " 0.5rem 0" }}>
          React | Typescript | NPM Publish | Performance Analysis |
          Documentation
        </p>
        <ProjectLink to="/projects/11">See Details</ProjectLink>
      </ProjectCard>
    </ProjectsWrapper>
  );
};

export default Projects;
