import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

const Header = ({ scrollToServices }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-red-700 shadow-md">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between py-3">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <img
              src={logo}
              className="w-20 h-20 md:w-28 md:h-28"
              alt="Goldstar Logo"
            />
            <div className="ml-2 md:ml-6">
              <h1 className="text-lg md:text-2xl font-bold">
                Goldstar Security
              </h1>
              <p className="text-yellow-400 text-sm font-bold md:text-base">
                Security with Sensibility
              </p>
            </div>
          </div>

          {/* Navigation and Contact Us */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:text-xl md:flex items-center space-x-6">
              <a
                href="#"
                className="hover:text-yellow-400 transition font-semibold"
              >
                Home
              </a>
              <button
                onClick={scrollToServices}
                className="hover:text-yellow-400 transition font-semibold"
              >
                Services
              </button>
              <a
                href="#"
                className="hover:text-yellow-400 transition font-semibold"
              >
                Careers
              </a>
              <a
                href="#"
                className="hover:text-yellow-400 transition font-semibold"
              >
                Blogs
              </a>
              <a
                href="#"
                className="hover:text-yellow-400 transition font-semibold"
              >
                About
              </a>
            </nav>

            {/* Contact Us Button */}
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold px-2 py-1 md:px-4 md:py-2 rounded-full transition text-sm md:text-base">
              Contact Us
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-red-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-2">
            <div className="flex flex-col space-y-4 border-t border-gray-300 pt-4">
              <a
                href="#"
                className="hover:text-yellow-400 transition font-semibold"
              >
                Home
              </a>
              <button
                onClick={scrollToServices}
                className="hover:text-yellow-400 transition font-semibold text-left"
              >
                Services
              </button>
              <a
                href="#"
                className="hover:text-yellow-400 transition font-semibold"
              >
                About
              </a>
              <a
                href="#"
                className="hover:text-yellow-400 transition font-semibold"
              >
                Blogs
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
