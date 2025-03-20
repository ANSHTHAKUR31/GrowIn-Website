import "bootstrap/dist/css/bootstrap.min.css";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const Meetups = () => {
  return (
    <div className="container my-5 p-4 bg-white rounded shadow">
      <h2 className="fw-bold text-center mb-4">Meetups & Events</h2>

      {/* ✅ Upcoming Events Section */}
      <h3 className="text-primary">🚀 Upcoming Events</h3>
      <div className="row">
        {/* Event 1 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <img src="https://via.placeholder.com/300x200" alt="Event 1" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">React Developers Meetup</h5>
              <p className="card-text">Meet React.js enthusiasts to discuss trends, projects, and best practices.</p>
              <div className="d-flex align-items-center gap-2">
                <FaCalendarAlt color="red" /> <span>April 15, 2025</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaMapMarkerAlt color="blue" /> <span>Delhi, India</span>
              </div>
              <a href="#" className="btn btn-success mt-3">RSVP Now</a>
            </div>
          </div>
        </div>

        {/* Event 2 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <img src="https://via.placeholder.com/300x200" alt="Event 2" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Web3 Bootcamp</h5>
              <p className="card-text">Workshop on blockchain and Web3 development.</p>
              <div className="d-flex align-items-center gap-2">
                <FaCalendarAlt color="red" /> <span>May 10, 2025</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaMapMarkerAlt color="blue" /> <span>Bangalore, India</span>
              </div>
              <a href="#" className="btn btn-success mt-3">RSVP Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Past Events Section */}
      <h3 className="text-secondary mt-5">🎉 Past Events</h3>
      <div className="row">
        {/* Event 3 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <img src="https://via.placeholder.com/300x200" alt="Event 3" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Hackathon 2024</h5>
              <p className="card-text">A 48-hour hackathon where developers built innovative projects.</p>
              <div className="d-flex align-items-center gap-2">
                <FaCalendarAlt color="gray" /> <span>December 5, 2024</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaMapMarkerAlt color="gray" /> <span>Pune, India</span>
              </div>
              <a href="#" className="btn btn-outline-secondary mt-3">View Highlights</a>
            </div>
          </div>
        </div>

        {/* Event 4 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <img src="https://via.placeholder.com/300x200" alt="Event 4" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">AI & ML Conference 2024</h5>
              <p className="card-text">A deep dive into Artificial Intelligence and Machine Learning.</p>
              <div className="d-flex align-items-center gap-2">
                <FaCalendarAlt color="gray" /> <span>October 20, 2024</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaMapMarkerAlt color="gray" /> <span>Hyderabad, India</span>
              </div>
              <a href="#" className="btn btn-outline-secondary mt-3">View Highlights</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Meetups;