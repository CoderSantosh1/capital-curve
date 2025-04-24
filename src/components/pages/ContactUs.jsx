import React from "react";
import { Mail, Phone, Home } from "lucide-react";
import AppLayout from "../AppLayout";

const ContactUs = () => {
  
  return (
    <div className="bg-white text-black py-16 px-6 md:px-20">
      <AppLayout>
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to explore how Capital Curv can help you
            level up your trading journey? We’re here to assist you—reach out
            anytime!
          </p>
        </div>

        {/* Main Content Grid as Cards */}
        <div className="grid md:grid-cols-2 gap-10 items-start sm:m-[50px]">
          {/* Contact Info Card */}
          <div className="bg-gray-100 rounded-2xl shadow-lg p-8 space-y-10 ">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="bg-white text-black rounded-full p-3 shadow">
                <Home size={24} />
              </div>
              <div>
                <h4 className="text-cyan-500 font-semibold text-lg">Address</h4>
                <p>
                  28A, Master Plan Road, East laxmi market, East Delhi, Delhi
                  110092
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="bg-white text-black rounded-full p-3 shadow">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-cyan-500 font-semibold text-lg">Phone</h4>
                <p>+91 9934386085</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-white text-black rounded-full p-3 shadow">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-cyan-500 font-semibold text-lg">Email</h4>
                <p>support@capitalcurv.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-gray-100 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSf8GGlL97ouYKdNlziOWMOeqUgGL3zn5I3Qq7DP0meK9hi33g/formResponse"
              method="POST"
              target="_blank"
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  name="entry.2005620554"
                  placeholder="Full Name"
                  required
                  className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-cyan-500 py-2"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="entry.1045781291"
                  placeholder="Email"
                  required
                  className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-cyan-500 py-2"
                />
              </div>
              <div>
                <textarea
                  name="entry.839337160"
                  placeholder="Type your Message..."
                  rows={4}
                  required
                  className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-cyan-500 py-2 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default ContactUs;
