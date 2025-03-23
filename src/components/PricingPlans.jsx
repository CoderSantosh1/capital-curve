import { useState } from "react";

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState("equity");
  const [selectedPrice, setSelectedPrice] = useState("₹9,999");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-500 p-6 flex flex-col items-center text-white">
      <h2 className="text-3xl font-bold mb-2">Choose the Best Plans</h2>
      <p className="text-lg mb-6">Choose your Account Type</p>

      {/* Account Type Selection */}
      <div className="flex space-x-4 bg-white p-2 rounded-full shadow-md mb-8">
        {['Equity', 'F&O'].map(type => (
          <button
            key={type}
            className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 ${selectedPlan === type.toLowerCase() ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setSelectedPlan(type.toLowerCase())}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Pricing Table */}
      <div className="w-full max-w-4xl bg-white text-gray-900 p-6 rounded-lg shadow-xl">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4">Trading Balance</th>
              {[500000, 1000000, 2000000, 3000000].map((amount, index) => (
                <th key={index} className="p-4">₹{amount.toLocaleString()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {["Trading Course", "Phase 1 Profit Target", "Phase 2 Profit Target", "Overall Loss"].map((feature, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 font-medium">{feature}</td>
                <td className="p-4">Free Access</td>
                <td className="p-4">10%</td>
                <td className="p-4">12%</td>
                <td className="p-4">4%</td>
              </tr>
            ))}
            <tr className="bg-gray-100 font-bold">
              <td className="p-4">Price</td>
              {[9999, 17999, 30999, 39999].map((price, index) => (
                <td key={index} className="p-4">
                  ₹{price.toLocaleString()}<br />
                  <button
                    className={`mt-2 px-4 py-2 rounded-lg ${selectedPrice === `₹${price.toLocaleString()}` ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
                    onClick={() => setSelectedPrice(`₹${price.toLocaleString()}`)}
                  >
                    {selectedPrice === `₹${price.toLocaleString()}` ? 'Selected' : 'Select'}
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Add-ons Section */}
      <div className="w-full max-w-4xl bg-white text-gray-900 p-6 rounded-lg shadow-xl mt-8">
        <h3 className="text-xl font-semibold mb-4">Add-ons</h3>
        <div className="flex justify-between">
          {['None', 'Profit Split', 'Weekly Payouts'].map((addon, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              {addon}
            </button>
          ))}
        </div>
      </div>

      {/* Final Price & Pay Button */}
      <div className="mt-8 bg-white p-4 rounded-lg shadow-lg text-gray-900 text-center">
        <p className="text-xl font-bold">Price</p>
        <p className="text-3xl font-extrabold text-blue-600">{selectedPrice}</p>
      </div>
      <button className="mt-4 px-8 py-3 bg-blue-700 text-white text-lg font-bold rounded-lg shadow-md hover:bg-blue-900 transition">Pay Now</button>
    </div>
  );
};

export default PricingPlans;