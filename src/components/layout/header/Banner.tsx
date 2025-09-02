// components/Banner.tsx
"use client";
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 text-gray-900 py-3 px-6 flex items-center justify-center space-x-4">
      <span className="font-bold text-lg md:text-xl">Software Engineer</span>
      <span className="text-gray-600 text-base md:text-lg">
        | Code. Create. Innovate.
      </span>
    </div>
  );
};

export default Banner;
