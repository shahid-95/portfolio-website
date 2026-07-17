"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["about", "skills", "projects", "resume", "contact"];

  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="flex items-center justify-between section-pad py-3.5 sm:py-4 max-w-[1400px] mx-auto">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 cursor-pointer group">
            <span className="font-mono text-[var(--accent)] text-base">{`>`}</span>
            <span className="font-display text-lg tracking-tight text-[var(--foreground)]">
              shahid<span className="text-[var(--accent)]">.dev</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-9 font-mono text-[13px] text-[var(--muted)]">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="relative py-1 hover:text-[var(--foreground)] transition-colors duration-200"
                >
                  <span className="text-[var(--accent)]/70">0{navItems.indexOf(item) + 1}.</span>{" "}
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden font-mono text-2xl text-[var(--accent)] leading-none"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
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
        className={`fixed top-0 right-0 h-full w-64 bg-[var(--surface)] border-l border-[var(--border)] z-40 transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-[var(--border)]">
          <span className="font-mono text-[var(--accent)] text-sm tracking-widest uppercase">
            Menu
          </span>

          <button
            className="text-xl text-[var(--muted)] hover:text-[var(--foreground)]"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-1 p-5 font-mono text-sm">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={handleClick}
                className="flex items-center gap-2 py-3 text-[var(--muted)] hover:text-[var(--foreground)] border-b border-[var(--border)] transition-colors"
              >
                <span className="text-[var(--accent)]/70">0{navItems.indexOf(item) + 1}.</span>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
