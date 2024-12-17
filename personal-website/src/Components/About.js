import '../Styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-contents">
        {/* About Info Section */}
        <div className="about-info">
          <h2 className='section-heading'>About Me</h2>
          <p>
            Hello! I'm Hui-Yu (Nollie) Chen, a full-stack developer with a passion for creating meaningful work.<br></br> Currently, I am pursuing
            a Master's degree in Computer Science at the University of Pennsylvania.
          </p>
          {/* Personal Information */}
          <div className="about-personal-info">
            <div>
              <span>Birthday:</span>
              <span>April 13</span>
            </div>
            <div>
              <span>Email:</span>
              <span>nolliechy@gmail.com</span>
            </div>
            <div>
              <span>Location:</span>
              <span>Philadelphia, PA</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="social-media">
            <a href="https://www.linkedin.com/in/hui-yu-chen-tw/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/nolliechyTW" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://medium.com/@nolliechy" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-medium"></i>
            </a>
          </div>
        </div>

        {/* Experience Section */}
        <div className="about-experience">
          <div className="experience-box">
            <div className="icon">
              <i className="fa fa-code"></i>
            </div>
            <div className="experience-desc">
              <h2>Technical Proficiency and Full-Stack Development</h2>
              <p>Implemented full-stack CI/CD solutions using serverless AWS technologies, demonstrating hands-on backend and infrastructure-as-code expertise.</p>
            </div>
          </div>
          <div className="experience-box">
            <div className="icon">
              <i className="fa fa-gear"></i>
            </div>
            <div className="experience-desc">
              <h2>Problem-Solving and System Design</h2>
              <p>Delivered a scalable subscription management system at AWS. Refactored full-stack components at WRDS, improving functionality, performance, and user experience.</p>
            </div>
          </div>
          <div className="experience-box">
            <div className="icon">
              <i className="fa fa-database"></i>
            </div>
            <div className="experience-desc">
              <h2>Data Management and Analysis</h2>
              <p>Achieved 60% time savings through automated data cleaning, modeling, and dashboarding. Built robust OLAP architectures for efficient data-driven decision-making. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;