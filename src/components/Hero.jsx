import React from "react";
import AppLayout from "./AppLayout";
import girlLogo from "../assets/The girl image.svg";
import ico1 from "../assets/Icon Graphic 1.svg";
import ico2 from "../assets/IconGraphic 2.svg";
import ico3 from "../assets/Icon Graphic 3.svg";
import ico4 from "../assets/Icon Graphic 4.svg";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b custom-gradient md:h-[700px]  flex flex-col items-start justify-start md:px-4 sm:px-[2%] pb-4 p-[.5%] sm:mt-[-7%] md:mt-[-0%]">
      <AppLayout>
        <div className="grid sm:grid-cols-2 gap-8 ">
          <div className="">
            <div className="text-center sm:max-w-2xl mt-[20px] sm:mt-[10px] sm:pt-[20%] md:pt-[0%]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black p-[.5%]">
                Learn, Prove, and Trade with
                <span className="text-[#107D6B]"> Confidence!</span>
              </h1>
              <div className="sm:hidden flex  ">
                <img
                  src={girlLogo}
                  alt="Capital Curv girl Logo"
                  className="w-full h-[250px] rounded-full "
                />
              </div>
              <p className="text-gray-700 mt-[.5%] sm:mt-4 md:mt-[4%] sm:text-lg text-[16px]">
                Join a community designed for traders to prove their skills and
                step into the world of professional trading. We create
                opportunities for real talent!
              </p>
            </div>
            {/* Features */}
            <div className=" mt-[3%] sm:mt-6 md:mt-[11%] grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 sm:gap-4 md:gap-[20%] gap-[1%] sm:w-[500px] items-center text-center mx-[2%] sm:mx-[15%] md:mx-auto mb-[2%]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="btn text-[#2BE7B8] sm:p-2 p-[1px] pt-1.5 rounded-xl flex flex-col items-center text-center w-[78px] h-[100px]  sm:w-28 md:w-34 sm:h-28 md:h-34 border-2 border-black shadow-sm shadow-black "
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="md:w-12 md:h-12 sm:w-10 sm:h-10 w-9 h-9"
                  />
                  <p className="md:mt-3 leading-4 mt-1 font-semibold md:text-[16px] sm:text-[13px] text-[10px]">
                    {feature.title}
                  </p>
                  <p className="md:text-[10px] sm:text-[9px] text-[7px] text-white">
                    {feature.pg}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* image  */}
          <div className="hidden sm:flex">
            <img
              src={girlLogo}
              alt="Capital Curv girl Logo"
              className="w-full h-[480px] rounded-full sm:pb-[25%] md:pb-[0%]"
            />
          </div>
        </div>
        {/* CTA Button */}
        <div className="flex items-center justify-center mt-[2%] sm:mt-[2px] md:mt-[-3%]">
          <button className="mt-2 sm:w-[300px] bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-[25px] sm:rounded-lg text-lg shadow-lg transition duration-300 relative overflow-hidden hover:underline">
            Get Started Now →
          </button>
        </div>
      </AppLayout>
    </div>
  );
};

const features = [
  {
    title: "Upto 90%",
    pg: "of profit split",
    icon: ico1,
  },
  {
    title: "Live Trading",
    pg: "Partnered with angel one",
    icon: ico2,
  },
  {
    title: "Flexible Payouts",
    pg: "Based on your plan",
    icon: ico3,
  },
  {
    title: "Up to 30Lakhs",
    pg: "Trading account",
    icon: ico4,
  },
];

export default Hero;
