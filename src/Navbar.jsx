import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import AppLayout from "./components/AppLayout";

// nav  scroll in mob. view  start right text  and slide a 75%

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-[#00324D]  transition-transform duration-200 transform ">
      <AppLayout>
        <ul className="text-center text-xl px-[20px] shadow-2xl  transition-transform duration-200 transform ">
          <li className="my-4 py-4 border-black ">
            <a href="#product" onClick={handleClick}>
              Product
            </a>
          </li>
          <li className="my-4 py-4 border-black">
            <a href="#service" onClick={handleClick}>
              Services
            </a>
          </li>
          <li className="my-4 py-4 border-black">
            <a href="#blogs" onClick={handleClick}>
              Blogs
            </a>
          </li>

          <li className="my-4 py-4 border-black">
            <a href="#gallery" onClick={handleClick}>
              Gallery
            </a>
          </li>
          <li className="my-4 py-4 border-black">
            <a href="#contact" onClick={handleClick}>
              Contact
            </a>
          </li>
        </ul>
      </AppLayout>
    </div>
  );
  return (
    <div className="bg-[#00324D] text-white sticky top-0 z-50">
      <AppLayout>
        <nav>
          <div className="h-16 flex justify-between z-20 text-white lg:py-5 px-[20px] py-4 ">
            <div className="flex items-center flex-1">
              <a href="/">
                <span className="text-3xl font-bold">Capitalcurv</span>

                {/* logo of company */}
                {/* <img src="/" alt="comLogo" /> */}
              </a>
            </div>
            {/* 

                center in nave 
Home
Plans
Terms Of Use
FAQ
AboutUs */}

            <div className="lg:flex lg:flex-1 items-center justify-end font-normal hidden">
              <div className="flex-10">
                <ul className="flex gap-8 mr-16 text-[18px] ">
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="#product">Home</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="#service">Plans</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="#blogs">Terms Of Use</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="#gallery">FAQ</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="#contact">AboutUs</a>
                  </li>

                  <button className="text-white">Click</button>
                  <button className="text-white">Click</button>
                </ul>
              </div>
            </div>

            {/* <div className="lg:flex lg:flex-1 flex-wrap items-center justify-between px-4 py-2 hidden">
              <ul className="flex flex-wrap gap-6 text-lg antialiased subpixel-antialiased text-gray-700 md:gap-8">
                <li className="hover:text-black transition duration-300 hover:underline cursor-pointer">
                  <a href="#product">Home</a>
                </li>
                <li className="hover:text-black transition duration-300 hover:underline cursor-pointer">
                  <a href="#service">Plans</a>
                </li>
                <li className="hover:text-black transition duration-300 hover:underline cursor-pointer">
                  <a href="#blogs">Terms Of Use</a>
                </li>
                <li className="hover:text-black transition duration-300 hover:underline cursor-pointer">
                  <a href="#gallery">FAQ</a>
                </li>
                <li className="hover:text-black transition duration-300 hover:underline cursor-pointer">
                  <a href="#contact">About Us</a>
                </li>
              </ul>

              
              <div className="flex gap-4 mt-2 md:mt-0">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Click
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                  Click
                </button>
              </div>
            </div> */}

            <div>{click && content}</div>
            <button
              className="block lg:hidden translate text-white"
              onClick={handleClick}
            >
              {click ? <FaTimes /> : <CiMenuBurger />}
            </button>
          </div>
        </nav>
      </AppLayout>
    </div>
  );
};

export default Navbar;
