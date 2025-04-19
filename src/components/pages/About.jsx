import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Abhi from "../../assets/Abhishek.jpeg";
import Gaut from "../../assets/Gautam.jpeg";
import ayush from "../../assets/Ayush.jpeg";

const team = [
  {
    name: "Abhishek Kumar Raj",
    role: "Full-Stack Developer",
    image: Abhi,
  },
  {
    name: "Ayush Raj",
    role: "Founder and CEO",
    image: ayush,
  },
  {
    name: "Gautam Malhotra",
    role: "Marketing and Operations Head",
    image: Gaut,
  },
];

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-gray-50 text-gray-800 scroll-smooth">
      {/* Hero Banner */}
      <div
        className="relative bg-cover bg-center text-white py-24 px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1591696331119-421c0b7f6a6f?auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center transition-opacity duration-700 ease-in-out">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in-up">
            Empowering Traders, Unlocking Opportunities
          </h1>
          <p className="text-lg sm:text-xl opacity-90">
            Fueling dreams of India's aspiring traders with capital, support,
            and cutting-edge tools.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-16 py-16 max-w-6xl mx-auto space-y-24">
        {/* What We Do */}
        <section className="transition duration-500 ease-in-out transform hover:scale-[1.01]">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10 text-blue-700 text-center">
            What We Do
          </h2>
          <ul className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-700">
            <li>
              <strong className="text-blue-600">1. Funded Trading Accounts:</strong>
              &nbsp;We provide capital to traders, allowing them to trade without financial risk and share in the profits.
            </li>
            <li>
              <strong className="text-blue-600">2. Structured Learning:</strong>
              &nbsp;Enhance your skills through our comprehensive training programs tailored for different trading strategies.
            </li>
            <li>
              <strong className="text-blue-600">3. Community & Support:</strong>
              &nbsp;Join a thriving trader community with expert mentorship, collaboration, and continuous support.
            </li>
          </ul>
        </section>

        {/* Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition-all duration-500 transform hover:scale-105">
            <h3 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
              Our Vision
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              To become India's leading proprietary trading firm by empowering traders to achieve financial freedom through expert guidance and strategic support.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition-all duration-500 transform hover:scale-105">
            <h3 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
              Our Mission
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              To provide capital, advanced tools, and education to traders across India to help them thrive and succeed in the market.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10 text-blue-700 text-center">
            Why Choose Capital Curv?
          </h2>
          <ul className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-700">
            <li>
              <strong className="text-blue-600">1. Performance-Based Growth:</strong> Your success drives your growth with us.
            </li>
            <li>
              <strong className="text-blue-600">2. Structured Learning Programs:</strong> Learn from tailored courses built for different skill levels.
            </li>
            <li>
              <strong className="text-blue-600">3. Robust Risk Management:</strong> Trade safely with expert-built risk strategies and rules.
            </li>
            <li>
              <strong className="text-blue-600">4. Advanced Tech Tools:</strong> Use real-time analytics, secure systems, and smart platforms.
            </li>
            <li>
              <strong className="text-blue-600">5. Supportive Community:</strong> Grow with mentors, peers, and collaborative forums.
            </li>
          </ul>
        </section>

        {/* Our Team */}
        <section className="overflow-hidden px-2">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-blue-700 text-center">
            Our Team
          </h2>
          <Slider {...settings} className="p-4">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 w-full max-w-xs mx-auto rounded-xl shadow-md text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border-4 border-blue-100"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <div className="flex justify-center gap-5 mt-3 text-2xl text-gray-500">
                  <a href="#" className="hover:text-blue-600 transition" title="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="hover:text-blue-400 transition" title="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" className="hover:text-black transition" title="GitHub">
                    <FaGithub />
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-xl sm:text-2xl font-semibold mb-6">
            Ready to transform your trading career?
          </p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-10 py-4 rounded-lg shadow-lg transition-all duration-300">
            Join Capital Curv
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
