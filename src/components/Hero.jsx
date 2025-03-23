import React from "react";
import AppLayout from "./AppLayout";
import girlLogo from "../assets/The girl image.svg";
import "./components.css";
const Hero = () => {
  return (
    <div className="bg-gradient-to-b custom-gradient  h-[700px] flex flex-col items-start justify-center px-4">
      <AppLayout>
        <div className="grid grid-cols-2 gap-8 ">
          <div className="">
            <div className="text-center max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-black">
                Learn, Prove, and Trade with
                <span className="text-green-600"> Confidence!</span>
              </h1>
              <p className="text-gray-700 mt-4 text-lg">
                Join a community designed for traders to prove their skills and
                step into the world of professional trading. We create
                opportunities for real talent!
              </p>
            </div>
            {/* Features */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 ">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="btn text-green-300 p-2 rounded-xl flex flex-col items-center text-center w-34 h-32 border-2 border-black shadow-sm shadow-black"
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-9 h-9"
                  />
                  <p className="mt-1 font-semibold text-[16px]">
                    {feature.title}
                  </p>
                  <p className="text-[10px] text-white">{feature.pg}</p>
                </div>
              ))}
            </div>
          </div>
          {/* image  */}
          <div className="">
            <img
              src={girlLogo}
              alt="Capital Curv girl Logo"
              className="w-full h-[400px] rounded-full"
            />
          </div>
        </div>
        {/* CTA Button */}
        <div className="flex items-center justify-center">
          <button className="mt-2 w-[300px] bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition duration-300 relative overflow-hidden hover:underline">
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
    icon: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
  },
  {
    title: "Live Trading",
    pg: "Partnered with angel one",
    icon: "https://cdn-icons-png.flaticon.com/512/2991/2991155.png",
  },
  {
    title: "Flexible Payouts",
    pg: "Based on your plan",
    icon: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
  },
  {
    title: "Up to 30Lakhs",
    pg: "Trading account",
    icon: "https://cdn-icons-png.flaticon.com/512/3176/3176369.png",
  },
];

export default Hero;
