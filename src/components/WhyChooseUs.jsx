import React from "react";
import ATC from "../assets/Access to capital.svg";
import PG from "../assets/Payout gurantee.svg";
import NPR from "../assets/no personal risk.svg";
import Suport from "../assets/247.svg";
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

const WhyChooseUs = () => {
  return (
    <section className="py-12 px-4 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Why Choose Us?
      </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
  {features.map((feature, index) => (
    <div
      key={index}
      className="p-6 bg-[#214D69] w-[250px] rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:-translate-y-2 flex flex-col items-center"   
    >
      <img 
        src={feature.icon} 
        alt={feature.title} 
        className="h-[80px]  mb-2"      
      />
      <h3 className="text-lg font-semibold text-[#2BE7B8] mb-2">
        {feature.title}
      </h3>
      <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
    </div>
  ))}
</div>

    </section>
  );
};

export default WhyChooseUs;
