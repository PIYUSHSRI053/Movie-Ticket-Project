import React from "react";
import { assets } from "../assets/assets";
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div
      className="
        flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36
        bg-[url('/thunderbolts-header.jpg')]
        bg-cover bg-center h-screen
      "
    >
      {/* Logo */}
      <img
        src={assets.marvelLogo}
        alt="Marvel"
        className="max-h-11 lg:h-11 mt-20"
      />

      {/* Title */}
      <h1
        className="
          text-yellow-400
          text-4xl sm:text-5xl md:text-[70px]
          md:leading-[1.1]
          font-semibold
          max-w-xl
        "
      >
        THUNDERBOLTS
      </h1>

      {/* Meta Info */}
      <div
        className="
          flex flex-wrap items-center gap-x-4 gap-y-2
          text-gray-300 text-sm md:text-base
        "
      >
        <span>Action | Adventure | Sci-Fi</span>

        <div className="flex items-center gap-1">
          <CalendarIcon className="w-4 h-4" />
          <span>2025</span>
        </div>

        <div className="flex items-center gap-1">
          <ClockIcon className="w-4 h-4" />
          <span>2h 6m</span>
        </div>
      </div>

      {/* Description */}
      <p
        className="
          max-w-md
          text-gray-300
          text-sm md:text-base
          leading-relaxed
        "
      >
        The Anti-Heroes Assemble. Familiar MCU faces like Bucky,
        Yelena, US Agent, Red Guardian, Taskmaster, and Ghost are
        forced into high-stakes missions of redemption,
        rebellion, and reckoning.
      </p>

      {/* CTA */}
      <button
        onClick={() => navigate("/movies")}
        className="
          mt-2
          flex items-center gap-2
          px-6 py-3
          bg-primary hover:bg-primary-dull
          text-sm md:text-base
          rounded-full font-medium
          transition
          hover:shadow-lg
          active:scale-95
          w-fit
        "
      >
        Explore Movies
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HeroSection;
