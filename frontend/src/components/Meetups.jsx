import "bootstrap/dist/css/bootstrap.min.css";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { Carousel } from "react-bootstrap";

import event1 from "../assets/offline-meetup2.png";
import event2 from "../assets/offline-meetup1.png";
import event3 from "../assets/offline-meetup3.png";

const Meetups = () => {
  return (
    <div className="container my-5 p-4 bg-white rounded shadow">
      <h2 className="fw-bold text-center mb-4">Offline Meetups</h2>

      {/* ✅ Past Events Section */}
      <h3 className="text-primary">🎉 Past Events</h3>
      <div className="row align-items-center">
        {/* 🎟 Event Card */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">GrowInCommXTheCloudOps </h5>
              <p className="card-text"> A knowledge-packed meetup where developers explored DevOps practices, CI/CD, automation, and scalable infrastructure.
              </p>
              <div className="d-flex align-items-center gap-2">
                <FaCalendarAlt color="red" /> <span>January 13, 2024</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaMapMarkerAlt color="blue" /> <span>Pune, India</span>
              </div>
              <a href="#" className="btn btn-success mt-3">View Highlights</a>
            </div>
          </div>
        </div>

        {/* 🎥 Carousel for Event Images (Right Side) */}
        <div className="col-md-6 mb-4">
          <Carousel className="h-100">
            <Carousel.Item>
              <img src={event1} className="d-block w-100 rounded" style={{ height: "100%", objectFit: "cover" }} alt="Hackathon 2024 - 1" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={event2} className="d-block w-100 rounded" style={{ height: "100%", objectFit: "cover" }} alt="Hackathon 2024 - 2" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={event3} className="d-block w-100 rounded" style={{ height: "100%", objectFit: "cover" }} alt="Hackathon 2024 - 3" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* ✅ Upcoming Events Section */}
      <h3 className="text-primary">🚀 Upcoming Events</h3>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Web Developers Meetup</h5>
              <p className="card-text">Meet web developers enthusiasts to discuss trends, projects, and best practices.</p>
              <div className="d-flex align-items-center gap-2">
                <FaCalendarAlt color="red" /> <span>June, 2025</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaMapMarkerAlt color="blue" /> <span>Delhi, India</span>
              </div>
              <a href="#" className="btn btn-success mt-3"> RSVP </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meetups;
