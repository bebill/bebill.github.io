import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Background from "./Background";

const ProjectDetailsWrapper = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const ProjectTitle = styled.h2`
  font-size: 3rem;
  color: #9b773d; // Light color
  margin-bottom: 2rem;
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  color: #646263; // Lighter text
  line-height: 1.8;
  text-align: justify;
`;

const ProjectLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const ProjectLink = styled.a`
  color: #9b773d;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #7b622c;
  }
`;

type ProjectData = {
  [key: string]: {
    title: string;
    image: string;
    description: string;
    github: string;
    demo: string;
  };
};

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const projectData: ProjectData = {
    "1": {
      title: "Booki: Travel Agency Homepage",
      image: "/booki.png",
      description: `
          In this project, I created the homepage of a travel agency using HTML and CSS, focusing on responsive design. The challenge was to integrate the interface from provided Figma designs, ensuring it worked seamlessly across mobile, tablet, and desktop devices. 
  
          I worked closely with the CTO and the UI designer of the start-up Booki, who provided a project overview, specifications, and initial HTML and CSS code to build upon.
  
          The goal was to help users find accommodations and activities in their selected city, delivering a user-friendly and visually appealing website.
        `,
      github: "https://github.com/bebill/Openclassrooms-P2_Booki",
      demo: "https://bebill.github.io/Openclassrooms-P2_Booki/",
    },
    "2": {
      title: "Ohmyfood: Dynamic Webpage with CSS Animations",
      image: "/ohmyfood.png", // Add the relevant image for the project
      description: `
        In this project, I worked on creating a dynamic and interactive web page for a start-up named Ohmyfood. The project involved building the site using a mobile-first approach and implementing CSS animations to improve user engagement.

        I used SASS for styling, which helped to organize the CSS more efficiently, and versioned the project using Git and GitHub. The animations were a crucial part of this project, bringing life to the interface and providing a smoother user experience.

        The site allows users to view menus from various gastronomic restaurants, with a unique feature enabling customers to pre-order their meals so they are ready upon arrival.
      `,
      github: "https://github.com/bebill/Openclassrooms-P3_OhMyFood",
      demo: "https://bebill.github.io/Openclassrooms-P3_OhMyFood/",
    },
    "3": {
      title: "GameOn: Create a Landing Page with JavaScript",
      image: "/gameon.png", // Add the relevant image for the project
      description: `
          This project was an introduction to JavaScript, where I developed a landing page for GameOn, a company that organizes game competitions. 
  
          My main task was to implement a registration form using Vanilla JavaScript, working on form validation and dynamic interaction using JavaScript event handling. I also ensured that the code structure was well-organized with separate HTML, CSS, and JavaScript files, as recommended by the project lead. 
  
          The project involved collaborating with a former developer's partially completed code, reviewing their GitHub issues, and adding the missing functionality. 
  
          The JavaScript I implemented allowed for full validation of user inputs, creating a seamless and interactive experience for users registering for the competition.
        `,
      github: "https://github.com/bebill/Openclassrooms-P4_GameOn",
      demo: "https://bebill.github.io/Openclassrooms-P4_GameOn/starterOnly/index.html",
    },
    "4": {
      title: "FishEye: Accessible Photography Platform",
      image: "/fisheye.png", // Add the relevant image for the project
      description: `
          In this project, I developed a web platform for FishEye, a site that allows independent photographers to showcase their work. The focus was on accessibility, modular design, and JavaScript design patterns.
  
          My main tasks included creating a modular application structure using JavaScript's Factory Method pattern, integrating a media LightBox for photos and videos, and ensuring full keyboard and screen reader accessibility. The project required working with provided JSON data to dynamically generate photographer pages, implementing a like system, and building a functional contact modal.
  
          Accessibility was a key aspect, and I followed WCAG guidelines to ensure the website was usable by all users. I also worked closely with the UI designer to implement the approved mockups and ensured the site was both visually appealing and functional.
        `,
      github: "https://github.com/bebill/Openclassrooms-P6_Fisheye",
      demo: "https://bebill.github.io/Openclassrooms-P6_Fisheye/",
    },
    "5": {
      title: "Les petits plats: Efficient Search Algorithm Development",
      image: "/petitsplats.png", // Add the relevant image for the project
      description: `
    In this project, I developed an efficient search algorithm for a cooking recipe platform named "Les petits plats." 

    My main tasks included designing a responsive and intuitive user interface using a front-end framework like Bootstrap, which allowed users to easily search through a dataset of 50 recipes.

    I implemented two versions of a search algorithm: one using native loops (for, while) and the other utilizing functional programming techniques with array methods (forEach, filter). This allowed for a thorough comparison of their performance.

    After implementing both algorithms, I analyzed and compared their efficiency using performance testing tools, ultimately documenting my findings and recommending the optimal algorithm for implementation.

    Throughout the project, I adhered to Green Code principles, ensuring that the code was not only efficient but also environmentally responsible.
  `,
      github: "https://github.com/bebill/Openclassrooms-P7_PetitsPlats",
      demo: "https://bebill.github.io/Openclassrooms-P7_PetitsPlats/",
    },
    "6": {
      title: "Billed: Debugging and Testing a SaaS HR Application",
      image: "/billed.png", // Add the relevant image for the project
      description: `
      In this project, I was tasked with debugging and testing a Human Resources SaaS application for a company called Billed. 

      My main responsibility was to fix bugs in the application while ensuring the stability and functionality of the employee journey. I started by setting up the back-end and front-end from specific repositories, following the provided README instructions.

      Using the Chrome Debugger, I identified and resolved various issues in the application's functionality. I also wrote and implemented unit tests in JavaScript to verify the validity and reliability of the different components of the application, as well as integration tests to check interactions between components.

      Additionally, I developed a comprehensive manual end-to-end testing plan to ensure a smooth user experience for both HR administrators and employees. This project enhanced my debugging skills and reinforced the importance of rigorous testing in software development.
    `,
      github: "https://github.com/bebill/Openclassrooms-P9_Billed",
      demo: "https://bebill.github.io/Openclassrooms-P9_Billed/",
    },
    "7": {
      title: "Learn@Home: Educational Support Application Requirements",
      image: "/learn@home.png",
      description: `
      In this project, I defined the requirements and modeled a technical solution for Learn@Home, an association that connects children facing academic difficulties with volunteer tutors. 

      My main tasks included creating use case diagrams for each major feature of the site, such as login, chat, calendar, task manager, and dashboard. I developed User Stories with acceptance criteria for each feature to clearly outline user expectations and objectives. 

      Additionally, I designed mockups of the site using tools like Figma, which served as visual guides for development and facilitated communication of ideas to the client and development team. 

      I also elaborated on a detailed Kanban board, breaking the project down into blocks of functionality and sub-features, which structured the development process and facilitated project tracking.

      This project emphasized the importance of identifying client needs, modeling technical solutions, and contributing effectively using an agile methodology. Skills in UX/UI design and project management tools like Kanban will enhance my collaboration and communication capabilities within teams and with clients.
    `,
      github:
        "https://www.canva.com/design/DAF0uixHr7M/cfx9ccoXMijeYuvIh1oTMw/view?utm_content=DAF0uixHr7M&utm_campaign=designshare&utm_medium=link&utm_source=editor", // Replace with the actual GitHub link if available
      demo: "https://www.figma.com/proto/0fusUZuPdG65Jo4MF8QyYT/Learn%40Home?type=design&node-id=20-44&t=2FShrxeX53al3zR8-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=20%3A44", // Replace with the actual demo link if available
    },
    "8": {
      title: "Kasa: Web Application Development with React and React Router",
      image: "/kasa.png", // Add the relevant image for the project
      description: `
        In this project, I developed a web application for Kasa, a company specializing in apartment rentals. The objective was to create a modern and responsive front-end using React and React Router, ensuring a seamless user experience. I used TypeScript to enhance the development process, ensuring type safety and better code maintainability.

        My main tasks included implementing the application structure based on Figma mockups, utilizing React components for different parts of the interface, and configuring React Router for navigation between pages. I also focused on enhancing the visual appeal by integrating CSS animations and using SASS for styling, making the interface not only functional but visually attractive.

        The project involved handling data from a JSON file representing apartment listings, and I ensured all components followed the provided design guidelines. Key features included a responsive image gallery with navigation functionality and collapsible sections for additional information.

        This project emphasized modern front-end development techniques and provided me with hands-on experience in building user-friendly applications.
    `,
      github: "https://github.com/bebill/Openclassrooms-P11_Kasa",
      demo: "https://bebill.github.io/Openclassrooms-P11_Kasa/",
    },
    "9": {
      title: "SportSee: Analytics Dashboard Development",
      image: "/sportsee.png", // Add the relevant image for the project
      description: ` 
    In this project, I developed an analytics dashboard for SportSee, a startup dedicated to sports coaching. The main focus was on integrating charts and diagrams using React and Typescript to present user activity data effectively.

    My primary task involved building the user profile page, where I incorporated advanced graphical elements to showcase performance analytics. I utilized libraries like Recharts for data visualization, enabling interactive and appealing representations of the data.

    I was responsible for managing HTTP requests, using Fetch and Axios to retrieve necessary data from a Node.js backend API. I created a dedicated service for API calls, ensuring the separation of concerns within the application.

    Additionally, I implemented a thorough documentation process, including a Readme, JSDoc, and PropTypes, to facilitate collaboration and code comprehension within the team. Although the backend was developed using Node.js, my concentration was primarily on front-end development and API integration, ensuring a seamless user experience.
  `,
      github: "https://github.com/bebill/Openclassrooms-P12_SportSee",
      demo: "https://bebill.github.io/Openclassrooms-P12_SportSee/",
    },
    "10": {
      title: "Argent Bank: Banking User Account with API Integration",
      image: "/argentbank.png", // Add the relevant image for the project
      description: ` 
      In this project, I developed the front-end of a banking application called Argent Bank using React, Typescript, and Redux to create a dynamic and responsive user experience.

      My main task was to integrate the front-end with the back-end through API calls, ensuring seamless communication between the client and server. I wrote REST API calls to facilitate user authentication, allowing users to log in, manage their profiles, and view their account information securely.

      I focused on creating a complete and responsive dashboard interface using React, while Redux was utilized to manage the application state globally, ensuring a consistent experience across all components. 

      Additionally, I created a Swagger to define the API endpoints and model interactions with transaction data, preparing for potential future features in the second phase of the project. My experience with Node.js allowed me to understand the back-end operations and ensure compatibility with the API specifications.

      This project not only enhanced my skills in React and Redux but also improved my understanding of full-stack development and API documentation practices, which are crucial for modern web development.
    `,
      github: "https://github.com/bebill/Openclassrooms-P13_ArgentBank",
      demo: "https://bebill.github.io/Openclassrooms-P13_ArgentBank/",
    },
    "11": {
      title: "HRnet: Migration from jQuery to React",
      image: "/wealthhealth.png", // Add the relevant image for the project
      description: `
        In this project, I participated in converting an internal web application from jQuery to React for WealthHealth, a major financial company. My main task was to redesign key pages of the application with atomic design, specifically replacing a jQuery modal plugin with a React component.

        The project involved deep understanding of both technologies and their interactions, as I measured application performance before and after the conversion. I conducted performance audits using Lighthouse to quantify the benefits of migrating to React.

        I documented the converted component published on NPM, providing detailed technical documentation that outlined the component's architecture, functionality, and design rationale. The deliverables included comprehensive reports detailing performance analyses and technical choices made during the migration process.
        
        This experience significantly enhanced my skills in reducing technical debt and improving web application performance, which is essential for front-end developers in modernizing existing applications. I also focused on functional programming paradigms in React, ensuring modularity and maintainability in the code structure.
    `,
      github: "https://github.com/bebill/Openclassrooms-P14_WealthHealth",
      demo: "https://bebill.github.io/Openclassrooms-P14_WealthHealth/",
    },
  };

  const project = id && projectData[id] ? projectData[id] : undefined;

  if (!project) {
    return (
      <ProjectDetailsWrapper>
        <Background />
        <ProjectTitle>Project Not Found</ProjectTitle>
        <ProjectDescription>
          The project you are looking for does not exist or is unavailable at
          the moment.
        </ProjectDescription>
      </ProjectDetailsWrapper>
    );
  }

  return (
    <ProjectDetailsWrapper>
      <Background />
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectImage src={project.image} alt={project.title} />
      <ProjectDescription>{project.description}</ProjectDescription>
      <ProjectLinks>
        <ProjectLink
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </ProjectLink>
        <ProjectLink
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </ProjectLink>
      </ProjectLinks>
    </ProjectDetailsWrapper>
  );
};

export default ProjectDetails;
