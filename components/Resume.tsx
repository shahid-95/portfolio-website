"use client";

import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Resume() {
  const highlights = [
    "BCA Student — Data Science",
    "Full Stack Developer",
    "React / Next.js Projects",
    "Git & GitHub Workflow",
  ];

  return (
    <section
      id="resume"
      className="relative w-full section-pad section-pad-y overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1200px] mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <p className="eyebrow mb-3">{"// resume"}</p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="space-y-5 order-2 md:order-1 text-center md:text-left"
          >
            <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed text-balance">
  I&apos;m a Full Stack Developer passionate about building scalable web applications,
  secure backend systems, and intuitive user experiences with modern technologies.
</p>

            <ul className="space-y-3 text-[var(--foreground)] text-sm sm:text-base font-mono inline-flex flex-col items-center md:items-start">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <span className="text-[var(--accent)]">→</span>
                  {h}
                </li>
              ))}
            </ul>

            {/* BUTTON */}
            <div>
              <a
                href="/shahid_resume.pdf"
                download
                className="inline-flex items-center gap-3 bg-[var(--accent)] text-[#0A0E17] px-5 py-2.5 sm:px-6 sm:py-3 rounded-md font-medium hover:bg-[var(--accent-strong)] active:scale-[0.98] transition-all duration-300 text-sm sm:text-base"
              >
                <FaDownload />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <a
              href="/shahid_resume.pdf"
              target="_blank"
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md group"
            >
              {/* PDF */}
              <iframe
                src="/shahid_resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                title="Resume preview"
                className="w-full h-[260px] sm:h-[340px] md:h-[380px] lg:h-[420px] rounded-lg opacity-90 border border-[var(--border)] pointer-events-none"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[var(--background)]/30 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                <div className="bg-[var(--surface)] border border-[var(--accent)] text-[var(--accent)] px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-mono">
                  Open Preview
                </div>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-[var(--accent)]/50 transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
