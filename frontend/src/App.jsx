import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Members from "./components/Members";

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
    <Router>
    <Routes>
     <Route path={'/'} element={<div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Home />
      <FAQ />
      <Footer />
    </div>}/>
    <Route path="/members" element={<Members/>}/>
    </Routes>
    </Router>
  );
}

export default App;
