import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rf from "../../assets/Earn and grow image.svg";
import Tr from "../../assets/Trade image.svg";
import Jo from "../../assets/Join image.svg";
import "./ProcessSteps.css"
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
    <div className="max-w-6xl mx-auto px-4 py-[2%] text-center ">
      {/* Header */}
      <h2 className="text-[32px] sm:text-4xl md:text-5xl font-bold text-[#34c7a2] mb-8">
        Process explained in <span className="font-bold">3-steps</span>
      </h2>

      {/* Slick Slider */}
      <Slider {...settings} className="mx-[2%] bg-white p-[2%]">
        {steps.map((step, index) => (
          <div key={index} className="flex justify-center   gap-2">
            <div className="bg-white box shadow-lg rounded-2xl border border-gray-200 p-6 flex flex-col items-center text-center max-w-sm w-full h-[300px] sm:h-[300px] sm:w-[300px] transition-transform transform hover:scale-105">
              <img
                src={step.image}
                alt={step.title}
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Divider */}
      <div className="mt-8 border-t-2 border-black w-[80%] max-w-lg mx-auto my-2"></div>
    </div>
  );
};

export default ProcessSteps;
