import { useState } from "react";

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState("equity");
  const [selectedPrice, setSelectedPrice] = useState("₹9,999");

  const [expandedCard, setExpandedCard] = useState(null);

  const tradingBalance = {
    title: "Trading Balance",
    items: [
      { name: "Trading course", value: "40%", units: "Units" },
      { name: "Phase 1 Profit Target", value: "10%" },
      { name: "Phase 2 Profit Target", value: "12%" },
      { name: "Maximum Overall Loss", value: "8%" },
      { name: "Maximum Daily Loss", value: "4%" },
      { name: "Profit Split Upto", value: "90%" },
      { name: "Minimum Trading Days", value: "7 Days" },
      { name: "Trading Period", value: "30 Days" },
    ],
    price: "Price",
  };

  const futureCards = [
    {
      price: "$5,00,000",
      features: [
        "Free access",
        "10%",
        "12%",
        "8%",
        "4%",
        "90%",
        "7 Days",
        "30 Days",
      ],
      Allcost: "9,999",
      selected: false,
    },
    {
      price: "$10,00,000",
      features: [
        "Free access",
        "10%",
        "12%",
        "8%",
        "4%",
        "90%",
        "7 Days",
        "30 Days",
      ],
      Allcost: "17,999",
      selected: true,
    },
    {
      price: "$20,00,000",
      features: [
        "Free access",
        "10%",
        "12%",
        "8%",
        "4%",
        "90%",
        "7 Days",
        "30 Days",
      ],
      Allcost: "30,999",
      selected: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-500 p-6 flex flex-col items-center text-white rounded-tl-[200px] rounded-tr-[200px]">
      <h2 className="text-3xl font-bold mb-2">Choose the Best Plans</h2>
      <p className="text-lg mb-6">Choose your Account Type</p>

      {/* Account Type Selection */}
      <div className="flex space-x-4 bg-white p-2 rounded-full shadow-md mb-8">
        {["Equity", "F&O"].map((type) => (
          <button
            key={type}
            className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 ${
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

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-row ">
          {/* Fixed Trading Balance Card */}
          <div className="w-[300px] bg-white rounded-lg shadow-md  sticky top-6 h-fit py-6 ">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center ">
              {tradingBalance.title}
            </h2>

            <ul className="space-y-[4px] text-center">
              {tradingBalance.items.map((item, index) => (
                <li
                  key={index}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg shadow-md text-lg font-semibold transition-all duration-300 ${
                    index % 2 === 0
                      ? "bg-white text-gray-800"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  <span className="text-center">
                    {item.name}
                    {item.units && (
                      <span className="block text-xs text-gray-500">
                        {item.units}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center ">
              {tradingBalance.price}
            </h2>
          </div>

          {/* Future Cards - Expand on Hover */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
            {futureCards.map((card, index) => (
              <div
                key={index}
                className={`relative bg-white hover:rounded-lg h-[600px] hover:w-[300px] shadow-md   py-6 transition-all duration-300 ${
                  expandedCard === index ? "md:col-span-3" : ""
                } ${card.selected ? "ring-2 ring-indigo-500" : ""}`}
                onMouseEnter={() => setExpandedCard(index)}
                onMouseLeave={() => setExpandedCard(null)}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                  {card.price}
                </h2>

                <ul className="space-y-[4px] text-center pt-4">
                  {card.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex flex-row items-center justify-center p-3 rounded-lg shadow-md text-lg font-semibold transition-all duration-300 ${
                        i % 2 === 0
                          ? "bg-white text-gray-800"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      <span className="text-center">{feature}</span>
                    </li>
                  ))}
                </ul>
                <h2 className="text-2xl font-bold text-gray-800 pt-2 text-center">
                  {card.Allcost}
                </h2>
                {expandedCard === index && (
                  <button
                    className={`mt-6 w-full py-2 rounded-lg font-medium ${
                      card.selected
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    {card.selected ? "Current Plan" : "Choose Plan"}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add-ons Section */}
      <div className="w-full max-w-4xl bg-white text-gray-900 p-6 rounded-lg shadow-xl mt-8">
        <h3 className="text-xl font-semibold mb-4">Add-ons</h3>
        <div className="flex justify-between">
          {["None", "Profit Split", "Weekly Payouts"].map((addon, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              {addon}
            </button>
          ))}
        </div>
      </div>

      {/* Final Price & Pay Button */}
      <div className="mt-8 bg-white p-4 rounded-lg shadow-lg text-gray-900 text-center">
        <p className="text-xl font-bold">Price</p>
        <p className="text-3xl font-extrabold text-blue-600">{selectedPrice}</p>
      </div>
      <button className="mt-4 px-8 py-3 bg-blue-700 text-white text-lg font-bold rounded-lg shadow-md hover:bg-blue-900 transition">
        Pay Now
      </button>
    </div>
  );
};

export default PricingPlans;
