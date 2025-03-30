import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Rf from "../assets/Earn and grow image.svg";
import Tr from "../assets/Trade image.svg";
import Jo from "../assets/Join image.svg";

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
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl font-bold text-[#34c7a2] text-center mb-8">
        Process explained in <span className="font-bold">3-steps</span>
      </h2>

      {/* Swiper */}
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 }, // Mobile
          640: { slidesPerView: 2, spaceBetween: 20 }, // Tablet
          1024: { slidesPerView: 3, spaceBetween: 30 }, // Desktop
        }}
        modules={[Navigation]}
        navigation
        className="mySwiper"
      >
        {steps.map((step, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-white shadow-lg rounded-2xl border border-gray-200 p-6 flex flex-col items-center text-center max-w-sm w-full h-[300px] sm:h-[350px] transition-transform transform hover:scale-105">
              <img
                src={step.image}
                alt={step.title}
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Divider */}
      <div className="mt-8 border-t-2 border-black w-[80%] max-w-lg mx-auto"></div>
    </div>
  );
};

export default ProcessSteps;
