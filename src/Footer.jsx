import React from "react";
import Logo from "./assets/logo.png";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "Terms of Use", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Affiliate Program", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms & Conditions", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "About Us", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Brand kit", href: "#" },
    ],
  },
];
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Logo and description - 40% width */}
          <div className="md:w-2/5">
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
            <p className="text-gray-400 text-[16px] sm:px-[25px] pt-[6px] text-start font-semibold">
              Capital Curv offers a structured evaluation platform for traders
              to showcase their skills and quality for cult trading
              opportunities. Our transparent, risk-managed process empowers
              aspiring traders to elevate their journey and trade with
              confidence.
            </p>
          </div>

          {/* Other sections - 60% width */}
          <div className="md:w-3/5 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-[1%]">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-center ">
            © {new Date().getFullYear()} Capital Curv All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
