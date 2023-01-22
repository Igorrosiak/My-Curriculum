import React from "react";
import * as S from "./home-styles";
import { HeaderComponent } from "../../components/header/header-component";
import { IntroductionComponent } from "../../components/introduction/introduction-component";
import { SkillsComponent } from "../../components/skills/skills-component"
import { WorksComponent } from "../../components/works/works-component"
import { AboutMeComponent } from "../../components/about-me/about-me-component";
import { CertificatesComponent } from "../../components/certificates/certificates-component";
import { FooterComponent } from "../../components/footer/footer-component";

export default class HomePage extends React.Component {

  render() {
    return (
      <S.Home>
        <HeaderComponent />
        <IntroductionComponent />
        <SkillsComponent />
        <WorksComponent />
        <AboutMeComponent />
        <CertificatesComponent />
        <FooterComponent />
      </S.Home>
    );
  }
}