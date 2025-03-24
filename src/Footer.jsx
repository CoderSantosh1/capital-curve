import React from "react";
import AppLayout from "./components/AppLayout";
import Logo from "./assets/logo.png";
const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: ["Terms of Use", "Contact Us", "Affiliate Program"],
    },
    {
      title: "Legal",
      links: ["Terms & Conditions", "Privacy Policy"],
    },
    {
      title: "Community",
      links: ["About Us", "Blog", "Brand kit"],
    },
  ];

  return (
    <footer className="bg-[#123A52] text-white py-4 px-6 md:px-16">
      <AppLayout>
        <div className="container mx-auto grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Left Section: Logo & Description */}
          <div className="  ">
            <h2 className="text-2xl font-bold flex items-center space-x-2">
              <img
                src={Logo || "/assets/logo.png"}
                alt="Capital Curv Logo"
                className="w-14 h-14 rounded-full"
              />

              <span>
                Capital <span className="text-[#2BE7B8]">Curv</span>
              </span>
            </h2>
            <p className="mt-3 text-sm text-gray-300 leading-relaxed p-[1%]">
              Capital Curv offers a structured evaluation platform for traders
              to showcase their skills and qualify for real trading
              opportunities. Our transparent, risk-managed process empowers
              aspiring traders to elevate their journey and trade with
              confidence.
            </p>
          </div>

          {/* Center Sections: Company, Legal, Community */}
         
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-[18px] font-bold flex items-center mt-[10px] text-gray-100  ">
                {section.title}
              </h3>
              <ul className="space-y-2 ml-4 mt-3 text-gray-200">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-green-400 hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
       
        </div>

        {/* Bottom Footer */}
        <div className="mt-6 text-center text-sm border-t border-gray-400 pt-4">
          <p className="text-sm font-medium ">
           © Capital Curv. All Rights Reserved.
          </p>
        </div>
      </AppLayout>
    </footer>
  );
};

export default Footer;
