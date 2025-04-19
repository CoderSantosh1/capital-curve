import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Capital Curv?",
    answer:
      "Capital Curv is a proprietary trading platform that offers funded accounts to Indian traders.",
  },
  {
    question: "How can I get a funded account?",
    answer:
      "You can participate in our Evaluation Challenge. If you pass the criteria, we fund your account.",
  },
  {
    question: "Is it beginner-friendly?",
    answer:
      "Yes! Whether you're a newbie or a pro, we support all traders with learning resources and mentorship.",
  },
  {
    question: "How do payouts work?",
    answer:
      "You earn a percentage of the profits you generate. Payouts are sent monthly to your preferred payment method.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-white mb-8 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
         FAQs
      </h2>
      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-xl bg-gray-900 shadow-md transition duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none hover:bg-gray-800 transition"
            >
              <span className="text-lg font-medium">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`px-5 overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="py-2 text-gray-300 animate-fadeIn">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom fade animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-4px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default Faq;
