import React from "react";
import patchImage from "/images/face.png"; 
import award from "/images/award.png"; // replace with your image path
import { GoDotFill } from "react-icons/go";


export default function WhyOurProducts() {
  return (
    <section className="bg-#FEFFF4 py-16 px-6 md:px-20 ">
        <p className=" font-inter text-[53px] text-[#2D3B36] ">
        Experience the ultimate in skincare with our expertly formulated products,
crafted to nourish, protect, and rejuvenate your skin. Combining the finest
natural ingredients with <span className="text-[#2D3B364D]">
advanced science, our collection ensures every
skin type can achieve a radiant, healthy glow. Embrace your beauty with
confidence every day. Experience the ultimate in skincare with our 
expertly formulated products, crafted to nourish, protect, and rejuvenate
your skin.
</span>
        </p>
      <div className=" mt-[322px] grid grid-cols-1 md:grid-cols-2 items-center gap-1">

        {/* Left Content */}
        <div className="space-y-7 self-start">
        <button className="w-[260px] h-[60px] text-[#2D3B36] font-inter flex items-center self-start  mt-22 gap-3 px-6 py-2 bg-white border-2 border-[#2D3B36]  text-[20px] rounded-full shadow ">
  <GoDotFill size={20} className="text-[#1A1A1A]" />
  Why Our Products 
</button>

          <h2 className="text-[40px] md:text-5xl font-inter mt-[100px] text-[#2D3B36] leading-tight">
            YOUR SKIN DESERVES <br className="hidden md:block" /> THE BEST CARE.
          </h2>

          <p className=" mt-[35px] text-[#525349] text-[18px]  w-[611px] leading-relaxed">
            Discover a curated collection of skincare products designed to rejuvenate,
            protect, and pamper your skin. Explore our range crafted with love backed
            by science, and inspired by nature.
          </p>

          {/* Features List */}


         <div className="space-y-[80px] mt-22">
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
    <div key={idx} className="flex flex-col md:flex-row gap-[40px] md:gap-[50px] items-start">
      {/* Number */}
      <div className=" -mt-2 text-[48px] md:text-[60px] font-medium text-gray-400 min-w-[60px]">
        {item.number}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-[48px] md:text-[60px] font-semibold text-[#1A1A1A] leading-tight">
          {item.title}
        </h3>
        <p className="text-[16px] md:text-[18px] mt-[20px] md:mt-[50px] w-full md:w-[411px] text-[#4F4F4F]">
          {item.desc}
        </p>
      </div>
    </div>
  ))}
</div>

        </div>

        {/* Right Image Section */}
        <div className="-ml-25 relative w-[849px] h-[1081px] mx-auto">
          <img
            src={patchImage}
            alt="Face Care"
            className="rounded-2xl w-[849px] h-[1081px] object-cover"
          />
         <div className="gap-7">
         <div className="absolute bottom-22 left-55 bg-[#EFF5E1] text-[20px] px-4 w-[400px] h-[100px]  py-2 rounded-full shadow flex items-center gap-2">
            <span className="bg-[#1A1A1A] gap-5 text-lg text-white  p-5 rounded-full">
              <img src={award} alt="" className="size-[50px]" />
            </span >
           <span className="ml-6">
           Best Skin Care Product<br />Award Winning
           </span>
          </div>
         </div>
          <div className="flex justify-between text-[#2D3B36] mt-4 px-1">
            <span className="text-[20px]">SINCE 2001</span>
            <span className="underline text-[20px] cursor-pointer">LEARN MORE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
