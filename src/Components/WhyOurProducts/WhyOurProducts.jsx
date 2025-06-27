import React from "react";
import patchImage from "/images/face.png";
import award from "/images/award.png";
import { GoDotFill } from "react-icons/go";

export default function WhyOurProducts() {
  return (
    <section className="bg-[#FEFFF4] px-4 sm:px-6 lg:px-20 py-24">
      {/* Intro Text */}
      <p className="text-[20px] md:text-[31px] lg:text-[53px] font-inter text-[#2D3B36] leading-tight max-w-[1900px] mx-auto mb-32 text-center">
        Experience the ultimate in skincare with our expertly formulated products,
        crafted to nourish, protect, and rejuvenate your skin. Combining the finest
        natural ingredients with{" "}
        <span className=" md:text-[#2D3B364D] lg:text-[#2D3B364D]">
          advanced science, our collection ensures every skin type can achieve a
          radiant, healthy glow. Embrace your beauty with confidence every day.
        </span>
      </p>

      {/* Grid Container */}
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-16 lg:gap-20 max-w-[1800px]">
        {/* Left Content */}
        <div className="space-y-10">
          <button className="w-fit h-[60px] text-[#2D3B36] font-inter flex items-center gap-3 px-6 py-2 border-2 border-[#2D3B36] text-[20px] rounded-full shadow">
            <GoDotFill size={20} className="text-[#1A1A1A]" />
            Why Our Products
          </button>

          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-inter text-[#2D3B36] leading-tight">
            YOUR SKIN DESERVES <br className="hidden md:block" /> THE BEST CARE.
          </h2>

          <p className="text-[#525349] text-[18px] max-w-8xl leading-relaxed">
            Discover a curated collection of skincare products designed to rejuvenate,
            protect, and pamper your skin. Explore our range crafted with love backed
            by science, and inspired by nature.
          </p>

          {/* Features */}
          <div className="space-y-16">
            {[
              {
                number: "01",
                title: "Bio Ingredients",
                desc: "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.",
              },
              {
                number: "02",
                title: "Everything Natural",
                desc: "Pure ingredients for pure skin. The perfect solution for your skincare needs.",
              },
              {
                number: "03",
                title: "All Handmade",
                desc: "Made with love and care. Just for you. Give your skin the tender loving care it deserves.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="text-[34px] md:text-[60px] bg-gradient-to-b from-[#293330] to-[#FEFFF4] text-transparent bg-clip-text font-semibold min-w-[60px]">
                  {item.number}
                </div>
                <div>
                  <h3 className="text-[28px] md:text-[42px] font-semibold text-[#2D3B36] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[16px] md:text-[18px] mt-4 text-[#4F4F4F] max-w-md">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full max-w-[999px] aspect-[849/1081] mx-auto">
          <img
            src={patchImage}
            alt="Face Care"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Floating Award Box */}
          <div className="absolute bottom-6 md:bottom-16 left-1/2 -translate-x-1/2 bg-[#EFF5E1] text-[16px] md:text-[18px] px-4 py-3 w-[90%] md:w-[420px] rounded-full shadow flex items-center gap-4">
            <span className="bg-[#1A1A1A] p-3 rounded-full flex items-center justify-center">
              <img src={award} alt="Award" className="w-[40px] h-[40px]" />
            </span>
            <span>
              Best Skin Care Product <br />
              Award Winning
            </span>
          </div>

          {/* Footer Text */}
          <div className="flex justify-between text-[#2D3B36] text-[14px] md:text-[20px] mt-6 px-2">
            <span>SINCE 2001</span>
            <span className="underline cursor-pointer">LEARN MORE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
