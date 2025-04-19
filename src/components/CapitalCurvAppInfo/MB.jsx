import React, { useEffect, useState } from "react";
import mb from "../../assets/Mb.png";

const MB = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100); // delay for smooth feel
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0f3D3E] text-white text-center px-4 transition-all duration-700 ease-in-out">
      <div
        className={`transition-all duration-1000 ease-in-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <img src={mb} alt="Mobile Banner" className="w-full max-w-sm" />
      </div>
    </div>
  );
};

export default MB;
