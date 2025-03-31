// import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import logo from "../assets/growin.png";
import React from "react";

const Navbar = () => {

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        console.log("scrolled", window.scrollY);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={`bg-gray-100 py-4 transition-all duration-300 sticky top-0 z-50 ${isScrolled ? "shadow-lg bg-white" : "shadow-none"}`}>
      <div className="container d-flex justify-content-between align-items-center">
        <a href="/">
          <img src={logo} alt="Growin" width="80" height="80" className="rounded-full" />
        </a>
        {/* <button
          className=""
          type="button"
          // data-bs-toggle="collapse"
          // data-bs-target="#navbarNav"
          // aria-controls="navbarNav"
          // aria-expanded="false"
          // aria-label="Toggle navigation"
        >
          // {/* <span className="navbar-toggler-icon"></span>
        </button> */}

        <div id="navbarNav">
          <ul className="navbar-nav d-flex flex-row justify-content-center align-items-center">
            {[{title: "Home"}, {title:"About"}, {title:"Events"}, {title: "Meetups"}, {title: "Members",path: "/members"}, {title: "Sponsorship"}, {title: "Contact"}].map(
              (item, index) => (
                <li className="mx-4" key={index}>
                  <button
                    className="text-black font-medium text-base hover:scale-110 transition duration-200 ease-in-out"
                    onClick={() => {
                      if(item.path){
                        window.location.href = item.path
                      }else{
                        scrollToSection(item.title.toLowerCase())
                      }
                    }}
                  >
                    {item.title}
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
