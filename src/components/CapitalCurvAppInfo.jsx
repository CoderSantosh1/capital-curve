import React from "react";
import AppLayout from "./AppLayout";
// import MobileMockup from "./assets/mobile-mockup.png"; // Replace with your image path
import Mobile from "../assets/phone png.png";
const CapitalCurvAppInfo = () => {
  return (
    <div className="w-full bg-[#0B7285] h-[680px]">
      <AppLayout>
        <section className="relative  text-white py-16 px-6 md:px-12 lg:px-24  items-center justify-between">
          {/* Left Side Content */}
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            <span className="text-black">Building</span>
            <span className="text-yellow-400">
              {" "}
              Learning & Trading Community
            </span>
          </h2>
          <div className="grid grid-cols-2 gap-4 p-4">
            <div className=" text-white p-6 text-start ">
              <div className=" text-center lg:text-left">
                <h1 className="text-3xl md:text-5xl font-bold mt-6">
                  Capital Curv App
                </h1>
                <p className="text-lg text-gray-200 mt-14">
                  Carefully built to give you an incredible learning & mobile
                  trading experience with structured learning, real market
                  experience & much more! Best part? The App is constantly
                  evolving!
                </p>
                <button className="mt-[100px] bg-yellow-500 text-black font-semibold py-3 px-6 rounded-2xl text-lg shadow-md hover:bg-yellow-600 transition duration-300">
                  Explore Mobile App →
                </button>
              </div>
            </div>

            <div className=" text-white p-6 text-center ">
              <div className="flex justify-center lg:justify-end relative">
                <img
                  src={Mobile}
                  alt="Mobile Mockup"
                  className="drop-shadow-xl h-[500px]"
                />
              </div>
            </div>
          </div>

          {/* Right Side Mobile Image */}
        </section>
      </AppLayout>
    </div>
  );
};

export default CapitalCurvAppInfo;
