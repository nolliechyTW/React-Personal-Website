import React from "react";
import "../Styles/Hero.css";
import nollie from "../images/nollie.png";
import htmlIcon from "../images/html.png";
import cssIcon from "../images/css.png";
import jsIcon from "../images/js.png";
import pythonIcon from "../images/python.png";
import javaIcon from "../images/java.png";
import tableauIcon from "../images/tableau.png";
import splunkIcon from "../images/Splunk_logo.png";
import reactIcon from "../images/react.png";
import gitIcon from "../images/git.png";
import SQLIcon from "../images/sql.png";
import CIcon from "../images/C_Logo.png";
import awsIcon from "../images/aws.png";
import nodejsIcon from "../images/nodejs.png";
import expressIcon from "../images/expressjs.png";
import typeScriptIcon from "../images/ts.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Hero Text Section */}
      <div className="hero-text">
        <h3>My name is</h3>
        <h1>Hui-Yu (Nollie) Chen</h1>
        <div className="type-container">
          <div className="type-text text1">I'm a</div>
          <div className="type-text text2">Web Developer</div>
        </div>
        <p>
          As a passionate developer, I specialize in full-stack software
          development and data analytics, with a keen interest in leveraging my
          skills in impactful projects.
        </p>
        <a
          href="https://drive.google.com/file/d/1iucr25ekyjK32tLgocAIHzx5YognJX56/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn download-btn">Download CV</button>
        </a>
      </div>

      {/* Hero Image Section */}
      <div className="hero-img">
        <img src={nollie} alt="Nollie Chen" />
        <div className="images-box">
          <div className="child-img-box">
            <img src={htmlIcon} alt="HTML" />
          </div>
          <div className="child-img-box">
            <img src={cssIcon} alt="CSS" />
          </div>
          <div className="child-img-box">
            <img src={jsIcon} alt="JavaScript" />
          </div>
          <div className="child-img-box">
            <img src={reactIcon} alt="React" />
          </div>
          <div className="child-img-box">
            <img src={nodejsIcon} alt="Nodejs" />
          </div>
          <div className="child-img-box">
            <img src={expressIcon} alt="Express" />
          </div>
          <div className="child-img-box">
            <img src={CIcon} alt="C" />
          </div>
          <div className="child-img-box">
            <img src={awsIcon} alt="AWS" />
          </div>
          <div className="child-img-box">
            <img src={gitIcon} alt="Git" />
          </div>
          <div className="child-img-box">
            <img src={SQLIcon} alt="sql/nosql" />
          </div>
          <div className="child-img-box">
            <img src={pythonIcon} alt="Python" />
          </div>
          <div className="child-img-box">
            <img src={javaIcon} alt="Java" />
          </div>
          <div className="child-img-box">
            <img src={tableauIcon} alt="Tableau" />
          </div>
          <div className="child-img-box">
            <img src={splunkIcon} alt="Splunk" />
          </div>
          <div className="child-img-box">
            <img src={typeScriptIcon} alt="TypeScript" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
