"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((preState) => !preState);
  };

  return (
    <nav className="p-4 sticky top-0 bg-slate-100 drop-shadow-xl z-60">
      <div className="container mx-auto flex items-baseline justify-between md:justify-around">
        <div className="text-black font-semibold text-2xl hover:cursor-pointer justify-between">
          <Link
            href="/"
            className="decoration-6 underline decoration-purple-700"
          >
            SrinuMobiles
          </Link>
        </div>
        <div className="hidden md:flex space-x-14 text-black ">
          <Link
            href="#"
            className="cursor-pointer rounded-full text-center capitalize decoration-orange-400 decoration-2 underline-offset-8 transition-transform duration-200 ease-out hover:scale-110 hover:font-bold hover:underline active:underline dark:text-gray-100"
          >
            Home
          </Link>
          <Link
            href="#aboutSection"
            className="cursor-pointer rounded-full text-center capitalize decoration-orange-400 decoration-2 underline-offset-8 transition-transform duration-200 ease-out hover:scale-110 hover:font-bold hover:underline active:underline dark:text-gray-100"
          >
            About
          </Link>
          <Link
            href="#contactSection"
            className="cursor-pointer rounded-full text-center capitalize decoration-orange-400 decoration-2 underline-offset-8 transition-transform duration-200 ease-out hover:scale-110 hover:font-bold hover:underline active:underline dark:text-gray-100"
          >
            Contact Us
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            className=" focus:outline-none"
            onClick={toggleMenu}
            type="button"
          >
            <svg
              className="w-8 h-8 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/*  small screen mobile */}
      </div>

      {isOpen && (
        <div className={`md:hidden absolute top-14 right-7 bg-transparent`}>
          <div className="flex flex-col space-y-6">
            <Link
              href="/"
              className="block text-black p-2 cursor-pointer capitalize decoration-orange-400 decoration-2 underline-offset-8 transition-transform duration-200 ease-out hover:scale-110 hover:font-bold hover:underline active:underline dark:text-gray-100"
            >
              Home
            </Link>
            <Link
              href="#aboutSection"
              className="block text-black p-2 cursor-pointer capitalize decoration-orange-400 decoration-2 underline-offset-8 transition-transform duration-200 ease-out hover:scale-110 hover:font-bold hover:underline active:underline dark:text-gray-100"
            >
              About
            </Link>
            <Link
              href="#contactSection"
              className="block text-black p-2 cursor-pointer capitalize decoration-orange-400 decoration-2 underline-offset-8 transition-transform duration-200 ease-out hover:scale-110 hover:font-bold hover:underline active:underline dark:text-gray-100"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
