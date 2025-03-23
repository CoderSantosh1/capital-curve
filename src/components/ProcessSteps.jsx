import React from "react";

const steps = [
  {
    title: "Join",
    description: "Open your Demat account, and complete the verification",
    image: "https://via.placeholder.com/100", // Replace with actual image
  },
  {
    title: "Trade",
    description: "Enter the evaluation process and prove your trading skills",
    image: "https://via.placeholder.com/100", // Replace with actual image
  },
  {
    title: "Earn & Grow",
    description: "Secure funding up to Rs. 30 lakh and trade with supreme confidence",
    image: "https://via.placeholder.com/100", // Replace with actual image
  },
];

const ProcessSteps = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-8">
        Process explained in <span className="font-bold">3-steps</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-white to-green-100 rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105"
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
      <div className="mt-8 border-t-2 border-black w-24 mx-auto"></div>
    </div>
  );
};

export default ProcessSteps;
