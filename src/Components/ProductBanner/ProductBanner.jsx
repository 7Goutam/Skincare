import React from "react";
import heroImg from "/images/hero-banner.png"; // Replace with actual image

export default function ProductBanner() {
  return (
    <section className="bg-[#FEFFF4] px-4 md:px-10 py-16 flex flex-col items-center gap-20 mt-11">
      {/* HERO IMAGE SECTION */}
      <div className="relative w-full max-w-[1719px] rounded-2xl overflow-hidden">
        <img
          src={heroImg}
          alt="Hero"
          className="w-full h-[600px] md:h-[850px] lg:h-[1146px] object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Text Over Image */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center px-4 text-white">
          <h2 className="text-[32px] md:text-[48px] lg:text-[68px] font-inter font-semibold leading-[1.2] mb-6 tracking-tight">
            Feel Beautiful Inside and Out with Every Product.
          </h2>
          <button className="bg-white text-black w-[180px] h-[60px] px-6 py-2 rounded-full shadow text-[18px] md:text-[20px] font-medium hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* BELOW HERO: TEXT HEADING + FILTER TAGS */}
      <div className="text-center space-y-8">
        <h2 className="text-[32px] md:text-[42px] lg:text-[50px] font-inter text-[#2D3B36]  leading-tight">
          Feel Beautiful Inside and Out <br className="hidden md:block" /> with
          Every Product.
        </h2>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {["New Arrival", "Cleansing", "Acne Fighter", "Anti Ageing"].map(
            (tag, i) => (
              <button
                key={i}
                className={`px-6 py-2 rounded-full text-[16px] md:text-[18px] border ${
                  i === 0
                    ? "bg-[#1A1A1A] text-white"
                    : "bg-white text-[#2D3B36] border-[#E0E0E0]"
                }`}
              >
                {tag.toUpperCase()}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}
