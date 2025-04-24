import React, { useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import Logo from "./assets/logo.png";
import playStore from "./assets/Play store.png";
import AppStore from "./assets/App store.png";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate(); // Hook to navigate programmatically

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Plans", path: "/viewplane" },
    { name: "Terms of Use", path: "/termsofUse" },
    { name: "Privacy Policy", path: "/PrivacyPolicy" },
    { name: "About us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to navigate to the Home page when the logo or name is clicked
  const handleHomeClick = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#00324D]/90 backdrop-blur-md shadow-md" : "bg-[#00324D]"
      }`}
    >
      <nav className="text-white px-6 lg:px-20 py-4 flex items-center justify-between h-[60px]">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-2">
          <button onClick={handleHomeClick}> {/* Navigate to Home on logo click */}
            <img
              src={Logo}
              alt="logo"
              className="h-[40px] w-[40px] md:h-[50px] md:w-[50px] rounded"
            />
          </button>
          <span className="text-[22px] font-bold">
            <button onClick={handleHomeClick}> {/* Navigate to Home on name click */}
              Capital <span className="text-[#2BE7B8]">Curv</span>
            </button>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-md">
          {menuItems.slice(0, 5).map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="cursor-pointer font-semibold hover:text-green-400 hover:underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/signUp">
            <button className="bg-green-200 text-[18px] text-black px-4 py-2 rounded-lg hover:bg-green-300 font-medium">
              Sign up
            </button>
          </Link>
          <button className="bg-green-400 text-[18px] text-black px-4 py-2 rounded-lg hover:bg-green-500 font-medium">
            Dashboard
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <CiMenuBurger size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-[#f0f0f0] text-black px-6 py-4 font-medium text-[18px] lg:hidden"
          >
            <ul className="space-y-3 text-center">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="block hover:text-gray-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 space-y-2">
              <Link to="/signUp">
                <button className="bg-[#00324D] text-white px-4 py-2 rounded-lg w-full">
                  Sign up
                </button>
              </Link>
            </div>

            <div className="mt-6">
              <p className="text-[15px] text-center">Download the App Now</p>
              <div className="flex my-2 justify-evenly">
                <img src={playStore} alt="playstore" className="h-[40px] w-[120px]" />
                <img src={AppStore} alt="appstore" className="h-[40px] w-[120px]" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
