"use client";

import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative w-full min-h-[64vh] md:min-h-[80vh] lg:min-h-[88vh] flex items-start md:items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto section-pad grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center pt-10 sm:pt-14 md:pt-0">
        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4 sm:space-y-5 lg:space-y-7 text-center md:text-left md:col-span-1"
        >
          <motion.p variants={item} className="eyebrow">
            {"// full stack developer"}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-hero tracking-tight text-[var(--foreground)] text-balance"
          >
            Mohd Shahid
          </motion.h1>

          <motion.h2
            variants={item}
            className="font-mono text-sm sm:text-base md:text-lg text-[var(--muted)] h-6"
          >
            <Typewriter
              words={[
                "builds modern full-stack applications",
  "develops Python (FastAPI) & Node.js backends",
  "creates responsive, scalable web experiences",
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={55}
              deleteSpeed={35}
              delaySpeed={1600}
            />
          </motion.h2>

          <motion.p
            variants={item}
            className="text-[var(--muted)] max-w-md mx-auto md:mx-0 text-sm sm:text-base leading-relaxed"
          >
            I build modern, scalable web applications using React.js, Node.js, and Python (FastAPI), 
            creating responsive user experiences and reliable backend systems with clean, maintainable code.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center md:justify-start pt-2"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto text-center bg-[var(--accent)] text-[#0A0E17] px-6 py-3 rounded-md font-medium text-sm tracking-wide hover:bg-[var(--accent-strong)] active:scale-[0.98] transition-all"
            >
              View Projects
            </a>

            <a
              href="/shahid_resume.pdf"
              download
              className="w-full sm:w-auto text-center border border-[var(--border-strong)] text-[var(--foreground)] px-6 py-3 rounded-md text-sm tracking-wide hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-[0.98] transition-all"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:flex justify-center md:col-span-1"
        >
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1200}
            transitionSpeed={1000}
            scale={1.02}
            gyroscope={true}
          >
            <img
              src="/hero.png"
              alt="laptop"
              className="w-[280px] md:w-[340px] lg:w-[460px] object-contain
              drop-shadow-[0_25px_70px_rgba(217,139,63,0.18)]
              transition duration-500"
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}
