import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">

      <div className="max-w-4xl w-full text-center py-20">

        <p className="text-[#D4AF37] uppercase tracking-[5px] text-sm mb-6">
          Welcome to My Portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Antonio <span className="text-[#D4AF37]">M. Dy</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
          Information Technology Student
        </h2>

        <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-8"></div>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Welcome to my personal portfolio! I am an Information
          Technology student from BSIT 2B who enjoys exploring
          technology, developing new skills, and learning how
          technology can make everyday life easier.
        </p>

        <div className="inline-block border border-[#D4AF37] rounded-full px-8 py-3">
          <span className="text-[#D4AF37] font-semibold tracking-wider">
            BSIT 2B
          </span>
        </div>

        <p className="text-gray-600 text-xs mt-16 tracking-widest uppercase">
          Personal Portfolio © 2026
        </p>

      </div>
    </div>
  );
}
