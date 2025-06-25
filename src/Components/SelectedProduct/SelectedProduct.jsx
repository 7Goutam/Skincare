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

export default function SelectedProduct() {
  return (
    <section className="bg-[#FEFFF4] px-10 py-16">
      <div className="max-w-[1800px] mx-auto">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
          

          
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-3 gap-10 place-items-center">
          {products.map((product, idx) => (
            <div
  key={idx}
  className="w-[560px] h-[770px] bg-white rounded-[20px] shadow-md overflow-hidden relative"
>
  {/* Image with overlay bar */}
  <div className="relative w-full h-[770px]">
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-full object-cover"
    />

    {/* Overlay info bar */}
    <div className="absolute bottom-4 left-4 right-4 bg-[#F9FBEF] rounded-[12px] px-4 py-4 flex items-center justify-between shadow-md">
      <div>
        <h3 className="text-[20px] -mt-3 text-[#1A1A1A]">
          {product.title}
        </h3>
        <p className="text-[16px] mt-2 text-[#4F4F4F]">{product.price}</p>
      </div>
      <button className="bg-[#2D3B361A] opacity-70 w-[80px] h-[80px] p-3 rounded-lg">
        <FiShoppingCart size={25} className="self-center items-center justify-center ml-4 text-[#1A1A1A]" />
      </button>
    </div>
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
}
