"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["about","skills","projects","resume","contact"];

  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full border-b bg-[#0f1720] border-gray-800 backdrop-blur">
        <div className="flex items-center justify-between px-6 lg:px-8 py-4">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 cursor-pointer">
            <div className="bg-cyan-500 p-2 rounded-md">
              <span className="text-black font-bold">{`</>`}</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-sm text-gray-300">
            {navItems.map((item)=>(
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="relative hover:text-cyan-400 transition"
                >
                  {item.charAt(0).toUpperCase()+item.slice(1)}

                  {/* 🔥 underline animation back */}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-3xl text-cyan-400"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-0 w-56 bg-[#0f1720] border-l border-gray-800 z-40 transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <span className="text-cyan-400 font-bold text-lg">
            Menu
          </span>

          <button
            className="text-xl text-gray-300 hover:text-cyan-400"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-4 p-4 text-gray-300 text-lg">
          {navItems.map((item)=>(
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={handleClick}
                className="relative hover:text-cyan-400 transition"
              >
                {item.charAt(0).toUpperCase()+item.slice(1)}

                {/* 🔥 same underline in mobile */}
                <span className="block h-[2px] w-0 bg-cyan-400 transition-all duration-300 hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

      </div>
    </>
  );
}