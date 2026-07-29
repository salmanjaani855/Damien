import React, { useState } from "react";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="nav-load">
      <div className="w-full relative bg-black border-gray-100 border-solid border-b-[1px] box-border flex flex-col items-start pt-6 px-4 md:px-[125px] text-left text-num-18 text-white font-manrope">
        <div className="self-stretch border-gray-100 border-solid border-r-[1px] border-l-[1px] flex items-center justify-between py-3 px-4 md:px-10 relative isolate">

          {/* Logo */}
          <img
            className="h-[27px] w-[134.1px]"
            src={Logo}
            alt="Logo"
          />

          {/* Desktop Contact Button */}
          <a
            href="#contact"
            className="hidden md:flex rounded-[12px] overflow-hidden items-center"
          >
            <button className="btn-animate relative leading-[140%] font-medium bg-gray-200 border-gray-100 border-solid border-[1px] py-3 px-[30px] text-white rounded-xl">
              Contact Me
            </button>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block absolute bottom-0 left-[calc(50%_-_308px)] rounded-t-xl rounded-b-none border-gray-100 border-solid border-t-[1px] border-r-[1px] border-l-[1px] overflow-hidden text-darkgray z-10">
            <ul className="flex items-center">
              <li className="bg-gray-200 border-gray-100 border-solid border-[1px] py-num-30 px-[50px] text-white">
                <a href="#home" className="leading-[150%] font-medium">
                  Home
                </a>
              </li>

              <li className="border-gray-100 border-solid border-r-[1px] py-num-30 px-10">
                <a href="#about" className="leading-[150%] font-medium">
                  About Me
                </a>
              </li>

              <li className="border-gray-100 border-solid border-r-[1px] py-num-30 px-10">
                <a href="#portfolio" className="leading-[150%] font-medium">
                  Portfolio
                </a>
              </li>

              <li className="py-num-30 px-10">
                <a href="#services" className="leading-[150%] font-medium">
                  Services
                </a>
              </li>
            </ul>
          </nav>

          {/* Hamburger Button */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span className="w-7 h-0.5 bg-white"></span>
            <span className="w-7 h-0.5 bg-white"></span>
            <span className="w-7 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden w-full border-t border-gray-700 bg-black">
            <ul className="flex flex-col py-4">
              <li>
                <a href="#home" className="block px-4 py-3">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="block px-4 py-3">
                  About Me
                </a>
              </li>

              <li>
                <a href="#portfolio" className="block px-4 py-3">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="#services" className="block px-4 py-3">
                  Services
                </a>
              </li>

              <li className="px-4 pt-3">
                <a href="#contact">
                  <button className="btn-animate w-full bg-gray-200 border border-gray-100 py-3 rounded-xl text-white">
                    Contact Me
                  </button>
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;