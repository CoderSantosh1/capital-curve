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
    title: "Learn",
    description: "Learn from our recorder master courses.",
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
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-6 sm:py-12 px-4 text-center mb-6 transition-all duration-500 ease-in-out">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 transition-all duration-300 ease-in-out">
        Why Choose Us?
      </h2>

      <div className="max-w-7xl mx-auto sm:px-4 min-h-[22rem] relative overflow-visible">
        <Slider {...settings} className="overflow-visible">
          {steps.map((feature, index) => (
            <div key={index} className="px-2 sm:px-3 py-3">
              <div className="transition-all duration-300 ease-in-out">
                <div className="p-6 box bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col items-center text-center min-h-[16rem]">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-20 mb-2 transition-transform duration-300 ease-in-out"
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

      <div className="mt-6 border-t-2 border-black w-4/5 max-w-lg mx-auto transition-all duration-300 ease-in-out"></div>
    </section>
  );
};

export default ProcessSteps;
