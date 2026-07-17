"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function About() {
  const textVariant: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full section-pad section-pad-y overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10 sm:gap-12 md:gap-16 lg:gap-20">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-2/5 flex justify-center md:justify-end order-1 md:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl border border-[var(--border)]" />
            <div
              className="relative w-[160px] h-[160px] sm:w-[210px] sm:h-[210px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px]
              rounded-2xl overflow-hidden border border-[var(--border-strong)] bg-[var(--surface)] shadow-2xl"
            >
              <Image
                src="/shahid.jpeg"
                alt="Mohd Shahid"
                fill
                sizes="(max-width: 768px) 170px, 260px"
                className="object-cover grayscale-[15%]"
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
          className="w-full md:w-3/5 space-y-4 sm:space-y-5 text-center md:text-left order-2 md:order-1"
        >
          <p className="eyebrow">{"// profile"}</p>
         <p className="text-[var(--muted)] leading-relaxed text-sm sm:text-base md:text-lg text-balance">
  I am <span className="text-[var(--foreground)] font-medium">Mohd Shahid</span>, a{" "}
  <span className="text-[var(--accent)]">BCA (Data Science) graduate</span> and an aspiring{" "}
  <span className="text-[var(--accent)]">Full Stack Developer</span> passionate about
  building modern, scalable, and user-centric web applications.
</p>

<p className="text-[var(--muted-2)] leading-relaxed text-sm sm:text-base md:text-lg text-balance">
  I enjoy transforming ideas into real-world solutions by developing responsive
  frontends, secure backend systems, and efficient databases. I work with{" "}
  <span className="text-[var(--foreground)] font-medium">
    React.js, Next.js, Node.js, Express.js, Python (FastAPI), MongoDB, SQL, and JavaScript
  </span>. Through my internship and projects like <span className="text-[var(--foreground)] font-medium">CanFinity</span> and{" "}
  <span className="text-[var(--foreground)] font-medium">ZenVest</span>, I have gained
  hands-on experience in full-stack development, REST APIs, authentication, and database management.
</p>
        </motion.div>
      </div>
    </section>
  );
}
