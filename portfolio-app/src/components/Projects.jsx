import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "../Styles/Project.css";

const projects = [
  {
    title: "Todo App",
    description:
      "A simple RESTful API for managing tasks with authentication and authorization, built using Node.js, Express, and MongoDB.",
    liveLink: "https://todo-app-9b5w.onrender.com/",
    codeLink: "https://github.com/Abiodun001-world/todo-app",
  },
  {
    title: "Blog API",
    description: "This is a simple Blog API project with authentication and authorization, built with Express and MongoDB.",
    liveLink: "https://blog-api-wkre.onrender.com/",
    codeLink: "https://github.com/Abiodun001-world/blog_api",
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="live-link"
              >
                <FaExternalLinkAlt /> Live App
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="code-link"
              >
                <FaGithub /> Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
