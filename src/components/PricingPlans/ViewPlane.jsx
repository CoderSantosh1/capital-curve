// ViewPlane.jsx
import React from "react";
import PricingPlans from "./PricingPlans";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // For animation if desired

const ViewPlane = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner Section with Background Image */}
      <div
        className="relative w-full h-[35vh] sm:h-[45vh] md:h-[50vh] lg:h-[50vh]  bg-cover bg-center text-white px-4 sm:px-6 lg:px-12 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjqDN506o7GQ92v3xKkc9UiZjj1M79equi6g&s')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* overlay */}
        <div className="relative z-10 text-center max-w-3xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Discover Our Fintech Pricing Plans
          </motion.h1>
          <p className="text-sm sm:text-lg mb-6">
            Choose the best plan to scale your fintech business with tailored
            solutions and flexible pricing.
          </p>
          <Link
            to="/contact"
            className="bg-green-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-green-500"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Pricing Plans Section */}
      <div className="my-4">
        <PricingPlans />
      </div>
    </div>
  );
};

export default ViewPlane; // Default export
