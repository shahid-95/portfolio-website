"use client";

import { useState, useEffect } from "react";
import { FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";

export default function Footer() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="w-full bg-[#0f1720] border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 text-gray-400 text-sm">

          <p>
            Designed & Built by <span className="text-cyan-400">Shahid Khan</span> © {new Date().getFullYear()}
          </p>

          <div className="flex gap-4 text-lg">

            <a
              href="https://instagram.com/shahiidkhnn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com/shahidd46"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaTwitter />
            </a>

          </div>
        </div>
      </footer>

      {/* Small Scroll To Top Button */}
      <button
        onClick={scrollTop}
        className={`fixed bottom-8 right-8 z-50 bg-cyan-500 text-black w-7 h-7 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
          showButton
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <FaArrowUp className="text-sm" />
      </button>
    </>
  );
}