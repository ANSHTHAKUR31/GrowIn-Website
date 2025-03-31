import "bootstrap/dist/css/bootstrap.min.css";
import events from "../assets/events.png"; // ✅ Single import
import AI from "../assets/AI.png"; 
import Linux from "../assets/LINUX.png"; 
const Events = () => {
  return (
    <div className="container my-5 p-4 bg-white rounded shadow">
      <h2 className="fw-bold text-center mb-4">Our Weekly Discord Events</h2>
      <div className="row">
        {/* Event 1 */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={events} alt="Event 1" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Devops HandsOn</h5>
              <p className="card-text">
              It was an interactive and insightful event where participants learned real-world DevOps implementations and best practices 🚀.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Event 2 */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={AI} alt="Event 2" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title"> ABOUT AI</h5>
              <p className="card-text">
              It was an engaging and insightful event where participants learned real-world AI implementations and best practices🚀.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Event 3 */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={Linux} alt="Event 3" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Linux Commands</h5>
              <p className="card-text">
                A beginner-friendly workshop on Linux where participants learned Linux And Terminal implementations and its best practices🚀.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <p className="card-text">
          
          Don't miss out on our weekly Discord call where we discuss tech
          trends, project updates, and upcoming events. <br />
          It's a great chance to
          learn, share, and network with fellow developers! <br /> 🗓 When? Every
          Weekend 📍 Where? GrowIn Community Discord Server.
        </p>
      </div>
    </div>
  );
};

export default Events;
