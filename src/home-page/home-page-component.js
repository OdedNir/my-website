import React from "react";

import "./home-page-component.scss";
// Components:
import HeaderComponent from "../header/header-component";
import MenuComponent from "../menu/menu-component";
import AboutComponent from "../about/about-component";
import ProjectsComponent from "../projects/projects-component";
import ContactComponent from "../contact/contact-component";

export default () => {
  return (
    <div className="home-page-component">
      <div className="menu-component-wrapper">
        <MenuComponent />
      </div>

      <div className="header-component-wrapper">
        <HeaderComponent />
      </div>

      <div id="about-component-wrapper">
        <AboutComponent />
      </div>

      <div id="projects-component-wrapper">
        <ProjectsComponent />
      </div>

      <div id="contact-component-wrapper">
        <ContactComponent />
      </div>
    </div>
  );
};
