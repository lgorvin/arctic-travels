import React from "react";

import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-sky-300 mountain">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-lg text-black lg:text-black">
          Welcome to Arctic Travels
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-blue-900">
          Plan the perfect winter trip.
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-blue-300 "></h2>
        <p className="text-xl text-white lg:text-black  py-4 max-w-[700px]">
          Easily plan your ideal{" "}
          <span className="text-white lg:text-blue-900 font-bold italic">
            ski trip
          </span>{" "}
          from home with the help of professionals
        </p>
        <div>
          <button className="text-white group border-2 bg-blue-900 border-gray-200 px-6 py-3 my-2 flex items-center hover:bg-blue-900 hover:border-blue-900 duration-300">
            <Link to="work" smooth={true} duration={500}>
              Book Now!
            </Link>
            <span className="group-hover:rotate-90 duration-200">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
