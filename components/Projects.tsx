"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const projects = [
    {
  title: "CanFinity – Smart Water Can Delivery System",
  description:
    "A full-stack water can delivery platform that enables customers to order 20L water cans, manage subscriptions, track deliveries, and make secure payments through a modern and responsive interface. The system also includes an admin dashboard for managing users, orders, and deliveries.",
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "Firebase",
  ],
  image: "/projects/canfinity.png",
  live: "https://watercandelivery.vercel.app/",
  code: "https://github.com/shahid-95/waterdelivery",
  upcoming: false,
},
    {
  title: "ZenVest – Personal Finance Management System",
  description:
    "A full-stack personal finance management application that helps users track income, expenses, budgets, and savings goals. Built with a React.js frontend and a Python (FastAPI) backend, it provides secure JWT authentication, RESTful APIs, real-time financial insights, and an intuitive dashboard for better money management.",
  tech: [
    "React.js",
    "Python",
    "FastAPI",
    "SQLite",
    "JavaScript",
    "JWT",
  ],
  image: "/projects/zenvest1.png",
  live: "https://zenvest1.vercel.app",
  code: "https://github.com/shahid-95/ZenVest",
  upcoming: false,
},
    {
      title: "E-Commerce Website",
      description:
        "A full-service ecommerce platform offering POP materials and professional interior services, enabling users to seamlessly order products and book skilled installations for modern interior spaces.",
      tech: ["Next.js", "Tailwind CSS", "JavaScript"],
      image: "/projects/ee.png",
      live: "https://indiaplasters.netlify.app/",
      code: "https://github.com/shahid-95/india-plasters",
      upcoming: false,
    },
    {
      title: "ColourTab Game",
      description:
        "An interactive memory game where players repeat a sequence of colors. Difficulty increases progressively with sound effects for better UX.",
      tech: ["React.js", "HTML", "CSS", "JavaScript"],
      image: "/projects/simon.png",
      live: "https://colortabgame.vercel.app/",
      code: "https://github.com/shahidd95/ColorTab-Game",
      upcoming: false,
    },
     {
      title: "WonderLust Travel",
      description:
        "A full-stack web application inspired by Airbnb that allows users to explore travel destinations, view property listings, and manage accommodations. The platform includes features such as browsing listings, viewing property details, and basic user interaction. This project demonstrates my skills in building dynamic web applications using modern web technologies and database integration.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Render"],
      image: "/projects/airbnb.png",
      live: "https://wonderlust-travel.onrender.com/",
      code: "https://github.com/shahidd95/WonderLust-hotel",
      upcoming: false,
    },
   
  ];

  return (
    <section
      id="projects"
      className="relative w-full section-pad section-pad-y overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10 md:mb-14"
        >
          <p className="eyebrow mb-3">{"// work"}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 md:gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
              onMouseLeave={() => setOpenIndex(null)}
              className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]
              hover:border-[var(--border-strong)] transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/10] flex items-center justify-center overflow-hidden">
                {project.upcoming ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--surface-2)] gap-3">
                    <FaLock className="text-4xl text-[var(--muted)]" />
                    <p className="eyebrow">Upcoming</p>
                  </div>
                ) : (
                  <>
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 600px"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent opacity-60" />
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-lg sm:text-xl text-[var(--foreground)] text-balance">
                    {project.title}
                  </h3>

                  <div className="flex gap-2 shrink-0">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live site`}
                      className="w-9 h-9 flex items-center justify-center rounded-md border border-[var(--border)] text-[var(--muted)]
                      hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} source code`}
                      className="w-9 h-9 flex items-center justify-center rounded-md border border-[var(--border)] text-[var(--muted)]
                      hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                    >
                      <FaGithub className="text-sm" />
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  className="font-mono text-xs text-[var(--accent)] hover:text-[var(--accent-strong)] transition-colors"
                >
                  {openIndex === index ? "− hide details" : "+ view details"}
                </button>

                <AnimatePresence>
                  {openIndex === index && !project.upcoming && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="mt-4 space-y-3 overflow-hidden"
                    >
                      <p className="text-sm text-[var(--muted)] leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 bg-[var(--surface-2)] border border-[var(--border)] rounded-md text-[var(--muted)] font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
