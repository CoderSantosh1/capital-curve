import React, { useState } from "react";
import AppLayout from "../AppLayout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Equity = ({ setPriceAndPlan }) => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(1);

  const cards = [
    {
      isTradingBalance: true,
      title: "Trading Balance",
      items: [
        { name: "Trading course", units: "Units" },
        { name: "Phase 1 Profit Target: 10%" },
        { name: "Phase 2 Profit Target: 12%" },
        { name: "Maximum Overall Loss: 8%" },
        { name: "Maximum Daily Loss: 4%" },

        { name: "Minimum Trading Days: 7 Days" },
        { name: "Trading Period: 30 Days" },
      ],
      price: "Price",
      Allcost: "10",
    },
    {
      price: "₹5,00,000",
      features: ["Free access", "10%", "12%", "8%", "4%", "7 Days", "30 Days"],
      Allcost: "₹9,999",
      amount: "9999",
      selected: false,
    },
    {
      price: "₹10,00,000",
      features: ["Free access", "10%", "12%", "8%", "4%", "7 Days", "30 Days"],
      Allcost: "₹17,999",
      amount: "17999",
      selected: true,
    },
    {
      price: "₹20,00,000",
      features: ["Free access", "10%", "12%", "8%", "4%", "7 Days", "30 Days"],
      Allcost: "₹30,999",
      amount: "30999",
      selected: false,
    },
    {
      price: "₹30,00,000",
      features: ["Free access", "10%", "12%", "8%", "4%", "7 Days", "30 Days"],
      Allcost: "₹39,999",
      amount: "39999",
      selected: false,
    },
  ];
  const handleCardClick = (allCost, index) => {
    setPriceAndPlan(allCost);
    setSelectedCardIndex(index);
  };

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // For tablet and larger
        settings: {
          slidesToShow: 3, // Show 3 cards
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <AppLayout>
      <div className="container sm:mx-auto sm:px-4 sm:py-6 flex flex-wrap justify-between">
        {/* Fixed Trading Balance Card */}
        <div className="bg-white shadow-md rounded-l-lg sm:p-4 h-[490px] sm:h-[524px] w-[135px] sm:w-[50%] md:w-[30%] sticky top-6 sm:top-auto z-10 mb-6 sm:mb-0">
          <h2 className="text-[16px] sm:text-lg font-bold text-gray-800 my-3 text-center pt-2 sm:pt-0">
            {cards[0].title}
          </h2>
          <ul className="space-y-2 sm:space-y-3 text-center">
            {cards[0].items.map((item, i) => (
              <li
                key={i}
                className="sm:p-2 p-1 rounded-md bg-gray-100 text-[12px] sm:text-sm font-medium text-gray-800"
              >
                {item.name}
                {item.units && (
                  <span className="block text-xs text-gray-500">
                    {item.units}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <h2 className="text-lg font-bold text-gray-800 mt-3 text-center">
            {cards[0].price}
          </h2>
        </div>

        {/* Pricing Cards Slider */}
        <div className="w-[190px] sm:w-[50%] md:w-[70%]">
          <Slider {...sliderSettings}>
            {cards.slice(1).map((card, index) => {
              const isSelected = selectedCardIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-white shadow-md rounded-r-lg pb-2 sm:p-4 h-full w-[300px] transition-all duration-300 hover:scale-105 hover:z-10 ${
                    isSelected ? "ring-2 ring-indigo-500" : ""
                  }`}
                >
                  <h2 className="text-lg font-bold text-gray-800 my-2.5 sm:my-4 text-center">
                    {card.price}
                  </h2>
                  <ul className="space-y-2 sm:space-y-3 text-center">
                    {card.features.map((feature, i) => (
                      <li
                        key={i}
                        className="p-2 rounded-md bg-gray-50 text-sm font-medium text-gray-800 mt-3"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <h2 className="text-lg font-bold text-gray-800 text-center mt-8">
                    {card.Allcost}
                  </h2>

                  <button
                    onClick={() => handleCardClick(card.amount, index)}
                    className={`mt-3 w-full py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isSelected
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    {isSelected ? " Selected " : "Choose Plan"}
                  </button>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </AppLayout>
  );
};

export default Equity;
