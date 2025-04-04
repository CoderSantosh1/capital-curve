import React from "react";

const About = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-12 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-blue-700">
          Empowering Traders, Unlocking Opportunities
        </h1>
        <p className="text-base sm:text-lg text-center mb-12">
          At <span className="font-semibold">Capital Curv</span>, we are on a mission to revolutionize the trading landscape in India. By providing traders with the capital, education, and tools they need, we help turn potential into real success.
          We believe that talent should never be limited by resources, and our platform bridges the gap between skilled traders and the financial backing they need to grow.
        </p>

        {/* What We Do */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">What We Do</h2>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg">
            <li>
              ✅ <strong>Funded Trading Accounts:</strong> Trade with our capital and share in the profits.
            </li>
            <li>
              ✅ <strong>Structured Learning:</strong> Market-specific education to sharpen trading strategies.
            </li>
            <li>
              ✅ <strong>Community & Support:</strong> Network of high-performing traders and expert mentorship.
            </li>
          </ul>
        </section>

        {/* Vision & Mission */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-blue-600">Our Vision</h2>
            <p className="text-base sm:text-lg">
              To become India's leading proprietary trading firm, empowering traders to achieve financial independence and excellence in the stock market.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2 text-blue-600">Our Mission</h2>
            <p className="text-base sm:text-lg">
              To provide capital, education, and opportunity to aspiring traders, ensuring they have the tools needed to succeed in the financial markets.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">Why Choose Capital Curv?</h2>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg">
            <li>
              🚀 <strong>Performance-Based Growth:</strong> Your success is our success. We support traders who show discipline and skill.
            </li>
            <li>
              📊 <strong>Risk Management Focus:</strong> Emphasizing safe trading strategies for long-term gains.
            </li>
            <li>
              💡 <strong>Tech-Driven Trading:</strong> Our platform uses advanced technology to boost performance and ensure data security.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-lg sm:text-xl font-semibold mb-4">
            Join Capital Curv and take your trading journey to the next level!
          </p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
