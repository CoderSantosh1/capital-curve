import React from "react";

const TermsAndConditions = () => {
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
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 mt-4 md:mt-8 ">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
          Terms and Conditions
        </h1>
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                {section.title}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
