import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    mobile: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // Here you can add API call or authentication logic
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Mobile Number */}
          <div>
            <label className="block text-gray-600 mb-1">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your mobile number Or Email"
            />
          </div>

          {/* Email */}
          {/* <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div> */}

          {/* Submit Button */}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            LogIn
          </button>

          <div className="flex items-center justify-center space-x-2 text-gray-500">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-sm">or</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Email Signup */}
          <p className=" text-gray-800  transition text-center">
            New to this site? <span className="hover:underline text-blue-600 font-extrabold"> <Link to="/signUp"> Sign Up</Link></span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
