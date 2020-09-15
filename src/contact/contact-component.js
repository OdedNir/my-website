import React from "react";

import "./contact-component.scss";
import githubIcon from "../media/github.svg";
import linkedinIcon from "../media/linkedin.svg";
import emailIcon from "../media/email.svg";
import resume from "../media/Oded Nir - Resume.pdf";

const contactComponent = () => {
  return (
    <div className="contact-component">
      <div className="header">Contact</div>

      <div className="contact-container">
        <div className="contact-item">
          <img className="icon" src={emailIcon} alt="mail-icon" />
          odednir@icloud.com
        </div>
        <div className="contact-item">
          <img className="icon" src={linkedinIcon} alt="linkedin-icon" />
          <a className="link" href="https://www.linkedin.com/in/oded-nir">
            https://www.linkedin.com/in/oded-nir
          </a>
        </div>
        <div className="contact-item">
          <img className="icon" src={githubIcon} alt="github-icon" />
          <a className="link" href="https://github.com/OdedNir">
            https://github.com/OdedNir
          </a>
        </div>
        <div className="resume-button">
          <a className="link" href={resume} download>
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default contactComponent;
