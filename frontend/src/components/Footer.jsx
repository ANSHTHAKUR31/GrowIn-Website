import { FaYoutube, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import growin from "../assets/growin.png"; 

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/*  Logo Section */}
        <div style={styles.logoSection}>
          <img src={growin} alt="GrowIn Logo" style={styles.logo} />
          <p style={styles.text}>Learn | Build | Grow</p>
        </div>

        {/*  Social Media Links */}
        <div style={styles.socialIcons}>
          <a href="https://www.youtube.com/@GrowInCommunityoutube" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaYoutube size={30} color="#FF0000" />
          </a>
          <a href="https://github.com/GrowInCommunity" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaGithub size={30} color="#FFFFFF" />
          </a>
          <a href="https://www.linkedin.com/company/growincommunity/posts/?feedView=all" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaLinkedin size={30} color="#0077b5" />
          </a>
          <a href="https://x.com/GrowInComm?s=20&t=zbeD3HxEy7I1GWr7vZ0o_g" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaTwitter size={30} color="#1DA1F2" />
          </a>
        </div>

        {/*  Copyright */}
        <p style={styles.copyright}>© 2025 GrowIn Community. All rights reserved.</p>
      </div>
    </footer>
  );
};

//  CSS-in-JS Styles (Styled Components)
const styles = {
  footer: {
    background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
    padding: "30px 0",
    textAlign: "center",
    color: "#ffffff",
    boxShadow: "0px -4px 10px rgba(0, 255, 204, 0.2)",
  },
  container: {
    maxWidth: "900px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logoSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "15px",
  },
  logo: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    boxShadow: "0px 4px 10px rgba(0, 255, 204, 0.5)",
  },
  text: {
    marginTop: "10px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#00ffcc",
    textShadow: "0 0 10px #00ffcc",
  },
  socialIcons: {
    display: "flex",
    gap: "20px",
    marginTop: "10px",
  },
  icon: {
    transition: "transform 0.3s ease-in-out",
  },
  copyright: {
    marginTop: "15px",
    fontSize: "0.9rem",
    color: "#cccccc",
  },
};

export default Footer;
