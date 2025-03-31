import About from "./About";
import Members from "./Members";
import Events from "./Events";
import Sponsorship from "./Sponsorship";
import Meetups from "./Meetups";
import Contact from "./Contact";
import banner from "../assets/banner-coverphoto.png";
import React, { useEffect, useState } from "react";

const Home = () => {

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ["Learn", "Build", "Grow"];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 1000;

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => {
          setText((prev) => currentWord.substring(0, prev.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      // Deleting effect
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText((prev) => currentWord.substring(0, prev.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <div>
      <div id="home" className="flex justify-center items-center flex-col text-center">
          <div className="mb-4 font-bold text-7xl">
            {text}
          </div>
          <h1 className="font-bold text-5xl">Together</h1>
          <p className="lead text-muted mb-4">
            Vibrant and inclusive community dedicated to fostering learning,
            collaboration, and personal growth.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
              Join Community
            </button>
          </div>
      </div>

      {/* Other Sections */}
      <section id="about" className="my-14 scroll-m-[100px]"><About /></section>
      {/* <section id="members"><Members /></section> */}
      <section id="events"><Events /></section>
      <section id="sponsorship"><Sponsorship /></section>
      <section id="meetups"><Meetups /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default Home;
