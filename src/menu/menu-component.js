import React from "react";

import "./menu-component.scss";
import logo from "./profile.png";

export default () => {
  return (
    <div className="menu-component">
      <img
        className="logo"
        src={logo}
        alt="name-logo"
        onClick={() => (window.location.href = window.location.href)}
      />
      <div
        className="about-button"
        onClick={() => {
          document.getElementById("about-component-wrapper").scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }}
      >
        About
      </div>

      <div
        className="projects-button"
        onClick={() => {
          document
            .getElementById("projects-component-wrapper")
            .scrollIntoView({ behavior: "smooth", block: "center" });
        }}
      >
        Projects
      </div>

      <div
        className="contact-button"
        onClick={() => {
          document
            .getElementById("contact-component-wrapper")
            .scrollIntoView({ behavior: "smooth", block: "center" });
        }}
      >
        Contact
      </div>
    </div>
  );
};
