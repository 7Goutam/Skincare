import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1A2A24] text-white relative px-6 py-24 md:py-32 min-h-[700px] overflow-hidden">
      {/* Background Text */}
     {/* Background Text - Desktop */}
<div className="absolute inset-0 hidden sm:flex justify-center -mb-25 items-end z-0 pointer-events-none select-none">
  <h1 className="text-[160px] md:text-[250px] lg:text-[378px] font-extrabold font-inter leading-[1] uppercase text-[#2d3b36] opacity-20 whitespace-nowrap">
    SKINCARE
  </h1>
</div>

{/* Background Text - Mobile */}
<div className="sm:hidden absolute mt-130 inset-1 flex justify-center items-center z-0 pointer-events-none select-none">
  <h1 className="text-[85px] xs:text-[90px] font-extrabold font-inter leading-[1] uppercase text-[#2d3b36] opacity-20 text-center">
    SKINCARE
  </h1>
</div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Section */}
        <div className="flex flex-col justify-between">
          <h2 className="text-3xl md:text-[48px] font-inter font-semibold mb-10">
            Join The Skincare <br /> Community Now.
          </h2>
          <div className="flex gap-8 mt-6 text-[20px] text-gray-300">
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between items-start md:items-end space-y-8 md:space-y-0">
          <div className="text-left md:text-right">
            <p className="text-[20px] text-gray-300 mb-2">Get in Touch</p>
            <a
              href="mailto:contact@skincare.com"
              className="text-[28px] sm:text-[32px] md:text-[36px] font-light break-words"
            >
              contact@skincare.com
            </a>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-8 text-[16px] text-gray-300">
            <a href="#" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
