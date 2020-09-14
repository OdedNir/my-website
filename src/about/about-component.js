import React from "react";

import "./about-component.scss";
import profilePicture from "./profile-picture.jpg";

const AboutComponent = () => {
  return (
    <div className="about-component">
      <div className="header">About Me</div>
      <div className="p-image-container">
        <div className="about-text">
          I'm a second year student at the Afeka College of Engineering. Highly
          motivated, a quick learner and passionate to master new technologies.
          Successful working in both team and self-directed settings,
          self-driven.
        </div>
        <img
          className="profile-img"
          src={profilePicture}
          alt="profile-picture"
          width="256"
          height="316"
        />
      </div>
    </div>
  );
};

export default AboutComponent;
