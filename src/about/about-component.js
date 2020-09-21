import React from "react";

import "./about-component.scss";
import profilePicture from "./profile-picture.jpg";

const AboutComponent = () => {
  return (
    <div className="about-component">
      <div className="header">About Me</div>
      <div className="p-image-container">
        <div className="about-text">
          I'm a third year student at the Afeka College of Engineering starting
          my specialization in Artificial Intelligence.
          <br />
          I enjoy building websites using React.js, SCSS and HTML.
          <br />
          I'm Highly motivated and passionate to master new technologies.
        </div>
        <img
          className="profile-img"
          src={profilePicture}
          alt="profile-picture"
        />
      </div>
    </div>
  );
};

export default AboutComponent;
