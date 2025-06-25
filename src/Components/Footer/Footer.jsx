import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1A2A24] text-white relative w-[1930px] h-[930px] overflow-hidden px-6 py-16 md:py-22 opacity-90">
      {/* Large background text */}
      <h1 className=" absolute text-[280px] md:text-[380px] font-bold text-[#3D4B4680] opacity-50 bottom-[-80px] left-0 z-0 select-none pointer-events-none uppercase leading-none">
        SKINCARE
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl -ml-39 md:text-[60px] font-inter mt-25 mb-6">
            Join The Skincare <br /> Community Now.
          </h2>
          <div className="flex -ml-39 gap-15 mt-70 text-[20px] text-gray-300">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between mt-25 items-start md:items-end">
          <div className="text-left">
            <p className="text-sm text-gray-300 text-[30px]  mb-1">Get in Touch</p>
            <a href="mailto:contact@skincare.com" className="text-[60px] md:text-[60px] font-light text-white">
              contact.skincare.com
            </a>
          </div>
          <div className="flex gap-12 text-[20px] text-gray-300 mt-10">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
