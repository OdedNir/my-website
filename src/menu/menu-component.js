import React from "react";

import "./menu-component.scss";

export default () => {
  return (
    <div className="menu-component">
      <a href=".">
        <svg
          className="logo"
          width="314"
          height="189"
          viewBox="0 0 314 189"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M106.63 143.1C106.63 158.4 102.4 169.92 93.94 177.66C85.66 185.22 73.69 189 58.03 189H48.85C33.19 189 21.13 185.22 12.67 177.66C4.39 169.92 0.25 158.4 0.25 143.1V45.9C0.25 30.6 4.39 19.17 12.67 11.61C21.13 3.87 33.19 0 48.85 0H58.03C73.69 0 85.66 3.87 93.94 11.61C102.4 19.17 106.63 30.6 106.63 45.9V143.1ZM83.14 40.77C83.14 35.19 81.07 30.42 76.93 26.46C72.79 22.5 67.39 20.52 60.73 20.52H46.15C39.49 20.52 34.09 22.5 29.95 26.46C25.81 30.42 23.74 35.19 23.74 40.77V148.23C23.74 153.81 25.81 158.58 29.95 162.54C34.09 166.5 39.49 168.48 46.15 168.48H60.73C67.39 168.48 72.79 166.5 76.93 162.54C81.07 158.58 83.14 153.81 83.14 148.23V40.77Z"
            fill="white"
          />
          <path d="M144.415 189V162H171.415V189H144.415Z" fill="white" />
          <path
            d="M275.222 189L233.912 19.98V189H212.042V0H250.382L291.962 169.02V0H313.832V189H275.222Z"
            fill="white"
          />
        </svg>
      </a>

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
