import React from "react";
import AppLayout from "./AppLayout";
// import MobileMockup from "./assets/mobile-mockup.png"; // Replace with your image path
import Mobile from "../assets/phone png.png";
const CapitalCurvAppInfo = () => {
  return (
    <div className="w-full bg-[#0f3D3E]  h-[100%] sm:h-[680px] md:h-[710px] mt-[.2%]">
      <AppLayout>
        <section className="relative  text-white py-[4%] sm:py-16 px-6 md:px-12 lg:px-24  items-center justify-between">
          {/* Left Side Content */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center ">
            <span className="text-[#2BE7B8]">Building</span>
            <span className="text-yellow-400">
              {" "}
              Learning & Trading Community
            </span>
          </h2>
          <div className="grid grid-cols-2 gap-4 p-0 sm:p-4 ">
            <div className=" text-white sm:p-[2%]  text-start mt-[14%] sm:mt-[0%] sm:w-[130%]  w-[130%]">
              <div className=" text-center lg:text-left md:mt-[7%] ">
                <h1 className="text-[18px] sm:text-3xl md:text-5xl font-bold mt-[7%] sm:mt-6 text-center">
                  Capital Curv App
                </h1>
                <p className="sm:text-lg md:text-[22px] text-[10px] text-center text-gray-200 sm:mt-14 mt-[7%] leading-relaxed">
                  Carefully built to give you an incredible learning & mobile
                  trading experience with structured learning, real market
                  experience & much more! Best part? The App is constantly
                  evolving!
                </p>
                <button className="sm:mt-[100px] mt-[15%] bg-yellow-500 text-black font-bold  py-3 px-[3%] sm:px-6 rounded-2xl text-[16px] text-lg  sm:text-lg shadow-md hover:bg-yellow-600 transition duration-300 sm:ml-[17%]shadow-lg relative overflow-hidden hover:underline">
                  Explore Mobile App →
                </button>
      
              </div>
            </div>

            <div className=" text-white p-6 text-center">
              <div className="flex justify-center lg:justify-end relative">
                <img
                  src={Mobile}
                  alt="Mobile Mockup"
                  className="drop-shadow-xl sm:h-[500px] w-[100%] h-[200px] mt-[25%] sm:mt-[0%] ml-[45%]"
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
