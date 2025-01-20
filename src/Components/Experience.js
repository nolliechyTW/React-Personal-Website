import React from "react";
import "../Styles/Experience.css";
import awsLogo from "../images/awslogo.png";
import wrdsLogo from "../images/wrds.png";
import ibfLogo from "../images/ibfs.png";
import jnjLogo from "../images/jnj.png";

const experiences = [
  {
    logo: awsLogo,
    company: "Amazon AWS",
    duration: "06/2024 – 08/2024",
    role: "Software Development Engineer Intern",
    details: [
      "Implemented a full-stack CI/CD solution using serverless technologies (Lambda, EventBridge, DynamoDB), supporting 80k builders to monitor risks and minimize downtime.",
    ],
  },
  {
    logo: wrdsLogo,
    company: "The Wharton School - WRDS",
    duration: "11/2023 – Present",
    role: "Associate Software Engineer",
    details: [
      "Leading the design and deployment of a serverless public cloud architecture for WRDS, replacing the costly VM-based NGINX setup with a more efficient solution, reducing monthly operational expenses by over 90%.",
    ],
  },
  {
    logo: ibfLogo,
    company: "IBF Securities",
    duration: "01/2021 – 05/2023",
    role: "Data Analyst",
    details: [
      "Achieved 60% time savings with Python, TSQL, and Tableau for data cleaning and modeling; created 30+ dashboards to enhance marketing and default prevention.",
    ],
  },
  {
    logo: jnjLogo,
    company: "Johnson & Johnson",
    role: "Business Analyst Intern",
    details: [
      "Developed the Offtake Summary worksheet to automatically organize sales data from different sources, improving productivity by enabling colleagues to access daily performance of all channels in Excel.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="section-heading">
        <h1>Experience</h1>
        <p>As a passionate developer, I specialize in full-stack software development and data analytics, with a keen interest in leveraging my skills in impactful projects.</p>
      </div>
      <div className="experience-contents">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="card-inner">
              {/* Front Side */}
              <div className="card-front">
                <img src={exp.logo} alt={`${exp.company} Logo`} />
              </div>
              {/* Back Side */}
              <div className="card-back">
                <h2>{exp.company}</h2>
                <h3>{exp.role}</h3>
                <p className="duration">{exp.duration}</p>
                <p className="details">{exp.details[0]}</p>
                <a href="#home" className="btn more-btn">
                  More Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
