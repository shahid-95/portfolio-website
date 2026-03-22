"use client";

import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { motion, Variants } from "framer-motion";

export default function Hero() {

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: -40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const, // ✅ FIX
      },
    },
  };

  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[85vh] flex items-start lg:items-center justify-center text-white overflow-hidden">

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-16 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-20 items-center pt-6 sm:pt-10 lg:pt-0">

        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-3 sm:space-y-4 lg:space-y-6 text-center lg:text-left"
        >

          <motion.h1
            variants={item}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            Hi, I'm <span className="text-cyan-400">Mohd Shahid</span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-base sm:text-xl md:text-2xl text-gray-300 font-semibold"
          >
            <Typewriter
              words={["Full Stack Developer"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-400 max-w-md mx-auto lg:mx-0 text-sm sm:text-base"
          >
            I build modern, scalable web applications with clean code,
            powerful backend systems, and data-driven solutions.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto text-center bg-cyan-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-cyan-400 transition"
            >
              View Projects
            </a>

            <a
              href="/shahid-resume.pdf"
              download
              className="w-full sm:w-auto text-center border border-gray-600 px-6 py-3 rounded-lg hover:border-cyan-400 transition"
            >
              Download Resume
            </a>
          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hidden lg:flex justify-center"
        >
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1200}
            transitionSpeed={1000}
            scale={1.05}
            gyroscope={true}
          >
            <img
              src="/hero.png"
              alt="laptop"
              className="w-[460px] object-contain 
              drop-shadow-[0_25px_70px_rgba(0,255,255,0.25)]
              transition duration-500"
            />
          </Tilt>
        </motion.div>

      </div>
    </section>
  );
}