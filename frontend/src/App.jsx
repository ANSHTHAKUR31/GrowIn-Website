import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";


function App() {
  useEffect(() => {
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        document.getElementById("main-content").classList.remove("hidden");
      });
    });
  }, []);
  return (
    <div style={{backgroundColor:" #FFFFFF"}} >
      <Navbar />
      <Home />
      <FAQ />
      <br />
      <Footer />
    </div>
  );
}

export default App;
