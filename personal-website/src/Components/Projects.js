import "../Styles/Projects.css";

const projects = [
  {
    title: "JourneyMate: Database Full-Stack Application",
    techStack: "JavaScript / React.js / Python / MySQL / AWS (RDS, EC2)",
    date: "05/2024",
    description:
      "Engineered dynamic travel suggestions using 500k+ data points from Yelp and Airbnb API.",
    repoUrl: "https://youtu.be/u5APKO397Gw?si=poN4eXxHEYVEtA_q",
  },
  {
    title: "Instagram Full-Stack Clone",
    techStack:
      "JavaScript / React.js / Express.js / MongoDB / RESTfulAPI / Testing",
    date: "10/2023",
    description:
      "Implemented full-stack features like user profiles, media uploads, and real-time feeds.",
    repoUrl: "https://github.com/nolliechyTW",
  },
  {
    title: "Amazon Full-Stack Clone",
    techStack: "React.js / Express.js / Firebase / Stripe API",
    description:
      "Developed a full-stack Amazon clone with payment integration and real-time database.",
    repoUrl: "https://github.com/nolliechyTW/React-Amazon-Clone",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="section-heading">
        <h1>Projects</h1>
        <p>Exploring x Experimenting x Executing</p>
      </div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => window.open(project.repoUrl, "_blank")}
          >
            <div className="project-details">
              <h2>{project.title}</h2>
              <p className="tech-stack">{project.techStack}</p>
              <p className="description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="view-all-container">
        <a
          href="https://github.com/nolliechyTW"
          target="_blank"
          rel="noopener noreferrer"
          className="btn view-all-btn"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;