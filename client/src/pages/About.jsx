import React from "react";
import BlurCircle from "../components/BlurCircle";

const About = () => {
  return (
    <div
      className="
        px-6
        md:px-16
        lg:px-40
        pt-28
        pb-20
        relative
        overflow-hidden
      "
    >
      <BlurCircle top='150px' left='0px'/>
      <BlurCircle bottom='50px' right='50px'/>

      <h1
        className="
          text-3xl
          md:text-3xl
          font-semibold
          text-white
          mb-8
        "
      >
        About Us
      </h1>

      <div className="max-w-3xl text-gray-300 leading-relaxed space-y-5">
        <p>
          <span className="text-white font-semibold">
            BookYourTicket
          </span>{" "}
          is a modern movie ticket booking platform designed to make discovering
          movies, exploring theatres, and booking tickets simple and seamless.
          The platform focuses on clean design, intuitive navigation, and a
          smooth user experience.
        </p>

        <p>
          Users can browse the latest movie releases, explore cinemas across
          different cities in India, and view movie details in an organized and
          user-friendly way. The goal of this project is to simulate a real-world
          cinema booking experience using modern frontend technologies.
        </p>

        <p>
          This website has been{" "}
          <span className="text-white font-medium">
            designed and developed by Piyush Srivastava
          </span>{" "}
          as a full stack-focused project to demonstrate practical skills in React,
          routing, UI design, and application structure.
        </p>

        <p>
          BookYourTicket is built as a learning-driven project with scalability
          in mind, making it adaptable for future enhancements such as backend
          integration, real-time seat booking, and payment processing.
        </p>
      </div>
    </div>
  );
};

export default About;
