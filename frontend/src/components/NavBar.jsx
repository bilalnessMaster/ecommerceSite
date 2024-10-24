import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../app.css";
import { useCarteStore } from "../Stores/useCarteStore";
import ShoppingCart from "./ShoppingCart";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {cartItems} = useCarteStore()
  return (
    
<>
    <header className=" top-0 max-w-screen-2xl mx-auto py-4 text-lg ">
      <nav className="container  mx-auto flex items-center justify-between ">
        <ul className=" justify-center items-center gap-5 hidden md:flex">
          <li>
            <Link to="/" className="hover:text-red-600">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-red-600" to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className="hover:text-red-600" to="/">
              Page
            </Link>
          </li>
          <li>
            <Link className="hover:text-red-600" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div>
          {/* logo */}
          <Link to="/" className="font-play text-4xl">
            Lebab<span className="text-orange-400">.</span>
          </Link>
        </div>
        {/* nav icons */}

        <div className="flex items-center gap-5 relative">
          <span>
            <Link to="/search">
              <i className="ri-search-line"></i>
            </Link>
          </span>
          <span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative hover:text-red-600"
            >
              <i className="ri-shopping-bag-line"></i>
              <span className="absolute -top-1 -right-3  w-fit px-[5px] text-sm  rounded-full text-white bg-red-600">
                {cartItems.length}
              </span>
            </button>
          </span>
          <span>
            <Link to="/login">
              <i className="ri-user-line"></i>
            </Link>
          </span>
        </div>
      </nav>
    </header>
      {isOpen && <ShoppingCart isOpen={isOpen} setIsOpen={setIsOpen} />}
      </>
  );
};

export default NavBar;
