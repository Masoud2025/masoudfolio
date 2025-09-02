// components/Navbar.tsx
"use client";

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left: Logo + Links */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">M.</div>

        {/* Links */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </a>
        </div>

        {/* Category Filter (fixed width to avoid shifting) */}
        <div className="relative hidden md:block min-w-[120px]">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded transition flex items-center justify-between"
          >
            {selectedCategory}
            <svg
              className="w-4 h-4 ml-2 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute mt-2 w-full bg-white border rounded shadow-lg z-20 animate-fadeIn">
              {["All", "Web", "Mobile", "Design"].map((cat) => (
                <div
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setIsDropdownOpen(false);
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {cat}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Center: Search Box with animation */}
      <div className="flex-1 mx-6 flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            transition-all duration-300 ease-in-out focus:max-w-lg"
        />
      </div>

      {/* Right side: Portfolio links */}
      <div className="hidden md:flex space-x-4">
        <a
          href="#projects"
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Download cv
        </a>
        <a
          href="#resume"
          className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
        >
          contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
