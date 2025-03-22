import React from "react";
// import QR from "./assites/QR.jpeg";
const Footer = () => {
  return (
    <div className="w-full h-[700px]  sm:h-[350px] lg:h-[410px] bg-[#00324D] flex flex-col  text-white">
      
      <div class="grid grid-cols-1 sm:grid-cols-2  gap-4">
       
        <div className="lg:mb-0 mt-10 lg:mt-10 mx-5 sm:mx-5 lg:ml-[25%]">
          <p className="mb-6 text-xl font-bold ">Contaact Details :-</p>
          <ul className="flex flex-col space-y-2   ">
            <h1 className=" font-bold text-xl">Address</h1>
            <li className=" hover:text-black text-lg cursor-pointer">
              shop 19, fred decor,Ahmedabad
            </li>
            <h1 className=" font-bold text-xl">phone</h1>
            <li className="hover:text-black cursor-pointer text-lg">
              +91 915 793 2201
            </li>
            <h1 className=" font-bold text-xl">Email.</h1>
            <li className=" hover:text-black text-lg cursor-pointer">
              fashionista@gmail.com
            </li>
          </ul>
        </div>

        <div className=" mb-2 sm:mb-8 lg:mb-0  lg:mt-10 mx-5 sm:mx-0 lg:ml-[10%]">
          <p className="mb-4 text-lg font-semibold  pt-12 ">Like & Follow</p>
          <ul className="flex flex-col space-y-4 text-[14px] font-medium ">
            <span className="flex flex-row gap-3 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3 mt-2">
              <img
                src=""
                alt="facebook logo"
                className="w-[25px] lg:w-[32px] sm:w-[25px] sm:h-[25px] h-[25px] lg:h-[32px] cursor-pointer"
              />
              <img
                src=""
                alt="facebook logo"
                className="w-[25px] lg:w-[32px] sm:w-[25px] sm:h-[25px] h-[25px] lg:h-[32px] cursor-pointer"
              />
              <img
                src=""
                alt="insta"
                className="w-[25px] lg:w-[32px] sm:w-[25px] sm:h-[25px] h-[25px] lg:h-[32px] cursor-pointer"
              />
            </span>
            <li className="text-2xl font-bold">PAY NOW</li>
            <li>
              <a href="https://www.figma.com/file/1qPHan6lbYD57Cz9KuYQJ9/image/5a7d0214bdd3d9de2cb78b0a3e001fed5bec74ab">
                <img
                  src=""
                  alt="QR"
                  className="m-2 h-[120px] w-[#130px] pb-5 cursor-pointer"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-1 bg-black text-black" />
      <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0 mb-1">
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium ">
            hfhfkytfyruivuyoi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;