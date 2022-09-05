import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-slate-800 text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>We are Arctic Travels - Travel Agency.</p>
          </div>
          <div>
            <p>
              We are here to help{" "}
              <span className="font-bold text-blue-400">YOU</span> find your
              perfect winter holiday. We focus on luxurious quality as well as
              getting the best possible price for{" "}
              <span className="font-bold text-blue-400">YOUR</span> trip. Using
              our website clients can easily plan their trip exactly to how they
              desire, keep track of their planned trip and ask questions to our
              specialized travel agents when necessary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
