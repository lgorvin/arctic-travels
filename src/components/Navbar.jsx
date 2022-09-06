import React, { useState } from "react";
import ArcticTravel from "../assets/arctictravels.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const links = document.querySelectorAll(".nav-link");

if (links.length) {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      links.forEach((link) => {
        link.classList.remove("active");
      });
      e.preventDefault();
      link.classList.add("active");
    });
  });
}

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed-top w-full h-[80px] flex justify-between items-center px-4 shadow-lg bg-blue-900 text-white">
      <div>
        <img src={ArcticTravel} alt="Logo" className="w-20 h-20" />
      </div>
      <ul className="hidden md:flex container">
        <li className="nav-link px-4">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="nav-link">
          <Link to="regions" smooth={true} duration={500}>
            Regions
          </Link>
        </li>
        <li className="nav-link">
          <Link to="lodgings" smooth={true} duration={500}>
            Lodgings
          </Link>
        </li>
        <li className="nav-link">
          <Link to="resorts" smooth={true} duration={500}>
            Resorts
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-blue-900 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="regions"
            smooth={true}
            offset={40}
            duration={500}
          >
            Regions
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="lodgings"
            smooth={true}
            offset={40}
            duration={500}
          >
            Lodgings
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="resorts"
            smooth={true}
            offset={40}
            duration={500}
          >
            Resorts
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
