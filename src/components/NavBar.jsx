import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const navigate = useNavigate(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    setActiveNav(path);
    navigate(`/menu`); 
    setIsOpen(false); 
  };

  return (
    <div className="bg-[#121618] text-white">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center md:absolute top-5">
          <img src={logo} alt="Logo" className="w-10 h-10 md:w-16 md:h-16" />
          <div className="hidden md:flex flex-col ml-3">
            <div className="flex items-center">
              <h4 className="text-[#0796EF] text-3xl font-bold">DEEP</h4>
              <h4 className="text-3xl font-bold text-white ml-2">NET</h4>
            </div>
            <h4 className="text-[#857878] text-3xl mt-1">SOFT</h4>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 ml-auto">
          {["home", "menu", "reservation", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleNavigation(item)}
              className={`text-[16px] font-oswald font-medium ${
                activeNav === item ? "text-[#0796EF]" : "text-white"
              } hover:text-[#0796EF]`}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1d1f] text-center p-4">
          {["home", "menu", "reservation", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleNavigation(item)}
              className={`block w-full py-2 text-[16px] font-oswald font-medium ${
                activeNav === item ? "text-[#0796EF]" : "text-white"
              } hover:text-[#0796EF]`}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
