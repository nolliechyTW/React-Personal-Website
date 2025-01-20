import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/hui-yu-chen-tw/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/nolliechyTW"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:nolliechy@gmail.com" className="footer-social-link">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p className="footer-text">
          &copy; 2025 Hui-Yu (Nollie) Chen. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
