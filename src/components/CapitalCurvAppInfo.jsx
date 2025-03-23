import React from "react";
import AppLayout from "./AppLayout";
// import MobileMockup from "./assets/mobile-mockup.png"; // Replace with your image path

const CapitalCurvAppInfo = () => {
  return (
    <div className="w-full bg-[#0B7285]">
      <AppLayout>
        <section className="relative  text-white py-16 px-6 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Left Side Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="text-black">Building</span>
              <span className="text-yellow-400">
                {" "}
                Learning & Trading Community
              </span>
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold mt-4">
              Capital Curv App
            </h1>
            <p className="text-lg text-gray-200 mt-4">
              Carefully built to give you an incredible learning & mobile
              trading experience with structured learning, real market
              experience & much more! Best part? The App is constantly evolving!
            </p>
            <button className="mt-6 bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg text-lg shadow-md hover:bg-yellow-600 transition duration-300">
              Explore Mobile App →
            </button>
          </div>

          {/* Right Side Mobile Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
            <img
              src=""
              alt="Mobile Mockup"
              className="max-w-[250px] md:max-w-[300px] lg:max-w-[350px] drop-shadow-xl"
            />
          </div>
        </section>
      </AppLayout>
    </div>
  );
};

export default CapitalCurvAppInfo;
