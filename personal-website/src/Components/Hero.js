import React from 'react';
import '../Styles/Hero.css';
import nollie from '../images/nollie.png';
import htmlIcon from '../images/html.png';
import cssIcon from '../images/css.png';
import jsIcon from '../images/js.png';
import pythonIcon from '../images/python.png';
import javaIcon from '../images/java.png';
import tableauIcon from '../images/tableau.png';
import splunkIcon from '../images/Splunk_logo.png';

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
                    Passionate about the intersection of finance, technology, and data
                    analytics, I am currently pursuing a Master's degree in Computer
                    Science at the University of Pennsylvania.
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
                </div>
            </div>
        </section>
    );
};

export default Hero;