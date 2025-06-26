import React from "react";
import patchImage from "/images/face.png";
import award from "/images/award.png";
import { GoDotFill } from "react-icons/go";

export default function WhyOurProducts() {
  return (
    <section className="bg-[#FEFFF4] px-6 md:px-20 py-24">
      {/* Intro Text */}
      <p className="text-[20px] md:text-[31px] lg:text-[53px] font-inter text-[#2D3B36] leading-tight max-w-8xl mx-auto mb-32 text-center">
        Experience the ultimate in skincare with our expertly formulated products,
        crafted to nourish, protect, and rejuvenate your skin. Combining the finest
        natural ingredients with <span className="text-[#2D3B36]/30">advanced science, our collection ensures every
        skin type can achieve a radiant, healthy glow. Embrace your beauty with
        confidence every day.</span>
      </p>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-20">
        {/* Left Content */}
        <div className="space-y-10">
          <button className="w-fit h-[60px] text-[#2D3B36] font-inter flex items-center gap-3 px-6 py-2 border-2 border-[#2D3B36] text-[20px] rounded-full shadow">
            <GoDotFill size={20} className="text-[#1A1A1A]" />
            Why Our Products
          </button>

          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-inter text-[#2D3B36] leading-tight">
            YOUR SKIN DESERVES <br className="hidden md:block" /> THE BEST CARE.
          </h2>

          <p className="text-[#525349] text-[18px] max-w-xl leading-relaxed">
            Discover a curated collection of skincare products designed to rejuvenate,
            protect, and pamper your skin. Explore our range crafted with love backed
            by science, and inspired by nature.
          </p>

          {/* Features List */}
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
                <div className="text-[34px] md:text-[60px] lg:text-[60px] -mt-2 font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#293330] to-[#FEFFF4] min-w-[60px]">{item.number}</div>
                <div>
                  <h3 className="text-[34px] md:text-[60px] lg:text-[60px] font-semibold text-[#2D3B36] ] leading-tight">
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

        {/* Right Image Section */}
    <div className="relative w-full max-w-[849px] aspect-[849/1081] mx-auto">
  <img
    src={patchImage}
    alt="Face Care"
    className="w-full h-full object-cover rounded-2xl"
  />

  {/* Floating Button on Image */}
  <div className="absolute bottom-16 md:bottom-32 left-1/2 -translate-x-1/2 bg-[#EFF5E1] text-[16px] md:text-[18px] px-4 py-3 w-[90%] md:w-[420px] rounded-full shadow flex items-center gap-4">
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
