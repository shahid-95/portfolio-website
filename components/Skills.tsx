"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaJava,
  FaPython,
  FaDatabase
} from "react-icons/fa";

import { SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "GitHub", icon: <FaGithub /> },
   { name: "SQL", icon: <FaDatabase /> },
  ];

  return (
    <section
      id="skills"
      className="relative w-full section-pad section-pad-y overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1200px] mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <p className="eyebrow mb-3">{"// stack"}</p>
          
        </motion.div>

        {/* Skills Grid */}
        <div
          className="
          grid
          grid-cols-2
          xs:grid-cols-3
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          xl:grid-cols-6
          gap-3 sm:gap-4
          "
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.35, delay: (index % 6) * 0.04 }}
              className="group flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3.5 sm:px-4 py-3 sm:py-3.5
              hover:border-[var(--accent)]/50 hover:bg-[var(--surface-2)] transition-colors duration-300"
            >
              <span className="text-lg sm:text-xl text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors duration-300 shrink-0">
                {skill.icon}
              </span>
              <p className="text-xs sm:text-sm text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors duration-300 font-mono truncate">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
