import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Background from "./Background";

const ProjectsWrapper = styled.section`
  padding: 4rem 2rem;

  @media (min-width: 1440px) {
    max-width: 90%;
    margin: auto;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
  }
`;

const ProjectMainTitle = styled.h2`
  font-size: 3rem;
  color: #9b773d;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const ProjectCard = styled.div`
  background-color: #fffbeb;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  margin-bottom: 2rem;
  animation: fadeIn 3s ease;

  transition: transform 0.3s ease;
  border-radius: 8px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: #9b773d;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ProjectLink = styled(Link)`
  color: #615545;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #444243;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const projectData = [
  {
    id: 1,
    title: "Booki: Travel Agency Homepage",
    description: "HTML | CSS | Responsive Design",
  },
  {
    id: 2,
    title: "Ohmyfood: Dynamic Webpage for a Food Service",
    description: "CSS Animations | SASS | Mobile-First",
  },
  {
    id: 3,
    title: "GameOn: The Next Gamers Assembly Landing Page",
    description: "JavaScript | Form Validation | Event Handling",
  },
  {
    id: 4,
    title: "FishEye: Accessible Photography Platform",
    description: "JavaScript | Accessibility | Modular Design",
  },
  {
    id: 5,
    title: "Les Petits Plats: Efficient Search Algorithm For Recipes",
    description: "JavaScript | Search Algorithm | Green Code Principles",
  },
  {
    id: 6,
    title: "Billed: Debugging and Testing a SaaS HR Application",
    description: "JavaScript | Unit Testing | Integration Testing | Debugging",
  },
  {
    id: 7,
    title: "Learn@Home: Educational Support Application Requirements",
    description: "Agile Methodology | User Stories | UX/UI Design",
  },
  {
    id: 8,
    title: "Kasa: Location Services Homepage",
    description: "React | React Router | Typescript | SASS | CSS Animations",
  },
  {
    id: 9,
    title: "SportSee: Analytics Dashboard Development",
    description:
      "React | Typescript | Data Visualization | API Integration | Recharts",
  },
  {
    id: 10,
    title: "Argent Bank: Banking User Account with API Integration",
    description: "React | Typescript | Redux | API Integration | Swagger",
  },
  {
    id: 11,
    title: "HRnet: Migration from jQuery to React",
    description:
      "React | Typescript | NPM Publish | Performance Analysis | Documentation",
  },
  {
    id: 12,
    title: "Konkrete: Real Estate on the blockchain",
    description: "React | Typescript | Node JS | Web3",
  },
];

const Projects = () => {
  return (
    <ProjectsWrapper>
      <Background />
      <ProjectMainTitle>Projects I've Worked On</ProjectMainTitle>
      {projectData.map((project) => (
        <ProjectLink key={project.id} to={`/projects/${project.id}`}>
          <ProjectCard key={project.id}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <p style={{ color: "#9B773D", margin: "0.5rem 0" }}>
              {project.description}
            </p>
            <ProjectLink to={`/projects/${project.id}`}>
              See Details
            </ProjectLink>
          </ProjectCard>
        </ProjectLink>
      ))}
    </ProjectsWrapper>
  );
};

export default Projects;
