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
    <section className="py-4 sm:py-12 px-4 text-center mb-4 sm:mb-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
        Why Choose Us?
      </h2>

      {/* Slick Slider */}
      <div className="max-w-7xl mx-auto  sm:px-4 min-h-[22rem] relative overflow-visible ">
        <Slider {...settings} className="overflow-visible">
          {steps.map((feature, index) => (
            <div
              key={index}
              className="px-2 sm:px-3 relative  overflow-visible py-3"
            >
              {/* Wrapper div to prevent cutting issue */}
              <div className="relative">
                <div className="p-6 box  rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center text-center min-h-[16rem] pb-4">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-20 mb-2"
                  />
                  <h3 className="text-lg font-bold text-[#000000] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-800 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-6 border-t-2 border-black w-4/5 max-w-lg mx-auto"></div>
    </section>
  );
};

export default ProcessSteps;
