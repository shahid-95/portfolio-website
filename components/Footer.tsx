"use client";

import { useState, useEffect } from "react";
import { FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
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
      <footer className="w-full border-t border-[var(--border)] py-6">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 section-pad text-center text-[var(--muted)] text-sm font-mono">
          <p>
            Designed &amp; built by{" "}
            <span className="text-[var(--accent)]">Shahid Khan</span> ©{" "}
            {new Date().getFullYear()}
          </p>

          <div className="flex gap-4 text-base">
            <a
              href="https://instagram.com/shahiidkhnn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[var(--accent)] transition-colors"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com/shahidd46"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-[var(--accent)] transition-colors"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll To Top Button */}
      <button
        onClick={scrollTop}
        aria-label="Scroll to top"
        className={`fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 bg-[var(--accent)] text-[#0A0E17] w-9 h-9 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
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
