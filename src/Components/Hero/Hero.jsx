import React from "react";
import heroImg from "/images/hero.png";
import plumImg from "/images/plum.jpg";

export default function Hero() {
  return (
    <section className=" bg-[#EFF5E1] relative px-6 py-10 overflow-hidden">
      {/* Background Text */}
      <h1 className="text-[140px] sm:text-[200px] md:text-[300px] lg:text-[378px] font-extrabold font-inter leading-[1] tracking-normal uppercase text-[#2d3b36] opacity-90 absolute bottom-[-30px] left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none">
  SKINCARE
</h1>

      {/* Foreground Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start text-center md:text-left">
        
        {/* Left Column */}
        <div className="justify-self-center max-w-sm mx-auto md:mx-0">
        <p className="mt-25 font-inter font-normal text-[20px] leading-[1] tracking-normal indent-[105px]">
        Transform your skincare routine with premium products that restore, protect, and enhance your nautural glow every day.
</p>
          <button className="bg-gray-800 text-white px-6 py-2 rounded-full w-[180px] h-[60px] text-[20px] mt-112 -ml-[30px]">
            Shop Now
          </button>
        </div>

        {/* Middle Column */}
        <div className="self-center text-left">
          <h2 className="text-[100px] uppercase font-bold ml-10 leading-[90px] tracking-[-0.03em] font-inter mb-14">
            GLOW<br />NATUR-<br />ALLY
          </h2>
          <div className="relative w-[610px] h-[676px] mx-auto">
            <img src={heroImg} alt="Hero" className="rounded-xl w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 w-[476px] h-[100px] ml-15 px-2 py-2 rounded-full bg-[#EFF5E1] text-[20px] shadow flex items-center text-xs">
              <img src={plumImg} alt="Plum" className="w-[80px] h-[80px] mr-2 rounded-full" />
              <p className="px-8">While giving you an invigorating <br /> cleansing experience.</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="justify-self-center ml-22 -mr-8 mt-5 flex justify-center md:justify-end">
          <img src={plumImg} alt="Product" className="w-[222px] h-[220px]  rounded-lg shadow object-cover" />
        </div>
      </div>
    </section>
  );
}
