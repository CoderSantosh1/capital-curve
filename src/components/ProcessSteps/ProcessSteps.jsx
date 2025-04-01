import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rf from "../../assets/Earn and grow image.svg";
import Tr from "../../assets/Trade image.svg";
import Jo from "../../assets/Join image.svg";
import "./ProcessSteps.css";
const steps = [
  {
    title: "Join",
    description: "Open your Demat account and complete the verification.",
    image: Jo,
  },
  {
    title: "Trade",
    description: "Enter the evaluation process and prove your trading skills.",
    image: Tr,
  },
  {
    title: "Earn & Grow",
    description: "Secure funding up to Rs. 30 lakh and trade with confidence.",
    image: Rf,
  },
];

const ProcessSteps = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3, // Desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 text-center">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#34c7a2] mb-6">
        Process explained in <span className="font-bold">3-steps</span>
      </h2>

      {/* Slick Slider */}
      <div className="relative overflow-visible">
        <Slider {...settings} className="mx-auto bg-white p-4">
          {steps.map((step, index) => (
            <div key={index} className="flex justify-center relative py-3">
              <div className="box shadow-xl rounded-xl border border-gray-300 p-5 flex flex-col items-center text-center w-[260px] sm:w-[280px] md:w-[300px] h-[280px] transition-transform duration-300 hover:scale-105 hover:z-10">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-3"
                />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Divider */}
      <div className="mt-6 border-t-2 border-black w-4/5 max-w-lg mx-auto"></div>
    </div>
  );
};

export default ProcessSteps;
