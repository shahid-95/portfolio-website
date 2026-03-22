"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function About() {

  const textVariant: Variants = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }, // ✅ fix
    },
  };

  return (
    <section
      id="about"
      className="relative w-full text-white -mt-41 sm:mt-0 pt-0 sm:pt-10 lg:py-24 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-16 overflow-hidden"
    >

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center gap-8 sm:gap-10 lg:gap-20">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative group">

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 blur-2xl opacity-30"></div>

            <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] 
            rounded-full overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 shadow-2xl transition duration-500">

              <Image
                src="/shahid.jpeg"
                alt="profile"
                fill
                className="object-cover"
              />

            </div>
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="w-full lg:w-1/2 space-y-4 sm:space-y-5 lg:space-y-6 text-left order-2 lg:order-1"
        >

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Profile</h2>

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
            I am <span className="text-white font-medium">Mohd Shahid</span>, a passionate and highly motivated aspiring
            <span className="text-cyan-400"> Full Stack Developer</span>. I am currently pursuing my BCA (Final Year) at Akash Global 
            College of Management and Science, Bangalore.
          </p>

          <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg">
            I enjoy building modern web applications and solving real-world 
            problems through code. My focus is on developing responsive, 
            user-friendly, and scalable applications using technologies such as 
            React, Next.js, Node.js, and MongoDB.
          </p>

        </motion.div>

      </div>
    </section>
  );
}