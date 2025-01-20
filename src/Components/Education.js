import "../Styles/Education.css";
import upennLogo from "../images/penn.jpg";
import ntpuLogo from "../images/ntpu.jpeg";

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="section-heading">
        <h1>Education</h1>
        <p>Pursuing knowledge and skills to drive impactful contributions.</p>
      </div>
      <div className="education-contents">
        <div className="education-box">
          <img src={upennLogo} alt="University of Pennsylvania Logo" />
          <div className="education-details">
            <h2>University of Pennsylvania</h2>
            <p>
              <strong>M.S. in Computer and Information Technology</strong>
            </p>
            <p>August 2023 - May 2025 | Philadelphia, PA</p>
            <p>
              Relevant Coursework: Software Development, Data Structures,
              Database Systems, Web Development, Machine Learning...
            </p>
          </div>
        </div>
        <div className="education-box">
          <img src={ntpuLogo} alt="Taipei University" />
          <div className="education-details">
            <h2>National Taipei University</h2>
            <p>
              <strong>Dual Major in Finance and Business Administration</strong>
            </p>
            <p>August 2016 - May 2021 | Taipei, Taiwan</p>
            <p>Honor Graduate; 5 Academic Excellence Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
