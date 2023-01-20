import React from "react";
import "./home-styles";
import { HeaderComponent } from "../../components/header/header-component";
import { IntroductionComponent } from "../../components/introduction/introduction-component";
import { SkillsComponent } from "../../components/skills/skills-component"
import { WorksComponent } from "../../components/works/works-component"
import { AboutMeComponent } from "../../components/about-me/about-me-component";

export default class HomePage extends React.Component {

  render() {
    return (
      <div className="home-page">
        <HeaderComponent />
        <IntroductionComponent />
        <SkillsComponent />
        <WorksComponent />
        <AboutMeComponent />

        <section className="certificates">

        </section>

        <footer>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </footer>
      </div>
    );
  }
}