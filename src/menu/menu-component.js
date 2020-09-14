import React from "react";

import "./menu-component.scss";

// const scrollToRef = (ref) => {
//   window.scrollTo(0, ref.current.offsetTop);
// };

export default (props) => {
  // const { aboutRef, projectsRef, contactRef } = props.refs;
  return (
    <div className="menu-component">
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
