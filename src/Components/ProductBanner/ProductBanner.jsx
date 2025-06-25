import React from "react";
import heroImg from "/images/hero-banner.png"; // replace with your image path

export default function ProductBanner() {
  return (
    <section className="bg-[#FEFFF4] px-6 py-16 flex flex-col items-center gap-20 mt-11">
      
      {/* HERO IMAGE SECTION */}
      <div className="relative  max-w-10xl rounded-2xl overflow-hidden">
        <img
          src={heroImg}
          alt="Hero"
          className="w-[1719px] h-[1146px] object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Text Over Image */}
        <div className="absolute ml-65 bottom-20 left-1/3 self-center  transform -translate-x-1/2 text-center text-white">
  <h2 className="text-[48px] md:text-[68px] font-inter leading-[1.1] mb-6 tracking-tight">
    Feel Beautiful Inside and Out with Every Product.
  </h2>
  <button className="bg-white mt-5 text-black w-[180px] h-[60px] px-6 py-2 rounded-full shadow text-[20px] font-medium hover:bg-gray-100 transition">
    Shop Now
  </button>
</div>

      </div>

      {/* BELOW HERO: TEXT HEADING + FILTER TAGS */}
      <div className="text-center space-y-8">
        <h2 className="text-[60px] md:text-[50px] font-inter text-[#1A1A1A]">
          Feel Beautiful Inside and Out <br /> with Every Product.
        </h2>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-6">
          {["New Arrival", "Cleansing", "Acne Fighter", "Anti Ageing"].map(
            (tag, i) => (
              <button
                key={i}
                className={`px-6 py-2 rounded-full text-[18px] border ${
                  i === 0
                    ? "bg-[#1A1A1A] text-white"
                    : "bg-white text-[#1A1A1A] border-[#E0E0E0]"
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
