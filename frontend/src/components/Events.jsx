// import "bootstrap/dist/css/bootstrap.min.css";
import event from "../assets/events.png"; // ✅ Single import
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tech Meetup 2025",
      description:
        "An interactive session where tech enthusiasts shared knowledge and networked.",
    },
    {
      id: 2,
      title: "Hackathon 2025",
      description:
        "A 48-hour hackathon where developers built innovative projects.",
    },
    {
      id: 3,
      title: "Web3 Bootcamp",
      description:
        "A beginner-friendly workshop on blockchain and web3 development.",
    },
    {
      id: 4,
      title: "AI Summit 2025",
      description:
        "A summit for AI experts to discuss the latest trends in the industry.",
    },
    {
      id: 5,
      title: "Cloud Computing Workshop",
      description:
        "A workshop to learn about cloud technologies and platforms.",
    },
    {
      id: 6,
      title: "Digital Marketing Bootcamp",
      description:
        "A bootcamp for aspiring digital marketers to learn new strategies.",
    },
  ]);

  // Create a function to chunk the array into groups of 3
  const chunkedEvents = (events, chunkSize) => {
    const result = [];
    for (let i = 0; i < events.length; i += chunkSize) {
      result.push(events.slice(i, i + chunkSize));
    }
    return result;
  };

  return (
    <div className="container my-5 p-4 bg-white rounded shadow">
      <h2 className="fw-bold text-center mb-4">Our Events</h2>
      <div className="d-flex justify-content-center align-items-center">
        {/* Event Carousel */}
        <Carousel>
          <CarouselContent>
            {chunkedEvents(events, 3).map((chunk, index) => (
              <CarouselItem key={index}>
                <div className="row justify-content-center">
                  {chunk.map((e) => (
                    <div className="col-md-4 mb-4" key={e.id}>
                      <div className="card shadow-sm">
                        <img
                          src={event}
                          alt={e.title}
                          className="card-img-top"
                          style={{ objectFit: "cover", height: "200px" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{e.title}</h5>
                          <p className="card-text">{e.description}</p>
                          <a href="#" className="btn btn-primary">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Events;
