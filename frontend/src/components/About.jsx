import React, { useEffect, useState } from "react";
import events from "../assets/events.png";
import growin from "../assets/growin.png";
import stickers from "../assets/stickers.png";
import cards from "../assets/cards.png";

const About = () => {

  return (
      <div className="box-border mx-auto w-[1200px] max-2xl:w-[1200px] max-xl:w-[980px] max-lg:w-full max-md:w-full max-sm:w-full lg::px-8 relative overflow-clip flex flex-col lg:flex-row gap-10 lg:gap-20 p-8 md:p-12 rounded-xl bg-white shadow-xl border border-foreground/10 items-center">
        <img src={growin} alt="Growin" height="1304" width="1682" className="flex-1 max-w-md w-full"/>
        <div className="space-y-6 flex-1 max-w-md lg:max-w-none">
          <div className="text-4xl font-bold md:text-5xl text-nowrap">About GrowIn Community</div>
          <p className="text-lg leading-snug font-medium text-foreground/90">
            Vibrant and inclusive community dedicated to fostering learning,
            collaboration, and personal growth.
            <br />
            Our mission is to create a supportive environment where individuals
            can come together to learn, build, and grow together.
          </p>
          <p className="text-lg leading-snug font-medium text-foreground/90">
            We also provide one-to-one guidance sessions if you need knowledge
            from scratch as a beginner.
            <br />
            Regular sessions in the form of Google Meet, Twitter Spaces, Discord
            sessions, and group engagements to maintain consistency and
            follow-ups for you.
          </p>
        </div>
      </div>
  );
};

export default About;
