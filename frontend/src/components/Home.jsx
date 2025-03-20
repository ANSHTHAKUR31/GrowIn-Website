import About from "./About";
import Members from "./Members";
import Events from "./Events";
import Sponsorship from "./Sponsorship";
import Meetups from "./Meetups";
import Contact from "./Contact";
import banner from "../assets/banner-coverphoto.png";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div id="home"  className=" hero-section container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={banner} // Fixed image path
            className="d-block mx-lg-auto img-fluid"
            alt="GrowIn Community"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Learn, Build and Grow together
          </h1>
          <p className="lead">
            Vibrant and inclusive community dedicated to fostering learning,
            collaboration, and personal growth.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </div>

            


      {/* Other Sections */}
      <section id="about"><About /></section>
      <section id="members"><Members /></section>
      <section id="events"><Events /></section>
      <section id="sponsorship"><Sponsorship /></section>
      <section id="meetups"><Meetups /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default Home;
