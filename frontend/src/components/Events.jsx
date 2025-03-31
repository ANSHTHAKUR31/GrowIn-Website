// import "bootstrap/dist/css/bootstrap.min.css";
import events from "../assets/events.png"; // ✅ Single import
import { Button } from "@/components/ui/button"

const Events = () => {
  return (
    <div className="container my-5 p-4 bg-white rounded shadow">
      <h2 className="fw-bold text-center mb-4">Our Events</h2>
      <div className="row">
        {/* Event 1 */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={events} alt="Event 1" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Tech Meetup 2025</h5>
              <p className="card-text">An interactive session where tech enthusiasts shared knowledge and networked.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
              <Button>Click ME</Button>
            </div>
          </div>
        </div>

        {/* Event 2 */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={events} alt="Event 2" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Hackathon 2025</h5>
              <p className="card-text">A 48-hour hackathon where developers built innovative projects.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>

        {/* Event 3 */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={events} alt="Event 3" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Web3 Bootcamp</h5>
              <p className="card-text">A beginner-friendly workshop on blockchain and web3 development.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;