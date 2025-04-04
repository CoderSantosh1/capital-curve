import { useState } from "react";
import Equity from "./Equity";
import Fq from "./Fq";

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState("equity");
  const [selectedPrice, setSelectedPrice] = useState("₹9,999");

  // const [expandedCard, setExpandedCard] = useState(null);
  const [selected, setSelected] = useState("None");

  const addons = [
    { name: "None", value: "None" },
    {
      name: "Profit Split",
      value: "Profit Split",
      extra: "+20%",
      description: "80/10 profit split",
    },
    {
      name: "Weekly Payouts",
      value: "Weekly Payouts",
      extra: "+5%",
      description: "Instead of 20 days",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-500 sm:p-6 flex flex-col items-center text-white rounded-tl-[100px] rounded-tr-[100px] md:rounded-tl-[200px] md:rounded-tr-[200px]">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-8 sm:mt-0 mb-2 sm:mb-3 text-center">
        Choose the Best Plans
      </h2>
      <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-center">
        Choose your Account Type
      </p>

      {/* Account Type Selection */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-white p-2 sm:p-3 rounded-full shadow-md mb-6 sm:mb-8">
        {["Equity", "F&O"].map((type) => (
          <button
            key={type}
            className={`px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-lg font-semibold rounded-full transition-all duration-300 ${
              selectedPlan === type.toLowerCase()
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setSelectedPlan(type.toLowerCase())}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Conditional rendering of components */}
      {selectedPlan === "equity" ? <Equity /> : <Fq />}
      {/* Add-ons Section */}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6" >
        {addons.map((addon, index) => (
          <label
            key={addon.value}
            className={`flex items-center border-2 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 
        ${
          selected === addon.value
            ? "border-green-500 bg-green-100 shadow-md"
            : "border-gray-300 hover:border-gray-500"
        }
        ${
          index === 2
            ? "col-span-2 justify-self-center sm:col-span-1 sm:justify-self-auto"
            : ""
        }
      `}
          >
            <input
              type="radio"
              name="addons"
              value={addon.value}
              checked={selected === addon.value}
              onChange={() => setSelected(addon.value)}
              className="hidden"
            />
            <div
              className={`w-6 h-6 border-2 rounded-full flex items-center justify-center mr-3 
          ${selected === addon.value ? "border-green-500" : "border-gray-400"}`}
            >
              {selected === addon.value && (
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              )}
            </div>
            <div className="text-sm sm:text-base font-medium text-gray-800">
              {addon.name}
              {addon.extra && (
                <span className="ml-2 px-2 py-1 bg-green-200 text-xs rounded-full">
                  {addon.extra}
                </span>
              )}
              {addon.description && (
                <p className="text-xs sm:text-sm text-gray-600">
                  {addon.description}
                </p>
              )}
            </div>
          </label>
        ))}
      </div>

      {/* Final Price & Pay Button */}
      <div className=" mt-4 sm:mt-8 bg-white p-1 sm:p-1 rounded-lg shadow-lg text-gray-900 text-center w-[150px] h-[70px]  sm:w-full max-w-md mx-auto">
        <p className="text-lg sm:text-xl font-bold">Price</p>
        <p className="text-2xl sm:text-3xl font-extrabold text-blue-600">
          {selectedPrice}
        </p>
      </div>

      <div className="my-4 text-center">
        <button className="px-6 sm:px-8 py-2 sm:py-3 bg-green-500 text-white text-base sm:text-lg font-semibold rounded-full shadow-md hover:bg-green-600 transition-all duration-300">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PricingPlans;
