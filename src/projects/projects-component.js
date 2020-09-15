import React from "react";

import "./projects-component.scss";
import githubIcon from "../media/github.svg";

const projects = [
  {
    name: "Chat",
    technologies: ["Node.js", "React", "Express.js", "MongoDB"],
    description:
      "Fast real-time messaging app with multiple rooms and users. No authentication needed! Just enter with user name and room name.",
    link: "https://github.com/OdedNir/ChatApp-client",
  },
  {
    name: "Snake Classic Game",
    technologies: ["Vanilla JavaScript", "CSS", "HTML"],
    description: "The classic snake game using Vanilla JavaScript.",
    link: "https://github.com/OdedNir/Snake",
  },
  {
    name: "Calculator",
    technologies: ["Vanilla JavaScript", "CSS", "HTML"],
    description: "Apple Calculator Mockup",
    link: "https://github.com/OdedNir/Calculator",
  },
];

const renderProjects = () => {
  return projects.map((project) => (
    <div className="project">
      <div className="name">{project.name}</div>

      <div className="description">{project.description}</div>

      <div className="technologies-container">
        {project.technologies.map((tech) => {
          return <div className="technology">{tech}</div>;
        })}
      </div>
      <a className="git-link" href={project.link} target="_blank">
        <img className="icon" src={githubIcon} alt="github-icon" />
      </a>
    </div>
  ));
};

const projectsComponent = () => {
  return (
    <div className="projects-component">
      <div className="header">Projects</div>

      <div className="projects-container">{renderProjects()}</div>
    </div>
  );
};

export default projectsComponent;
