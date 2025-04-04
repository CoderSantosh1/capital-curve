import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ATC from "../../assets/Access to capital.svg";
import PG from "../../assets/Payout gurantee.svg";
import NPR from "../../assets/no personal risk.svg";
import Suport from "../../assets/247.svg";

const features = [
  {
    title: "Access to Capital",
    description:
      "Start trading with real funds after passing our evaluation process.",
    icon: ATC,
  },
  {
    title: "Payout Guarantee",
    description: "Reliable Payout Policy",
    icon: PG,
  },
  {
    title: "No Personal Risk",
    description:
      "We take on the financial risk. Your job is to trade and earn a share of the profits.",
    icon: NPR,
  },
  {
    title: "24/7 Support",
    description: "On-site Chat Support",
    icon: Suport,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, autoplay: true },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2, autoplay: true },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, autoplay: true },
    },
  ],
};
const Capital = () => {
  return (
        <section className="py-4 sm:py-12 px-4 text-center mb-2 sm:mb-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
        Why Choose Us?
      </h2>

      {/* Slick Slider */}
      <div className="max-w-7xl mx-auto px-6 sm:px-4 min-h-[22rem] relative overflow-visible ">
        <Slider {...settings} className="overflow-visible">
          {features.map((feature, index) => (
            <div
              key={index}
              className="px-2 sm:px-3 relative  overflow-visible py-3"
            >
              {/* Wrapper div to prevent cutting issue */}
              <div className="relative">
                <div className="p-6 bg-[#214D69] rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center text-center min-h-[16rem] pb-4">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="h-20 mb-2"
                  />
                  <h3 className="text-lg font-semibold text-[#2BE7B8] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Capital