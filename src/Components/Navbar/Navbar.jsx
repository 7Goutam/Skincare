import React from 'react'
import { ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between bg-[#EFF5E1] items-center px-10 py-6">
      <h1 className="text-[30px] font-bold">SKINCARE</h1>
      <nav className="space-x-[100px] text-[20px] tracking-tighter">
        <a href="#">All Products</a>
        <a href="#">Serum</a>
        <a href="#">Sunscreen</a>
        <a href="#">Bundle</a>
      </nav>
      <div className="flex space-x-[85px] items-center mr-15">
        <ShoppingCart size={20} />
        <span className="text-[20px]">Cart(1)</span>
        <User size={20} />
      </div>
    </nav>
    </>
  )
}

export default Navbar