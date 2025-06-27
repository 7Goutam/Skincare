import React, { useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<header className="bg-[#EFF5E1] px-4 sm:px-6 lg:px-10 py-6">
<nav className="max-w-screen-xl mx-auto w-full flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <h1 className="text-[26px] sm:text-[30px] font-bold">SKINCARE</h1>

        

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-6 md:gap-10 text-[18px] sm:text-[20px] tracking-tighter absolute md:static bg-[#EFF5E1] md:bg-transparent left-0 w-full md:w-auto top-[80px] md:top-auto p-6 md:p-0 z-20`}
        >
          <li><a href="#">All Products</a></li>
          <li><a href="#">Serum</a></li>
          <li><a href="#">Sunscreen</a></li>
          <li><a href="#">Bundle</a></li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2" role="button" aria-label="Shopping Cart">
            <ShoppingCart size={22} />
            <span className="text-[18px] sm:text-[20px]">Cart(1)</span>
          </div>
          <User size={22} role="button" aria-label="User Profile" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
