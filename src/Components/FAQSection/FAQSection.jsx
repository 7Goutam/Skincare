import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { BiHeadphone } from "react-icons/bi";
import productImg from "/images/faq-product.jpg"; // replace with your image path

const faqs = [
  {
    question: "Are your products safe for sensitive skin?",
    answer: "",
  },
  {
    question: "Are your products cruelty-free?",
    answer:
      "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
  },
  {
    question: "What's your return policy?",
    answer: "",
  },
  {
    question: "Do you ship internationally?",
    answer: "",
  },
  {
    question: "How do I choose the right product?",
    answer: "",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(1); // Second FAQ is open by default

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    
    <section className="bg-[#EFF5E1] px-6 py-20">
      <div className="max-w-8xl ml-13 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <div className="relative w-full  mx-auto">
          <img
            src={productImg}
            alt="Product"
            className="rounded-2xl object-cover w-[850px] h-[900px]"
          />
          <div className="absolute bottom-5  h-[100px] w-[306px]  left-64 bg-[#DCEAD5] px-4 py-2 rounded-full flex items-center text-[20px]  gap-6 shadow">
            <div className=" h-[80px] w-[80px] bg-[#2D3B36] rounded-[50px] items-center justify-center">
            <BiHeadphone size={40} className="text-white self-center ml-2 mt-5" />

            </div >
            24/7 We're Here to Help You
          </div>
        </div>

        {/* Text Side */}
        <div className="self-start ml-15 ">
          <button className="flex items-start gap-4 w-[341px] h-[60px] px-6 py-4 border-1 text-xl rounded-full shadow mb-4">
            <span className="w-4 h-4 mt-2 bg-[#1A1A1A] rounded-full"></span>
            Frequently Asked Question
          </button>

          <h2 className="text-[60px] md:text-[60px]  mt-25 font-inter  text-[#1A1A1A] mb-8 leading-tight">
            Answers to Your <br />
            Skincare Questions, All <br />
            in One Place.
          </h2>

          <div className="max-w-6xl h-[70px] w-[600px]  space-y-4 px-4">
      {faqs.map((faq, idx) => (
        <div key={idx} className="border rounded-lg overflow-hidden shadow transition-all">
          <button
            onClick={() => toggleFAQ(idx)}
            className="w-full flex justify-between items-center px-6 py-4  text-left text-lg font-medium text-[#1A1A1A]"
          >
            {faq.question}
            <span className="text-2xl font-bold">{openIndex === idx ? "−" : "+"}</span>
          </button>

          <div
            className={`px-6 transition-all duration-500 ease-in-out text-sm text-gray-600 overflow-hidden ${
              openIndex === idx ? "max-h-[200px] bg- py-4" : "max-h-0"
            }`}
          >
            <div className=" max-h-[200px] :" >{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
        </div>
      </div>
    </section>
  );
}
