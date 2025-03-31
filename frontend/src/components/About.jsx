import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import hero from "../assets/Banner-coverphoto.png";
import offlinemeetup from "../assets/offline-meetup2.png";
import stickers from "../assets/stickers.png";
import cards from "../assets/cards.png";

const About = () => {
  return (
    <div className="container my-5 p-4 bg-white rounded shadow">
      <div className="row align-items-center">
        
        <div className="col-md-6 d-flex justify-content-center">
          <Carousel>
            <Carousel.Item>
              <img src={hero} alt="Event" className="img-fluid rounded" style={{ maxWidth: "300px" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={offlinemeetup} alt="GrowIn" className="img-fluid rounded" style={{ maxWidth: "300px" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={stickers} alt="Stickers" className="img-fluid rounded" style={{ maxWidth: "300px" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={cards} alt="Cards" className="img-fluid rounded" style={{ maxWidth: "300px" }} />
            </Carousel.Item>
          </Carousel>
        </div>
        
        <div className="col-md-6">
          <h2 className="fw-bold">About GrowInCommunity </h2>
          <p>
            Vibrant and inclusive community dedicated to fostering learning, collaboration, and personal growth.<br />
            Our mission is to create a supportive environment where individuals can come together to learn, build, and grow together.
          </p>
          <p>
            We also provide one-to-one guidance sessions if you need knowledge from scratch as a beginner.<br />
            Regular sessions in the form of Google Meet, Twitter Spaces, Discord sessions, and group engagements to maintain consistency and follow-ups for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
