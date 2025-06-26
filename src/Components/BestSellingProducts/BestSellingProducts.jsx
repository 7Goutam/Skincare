import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import product1 from "/images/product1.jpg";
import product2 from "/images/product2.jpg";
import product3 from "/images/product3.jpg";

const products = [
  {
    image: product1,
    title: "ALYA SKIN CLEANSER.",
    price: "FROM $29.99",
  },
  {
    image: product2,
    title: "RITUAL OF SAKURA.",
    price: "FROM $27.99",
  },
  {
    image: product3,
    title: "THE BODY LOTION.",
    price: "FROM $19.99",
  },
];

export default function BestSellingProducts() {
  return (
    <section className="bg-[#FEFFF4] px-4 md:px-10 py-16">
      <div className="max-w-[1800px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-8 text-center lg:text-left">
          <button className="flex items-center gap-3 px-6 py-2 bg-white text-lg rounded-full shadow">
            <span className="w-4 h-4 bg-[#2D3B36] rounded-full"></span>
            Best Selling Products
          </button>

          <h2 className="text-[32px] sm:text-[40px] font-medium text-[#2D3B36] leading-snug">
            Skincare That Brings Out <br className="md:hidden" />
            Your Natural Radiance
          </h2>

          {/* Arrows only visible on large screens */}
          <div className="hidden lg:flex gap-6">
            <button className="w-25 h-25 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow">
              &#8592;
            </button>
            <button className="w-25 h-25 md:w-16 md:h-16 bg-[#2D3B36] text-white rounded-full flex items-center justify-center shadow">
              &#8594;
            </button>
          </div>
        </div>

        {/* Responsive Layout */}
        <div className="lg:grid lg:grid-cols-3 gap-10 hidden">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="w-full max-w-[560px] h-[770px] bg-white rounded-[20px] shadow-md overflow-hidden"
            >
              <div className="relative w-full h-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#F9FBEF] rounded-[12px] px-4 py-4 flex items-center justify-between shadow-md">
                  <div>
                    <h3 className="text-[18px] sm:text-[20px] font-medium text-[#2D3B36]">
                      {product.title}
                    </h3>
                    <p className="text-[14px] sm:text-[16px] text-[#4F4F4F]">
                      {product.price}
                    </p>
                  </div>
                  <button
                    className={`${
                      idx === 5 ? "bg-[#1A1A1A]" : "bg-[#2D3B361A]"
                    } opacity-90 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex items-center justify-center rounded-lg`}
                  >
                    <FiShoppingCart
                      size={22}
                      className={`${
                        idx === 5 ? "text-white" : "text-[#1A1A1A]"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

{/* Mobile scrollable product list */}
<div className="lg:hidden mt-8 overflow-x-auto">
  <div className="flex gap-6 px-2 w-max">
    {products.map((product, idx) => (
      <div
        key={idx}
        className="min-w-[280px] max-w-[320px] h-[600px] bg-white rounded-[20px] shadow-md overflow-hidden"
      >
        <div className="relative w-full h-full">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-[#F9FBEF] rounded-[12px] px-4 py-4 flex items-center justify-between shadow-md">
            <div>
              <h3 className="text-[18px] font-medium text-[#2D3B36]">
                {product.title}
              </h3>
              <p className="text-[14px] text-[#4F4F4F]">{product.price}</p>
            </div>
            <button
              className={`${
                idx === 1 ? "bg-[#1A1A1A]" : "bg-[#2D3B361A]"
              } opacity-90 w-[50px] h-[50px] flex items-center justify-center rounded-lg`}
            >
              <FiShoppingCart
                size={22}
                className={`${
                  idx === 1 ? "text-white" : "text-[#1A1A1A]"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Arrows below on mobile */}
  <div className="flex justify-center gap-8 mt-6">
    <button className="w-25 h-25 bg-white rounded-full flex items-center justify-center shadow">
      &#8592;
    </button>
    <button className="w-25 h-25 bg-[#2D3B36] text-white rounded-full flex items-center justify-center shadow">
      &#8594;
    </button>
  </div>
</div>
      </div>
    </section>
  );
}
