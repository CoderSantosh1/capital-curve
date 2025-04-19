import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TermsAndConditions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Weekly Closing Accounts",
      content:
        "You will receive weekly closing accounts under Evaluation Plan. All the open positions / orders on Friday or last trading day of the week will be closed after market closing at LTP and profit/loss for the day will be calculated accordingly.",
    },
    {
      title: "Phase 1",
      content:
        "Upon signing up, Phase 1 account credentials will be emailed to you. Achieve a 10% profit target within 30 days. You can upgrade to a Phase 2 account after meeting the profit target and trading for a minimum of 5 days.",
    },
    {
      title: "Phase 2",
      content:
        "Once you apply for an upgrade to a Phase 2 account, credentials will be emailed to you within 24-48 hours. The Phase 2 profit target is 5%, to be achieved within a 30-day trading cycle from the first trade. After meeting this target, you can request an upgrade to a Prime Account.",
    },
    {
      title: "Prime Accounts",
      content:
        "Upon completing Phases 1 and 2, Prime Account details will be emailed to you. Profits made in the Prime Account are eligible for payouts after a minimum 30-day trading cycle.",
    },
    {
      title: "Payout Time Period",
      content:
        "Once you have a Prime Account and consistently make profits, you can apply for payouts after every 30-day trading cycle.",
    },
    {
      title: "Free Reset",
      content:
        "If your 30-day trading cycle ends and you are in profit but haven't reached the 10% or 5% profit target for Phase 1 or 2, you can apply for a FREE reset.",
    },
    {
      title: "Loss Limits",
      content:
        "Daily loss limits are set at 5% of the account size and reset every morning based on the previous day's closing balance. Total loss limits are set at 10% of the initial account size. Accounts will be liquidated if any loss limit is breached, but you can repurchase the account as many times as you like. Loss limits will be considered including both realised and unrealised loss.",
    },
    {
      title: "Real-Money Payouts",
      content:
        "75% of the profits made are eligible for real-money payouts, which are typically processed within 5-7 business days after applying. KYC is mandatory, and TDS is applicable.",
    },
    {
      title: "Minimum Trading Days",
      content:
        "Every trader must participate in a minimum of 5 trading sessions within their trading period to be eligible for payouts.",
    },
    {
      title: "Consistency Rule",
      content:
        "To make sure traders are disciplined, we have a consistency rule. For payout eligibility, number of trades or volume in one script to not be more than 30% of total volume/trades.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner */}
      <div
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?fit=crop&w=1200&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="z-10 text-center max-w-3xl px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Everything you need to know about your trading journey with us.
          </p>
        </div>
      </div>

      {/* Terms Section */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10">
          {sections.map((section, index) => (
            <div key={index} className="border-b border-gray-200 mb-4 pb-4">
              <button
                onClick={() => handleToggle(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {section.title}
                </h2>
                <span className="text-2xl text-gray-400">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mt-2 text-gray-700 text-sm sm:text-base leading-relaxed">
                      {section.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
