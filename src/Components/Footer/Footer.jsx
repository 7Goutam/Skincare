import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1A2A24] text-white relative px-6 py-24 md:py-32 min-h-[700px] overflow-hidden">
      {/* Background Text */}
      <h1 className="absolute text-[200px] md:text-[300px] lg:text-[380px] font-bold text-[#3D4B4680] opacity-50 bottom-[-80px] left-1/2 -translate-x-1/2 z-0 select-none pointer-events-none uppercase leading-none">
        SKINCARE
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-[48px] font-inter font-semibold mb-10">
            Join The Skincare <br /> Community Now.
          </h2>
          <div className="flex gap-10 mt-35 text-[20px] text-gray-300">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between items-start md:items-end">
          <div className="text-left md:text-right">
            <p className="text-[20px] text-gray-300 mb-2">Get in Touch</p>
            <a
              href="mailto:contact@skincare.com"
              className="text-[36px] font-light"
            >
              contact@skincare.com
            </a>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-8 mt-8 text-[16px] text-gray-300">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
