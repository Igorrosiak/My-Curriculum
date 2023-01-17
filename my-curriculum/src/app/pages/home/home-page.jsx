import React from "react";
import { HeaderComponent } from "../../components/header/header-component";
import "./home-page.scss";

export default class HomePage extends React.Component {

  render() {
    return (
      <div className="home-page">
        <HeaderComponent />

        <section className="introduction">
          <div className="left-introduction">

          </div>
          <div className="center-introduction">

          </div>
          <div className="right-introduction">

          </div>
        </section>

        <section className="skills">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </section>

        <section className="works">
          <div></div>
          <div></div>
        </section>

        <section className="about-me">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </section>

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