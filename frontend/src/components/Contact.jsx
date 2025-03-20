import "bootstrap/dist/css/bootstrap.min.css";
import { FaDiscord, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container my-5 p-5 bg-light rounded shadow-lg">
      <h2 className="fw-bold text-center mb-4 text-primary">Get in Touch with Us</h2>
      <p className="text-center text-muted">Have questions? Want to collaborate? Reach out to us now!</p>

      <div className="row mt-4">
        <div className="col-md-6 mx-auto">
          <form className="p-4 bg-white rounded shadow">
            <div className="mb-3">
              <label className="form-label fw-bold">Your Name</label>
              <input type="text" className="form-control rounded-pill" placeholder="Enter your name" required />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Email Address</label>
              <input type="email" className="form-control rounded-pill" placeholder="Enter your email" required />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Message</label>
              <textarea className="form-control rounded-3" rows="4" placeholder="Write your message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100 fw-bold shadow-sm rounded-pill">Send Message</button>
          </form>
        </div>
      </div>

      {/* 🔹 Other Contact Details */}
      <div className="text-center mt-5">
        <p className="fw-bold fs-5">📧 Email: <a href="mailto:contact@growin.com" className="text-decoration-none text-primary">contact@growin.com</a></p>
        <p className="fw-bold fs-5">📍 Location: <span className="text-muted">New Delhi, India</span></p>

        {/* 🔹 Social Media Links */}
        <div className="d-flex justify-content-center gap-4 mt-4">
          <a href="https://discord.com/invite/example" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaDiscord size={45} color="#5865F2" />
          </a>
          <a href="https://www.youtube.com/channel/example" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaYoutube size={45} color="#FF0000" />
          </a>
          <a href="https://www.linkedin.com/in/example" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={45} color="#0077b5" />
          </a>
          <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={45} color="#333" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;