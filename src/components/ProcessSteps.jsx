import React from "react";
import "./components.css";
import Rf from "../assets/Earn and grow image.svg";
import Tr from "../assets/Trade image.svg";
import Jo from "../assets/Join image.svg";
const steps = [
  {
    title: "Join",
    description: "Open your Demat account, and complete the verification",
    image: Jo, // Replace with actual image
  },
  {
    title: "Trade",
    description: "Enter the evaluation process and prove your trading skills",
    image: Tr, // Replace with actual image
  },
  {
    title: "Earn & Grow",
    description:
      "Secure funding up to Rs. 30 lakh and trade with supreme confidence",
    image: Rf, // Replace with actual image
  },
];

const ProcessSteps = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-center">
      <h2 className="text-[38px] font-bold text-[#34c7a2] mb-8">
        Process explained in <span className="font-bold">3-steps</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gradient-to-b box rounded-lg h-[250px] w-[300px] shadow-lg border-black  border-2 p-6 flex flex-col items-center transition-transform transform hover:scale-105 "
          >
            <img
              src={step.image}
              alt={step.title}
              className="w-20 h-20 mb-4 object-contain"
            />
            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 border-t-2 border-black w-[500px] h-1 mx-auto"></div>
    </div>
  );
};

export default ProcessSteps;
