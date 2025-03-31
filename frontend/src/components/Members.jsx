import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import member1 from "../assets/member1.png"; // Replace with actual images

// Founder Data
const founder = {
  name: "AKSHAY KUMAR ",
  role: "Founder & Admin",
  job : " DEVOPS ENGINEER @ NIC",
  img: member1,
  linkedin: "https://www.linkedin.com/in/akshayktwt",
  twitter: "https://x.com/akshayktwt",
  github: "https://github.com/akshaykumar05",
};

// Managers Data
const managers = [
  {
    name: "SAUMYA",
    role: " Manager",
    job : "CLOUD ARCHITECT @ GOOGLE",
    img: member1,
    linkedin: " https://www.linkedin.com/in/saumyabhushan-076572166",
    twitter: "https://x.com/saumya_bhushan",
    github: "https://github.com/SaumyaBhushaSaumyaBhushan",
  },
  {
    name: "Md IMRAN",
    role: " Manager",
    job : "DEVOPS ENGINEER",
    img: member1,
    linkedin: " https://www.linkedin.com/in/mohdimran1995",
    twitter: " https://x.com/codenameimmy",
    github: "https://github.com/imran1509",
  },
];

const Members = () => {
  return (
    <div className="container my-5 p-4 main-container">
      <h2 className="fw-bold text-center mb-4">Meet Our Team</h2>

      {/* Founder Section */}
      <div className="text-center mb-3">
        <h3 className="fw-bold">Founder</h3>
        <div className="member-card mx-auto">
          <img src={founder.img} alt={founder.name} className="member-img" />
          <h5 className="mt-3">{founder.name}</h5>
          <p className="text-muted">{founder.role}</p>
          <p className="text-muted">{founder.job}</p>
          <div className="social-icons">
            <a href={founder.linkedin} target="_blank"><FaLinkedin /></a>
            <a href={founder.twitter} target="_blank"><FaTwitter /></a>
            <a href={founder.github} target="_blank"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Managers Section */}
      <h3 className="fw-bold text-center mb-3">Managers</h3>
      <div className="row justify-content-center">
        {managers.map((manager, index) => (
          <div key={index} className="col-md-4">
            <div className="member-card text-center">
              <img src={manager.img} alt={manager.name} className="member-img" />
              <h5 className="mt-3">{manager.name}</h5>
              <p className="text-muted">{manager.role}</p>
              <p className="text-muted">{manager.job}</p>
              <div className="social-icons">
                <a href={manager.linkedin} target="_blank"><FaLinkedin /></a>
                <a href={manager.twitter} target="_blank"><FaTwitter /></a>
                <a href={manager.github} target="_blank"><FaGithub /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
