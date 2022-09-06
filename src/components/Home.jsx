import React, { useState } from "react";

import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const [book, setBook] = useState(false);
  const handleClick = () => setBook(!book);

  return (
    <div name="home" className="w-full h-screen bg-sky-300 mountain">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-lg text-black lg:text-black">
          Welcome to Arctic Travels
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-blue-900">
          Plan the perfect winter trip.
        </h1>
        <p className="text-xl text-white lg:text-black  py-4 max-w-[700px]">
          Easily plan your ideal{" "}
          <span className="text-white lg:text-blue-900 font-bold italic">
            ski trip
          </span>{" "}
          from home with the help of professionals
        </p>
        <div>
          <button
            onClick={handleClick}
            className={
              !book
                ? "text-white group border-2 bg-blue-900 border-gray-200 px-6 py-3 my-2 flex items-center hover:bg-blue-900 hover:border-blue-900 duration-300"
                : "hidden"
            }
          >
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Book Now!
            </Link>
            <span className="group-hover:rotate-90 duration-200">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
          <div
            className={
              !book
                ? "hidden"
                : "flex items-center justify-center py-10 opacity-90"
            }
          >
            <button
              onClick={handleClick}
              className="hidden md:flex bg-blue-900 text-white py-3 px-2 rounded-l-md hover:bg-blue-700"
            >
              Back
            </button>
            <div
              class="hidden md:inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
              role="group"
            >
              <button
                type="button"
                class="rounded-l-lg inline-block text-sm sm:text-xl px-6 py-2.5 bg-blue-900 text-white font-medium leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-500 transition duration-150 ease-in-out"
              >
                Region
                <div class="mb-3 w-10 md:w-40 pt-2">
                  <div class="input-group relative flex flex-wrap items-stretch w-20 sm:w-40 mb-4 rounded">
                    <input
                      type="search"
                      class="form-control relative flex-auto min-w-0 block w-40 px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="button-addon2"
                    />
                    <span
                      class="input-group-text flex items-center px-3 py-1.5 text-base font-normal bg-slate-500 text-gray-200 text-center whitespace-nowrap rounded"
                      id="basic-addon2"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="search"
                        class="w-4"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-900 text-white font-medium text-sm sm:text-xl leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
              >
                Date
                <div class="mb-3 w-10 md:w-40 pt-2">
                  <div class="input-group relative flex flex-wrap items-stretch w-20 sm:w-40 mb-4 rounded">
                    <input
                      type="search"
                      class="form-control relative flex-auto min-w-0 block w-40 px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="button-addon2"
                    />
                    <span
                      class="input-group-text flex items-center px-3 py-1.5 text-base font-normal bg-slate-500 text-white text-center whitespace-nowrap rounded"
                      id="basic-addon2"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="search"
                        class="w-4"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-blue-900 text-white font-medium text-sm sm:text-xl leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
              >
                People
                <div class="mb-3 w-10 md:w-40 pt-2">
                  <div class="input-group relative flex flex-wrap items-stretch w-20 sm:w-40 mb-4 rounded">
                    <input
                      type="search"
                      class="form-control relative flex-auto min-w-0 block w-40 px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="button-addon2"
                    />
                    <span
                      class="input-group-text flex items-center px-3 py-1.5 text-base font-normal bg-slate-500 text-gray-200 text-center whitespace-nowrap rounded"
                      id="basic-addon2"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="search"
                        class="w-4"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
              <button
                type="button"
                class=" rounded-r-lg inline-block px-6 py-2.5 bg-blue-900 text-white font-medium text-sm sm:text-xl leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
