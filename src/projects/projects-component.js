import React from "react";

import "./projects-component.scss";
import GitHubIcon from "../media/GitHub-Mark-64px.png";

const projects = [
  {
    name: "Chat App",
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
        <img src={GitHubIcon} alt="github-icon" width="30" height="30" />
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
