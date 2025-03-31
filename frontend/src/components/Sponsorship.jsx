import "bootstrap/dist/css/bootstrap.min.css";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import sagar from "../assets/sagar.png";
import SponsorPic from "../assets/SPONSORSHIP.jpeg";

const sponsoredMembers = [
  {
    name: "Sagar Wadhwa",
    event: "KubeCon India 2025",
    description:
      "Received full sponsorship for attending KubeCon India 2025 to explore Kubernetes advancements.",
    img: sagar,
    linkedin: "https://www.linkedin.com/in/sagar1303/",
    twitter: "https://twitter.com/",
    github: "https://x.com/sagarw1303",
  },
];

const Sponsorship = () => {
  return (
    <div className="container my-5 p-4 bg-white rounded shadow">
      <h2 className="fw-bold text-center mb-4">Sponsored Members</h2>
      <p className="text-center">
        Here are some community members who received sponsorship for various
        events.
      </p>

      <div className="row align-items-center">
        {/* Left Section - Sponsored Members */}
        <div className="col-md-8">
          <div  className="row">
            {sponsoredMembers.map((member, index) => (
              <div key={index}  className="col-md-6 mb-4 ">
                <div className="card shadow-sm text-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="card-img-top rounded-circle p-3"
                    style={{ width: "120px", height: "120px", margin: "auto" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="fw-bold text-primary">{member.event}</p>
                    <p className="card-text">{member.description}</p>
                    <div className="d-flex justify-content-center gap-3">
                      <a href={member.linkedin} target="_blank">
                        <FaLinkedin size={28} color="#0077b5" />
                      </a>
                      <a href={member.twitter} target="_blank">
                        <FaTwitter size={28} color="#1DA1F2" />
                      </a>
                      <a href={member.github} target="_blank">
                        <FaGithub size={28} color="#333" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Apply for Sponsorship Section - UPPER */}
          <div className="text-center mt-4">
            <h4>Want to apply for sponsorship?</h4>
            <p>
              Fill out our sponsorship application form and get a chance to be
              sponsored for tech events.
            </p>
            <a href="#" className="btn btn-primary">
              Apply Now
            </a>
          </div>
        </div>

        {/* Right Section - SponsorPic Image */}
        <div className="col-md-4 text-center"  >
          <img
            src={SponsorPic}
            className="rounded shadow"
            style={{ width: "400px", height: "450px" }}
            alt="Sponsorship"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
