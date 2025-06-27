import React from "react";
import heroImg from "/images/hero.png";
import plumImg from "/images/plum.jpg";

export default function Hero() {
  return (
    <section className="bg-[#EFF5E1] relative px-4 sm:px-6 pt-10 pb-[100px] overflow-hidden">
      
      {/* SKINCARE Background Text */}
      <div className="absolute inset-0 justify-center items-end z-0 hidden sm:flex">
        <h1 className="text-[100px] sm:text-[160px] md:text-[250px] lg:text-[378px] font-extrabold font-inter leading-[1] tracking-normal uppercase text-[#2d3b36] opacity-90 pointer-events-none select-none whitespace-nowrap">
          SKINCARE
        </h1>
      </div>

      {/* Mobile SKINCARE Text Below Image */}
      <div className="block sm:hidden -mt-10 mb-4">
        <h1 className="text-[90px] font-extrabold font-inter leading-[1] tracking-tighter uppercase text-[#2d3b36] opacity-90 text-center whitespace-nowrap">
          SKINCARE
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-10 max-w-[1600px] mx-auto">
        
        {/* Left Column */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-12 max-w-md w-full">
          <p className="font-inter text-[18px] text-[#2D3B36] sm:text-[20px] leading-tight indent-10 sm:indent-16 mb-6">
            Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
          </p>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col items-center text-center w-full">
          <h2 className="text-[50px] text-[#2D3B36] sm:text-[70px] md:text-[100px] font-bold uppercase leading-[1] tracking-tight font-inter mb-6 z-10">
            GLOW<br />NATUR-<br />ALLY
          </h2>

          {/* Hero Image */}
          <div className="relative w-full max-w-[610px] aspect-[9/10] z-10">
            <img
              src={heroImg}
              alt="Hero"
              className="rounded-xl w-full h-full object-cover"
            />
            
            {/* Award Badge Overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#EFF5E1] shadow px-4 sm:px-6 py-4 rounded-full w-[90%] max-w-[460px] flex items-center">
              <img
                src={plumImg}
                alt="Plum"
                className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] mr-4 rounded-full object-cover"
              />
              <p className="text-left text-[16px] sm:text-[18px]">
                While giving you an invigorating<br />cleansing experience.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="px-4 md:px-12 mt-6 md:mt-9 flex justify-center md:justify-end w-full z-10">
          <img
            src={plumImg}
            alt="Product"
            className="w-[220px] h-[222px] rounded-lg shadow object-cover"
          />
        </div>
      </div>

      {/* Shop Now Button — Mobile */}
      <div className="md:hidden mt-10 flex justify-center">
        <button className="bg-gray-800 text-white w-[180px] h-[60px] text-[20px] rounded-full">
          Shop Now
        </button>
      </div>

      {/* Shop Now Button — Desktop */}
      <div className="hidden md:block absolute left-[172px] top-[555px]">
        <button className="bg-gray-800 text-white w-[180px] h-[60px] text-[20px] rounded-full">
          Shop Now
        </button>
      </div>
    </section>
  );
}
