import React from "react";
import { ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-[#EFF5E1] px-6 sm:px-10 py-6">
      <nav className="max-w-8xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <h1 className="text-[26px] sm:text-[30px] font-bold">SKINCARE</h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-10 text-[18px] sm:text-[20px] tracking-tighter">
          <li><a href="#">All Products</a></li>
          <li><a href="#">Serum</a></li>
          <li><a href="#">Sunscreen</a></li>
          <li><a href="#">Bundle</a></li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2">
            <ShoppingCart size={22} />
            <span className="text-[18px] sm:text-[20px]">Cart(1)</span>
          </div>
          <User size={22} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
