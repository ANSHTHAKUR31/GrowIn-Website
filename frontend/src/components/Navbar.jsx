import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; 
import logo from "../assets/growin.png";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="Growin" width="80" height="80" className="rounded-circle" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["Home", "About","Members", "Events", "Sponsorship","Meetups",  "Contact"].map(
              (item, index) => (
                <li className="nav-item" key={index}>
                  <button
                    className="nav-link custom-nav-link"
                    onClick={() => scrollToSection(item.toLowerCase())}
                  >
                    {item}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
