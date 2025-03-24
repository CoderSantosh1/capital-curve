import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import Logo from "./assets/logo.png";
import playStore from "./assets/Play store.png";
import AppStore from "./assets/App store.png";

const Navbar = () => {
  const menuItems1 = ["Home", "Plans", "Terms of Use", "FAQs", "About us"];
  const menuItems = [
    { name: "Home", active: true },
    { name: "Plans", active: false },
    { name: "Terms of Use", active: false },
    { name: "Privacy Policy", active: false },
    { name: "About us", active: false },
    { name: "Contact Us", active: false },
    { name: "Blog", active: false },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="max-w-[1450px] m-auto xl:mt-3 ">
      <nav className="bg-[#00324D]  text-white px-6 lg:px-12 py-4 flex items-center justify-between shadow-md  lg:rounded-2xl h-[60px]">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="rounded-xl">
            <img
              src={Logo} // Replace with your actual logo
              alt="logo"
              className="h-[40px] w-[40px] md:h-[50px] md:w-[50px] rounded"
            />
          </div>
          <span className="text-[22px] font-bold ">
            Capital <span className="text-[#2BE7B8]">Curv</span>
          </span>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-md">
          {menuItems1.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer font-semibold hover:text-green-400 hover:underline "
            >
              {item}
            </li>
          ))}
        </ul>
        {/* Buttons */}
        <div className="hidden lg:flex space-x-4">
          <button className="bg-green-200 text-[18px] text-black px-4 py-2 rounded-lg hover:bg-green-300 font-medium">
            Sign up
          </button>
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

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-[100%] bg-[#f0f0f0] text-center text-black py-6 font-medium text-[18px] lg:hidden">
            <ul className="space-y-3 p-[3%]">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer ${
                    item.active ? "text-green-400" : "hover:text-gray-300"
                  }`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-2 mx-[15%]">
              <button className="bg-[#00324D] text-white px-4 py-2 rounded-lg w-full">
                Sign up
              </button>
            </div>
            <div className="mt-6">
              <p className="text-[15px] text-center justify-center ">
                Download the App Now
              </p>
              <div className="flex my-2 justify-evenly">
                <img
                  src={playStore}
                  alt="hello 1"
                  className="h-[40px] w-[120px]"
                />
                <img
                  src={AppStore}
                  alt="hello 2"
                  className="h-[40px] w-[120px]"
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
