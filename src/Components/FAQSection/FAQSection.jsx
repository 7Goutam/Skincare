import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { BiHeadphone } from "react-icons/bi";
import productImg from "/images/faq-product.jpg";

const faqs = [
  {
    question: "Are your products safe for sensitive skin?",
    answer: "Yes! Our products are dermatologically tested and safe for sensitive skin.",
  },
  {
    question: "Are your products cruelty-free?",
    answer: "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
  },
  {
    question: "What's your return policy?",
    answer: "We offer a 30-day hassle-free return policy for unused and unopened items.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide. Delivery times and charges vary based on location.",
  },
  {
    question: "How do I choose the right product?",
    answer: "Refer to our product guide or speak with our skincare experts via chat support.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(1);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FEFFF4] px-6 py-20">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* FAQ Text Side – comes first on mobile */}
        <div className="order-1 md:order-2">
          <button className="flex items-center gap-3 w-fit px-6 py-3 border border-[#1A1A1A] text-lg rounded-full shadow mb-6">
            <span className="w-3 h-3 bg-[#1A1A1A] rounded-full"></span>
            Frequently Asked Questions
          </button>

          <h2 className="text-[42px] sm:text-[54px] font-inter text-[#1A1A1A] mb-10 leading-tight">
            Answers to Your <br /> Skincare Questions, <br /> All in One Place.
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border rounded-xl bg-white shadow md:w-3xl ">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-[#1A1A1A]"
                >
                  {faq.question}
                  <span className="text-2xl font-bold">
                    {openIndex === idx ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`transition-all duration-500 overflow-hidden px-6 ${
                    openIndex === idx ? "max-h-[300px] py-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-[16px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Side – comes second on mobile */}
        <div className="relative order-2 md:order-1 w-full">
          <img
            src={productImg}
            alt="Product"
            className="rounded-2xl object-cover w-full max-w-[850px] h-[900px]"
          />
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#DCEAD5] px-6 py-4 rounded-full flex items-center text-[18px] gap-5 shadow-lg w-[320px]">
            <div className="h-[60px] w-[60px] flex items-center justify-center bg-[#2D3B36] rounded-full">
              <BiHeadphone size={28} className="text-white" />
            </div>
            <span>24/7 We're Here to Help You</span>
          </div>
        </div>
      </div>
    </section>
  );
}
