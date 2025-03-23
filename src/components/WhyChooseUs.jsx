import React from "react";

const features = [
  {
    title: "Access to Capital",
    description: "Start trading with real funds after passing our evaluation process.",
    icon: "💰",
  },
  {
    title: "Payout Guarantee",
    description: "Reliable Payout Policy",
    icon: "💵",
  },
  {
    title: "No Personal Risk",
    description: "We take on the financial risk. Your job is to trade and earn a share of the profits.",
    icon: "📈",
  },
  {
    title: "24/7 Support",
    description: "On-site Chat Support",
    icon: "🎧",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 px-4 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:-translate-y-2"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
