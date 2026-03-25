"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "WonderLust Travel",
      description:
        "A full-stack web application inspired by Airbnb that allows users to explore travel destinations, view property listings, and manage accommodations. The platform includes features such as browsing listings, viewing property details, and basic user interaction. This project demonstrates my skills in building dynamic web applications using modern web technologies and database integration.",
      tech: ["HTML","CSS","JavaScript","Node.js","Express.js","MongoDB","Render"],
      image: "/projects/airbnb.png",
      live: "https://wonderlust-travel.onrender.com/",
      code: "https://github.com/shahidd95/WonderLust-hotel",
      upcoming: false,
    },
    {
      title: "ColourTab Game",
      description:
        "An interactive memory game where players repeat a sequence of colors. Difficulty increases progressively with sound effects for better UX.",
      tech: ["React.js","HTML","CSS","JavaScript"],
      image: "/projects/simon.png",
      live: "https://colortabgame.vercel.app/",
      code: "https://github.com/shahidd95/ColorTab-Game",
      upcoming: false,
    },
    {
      title: "Weather Info",
      description:
        "A web app to check real-time weather conditions using API with clean UI showing temperature, humidity, and conditions.",
      tech: ["React.js","HTML","CSS","JavaScript","API"],
      image: "/projects/weather.png",
      live: "https://weatherinfo-tan.vercel.app/",
      code: "https://github.com/shahidd95/weatherInfo",
      upcoming: false,
    },
    {
      title: "20L Water Can Delivery System ",
      description:
        "Secure online voting platform for students with authentication and live results.",
      tech: ["Next.js","Node","MongoDB"],
      image: null,
      live: "#",
      code: "#",
      upcoming: true,
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full text-white py-18 pl-7 px-6 lg:px-20 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1680px] mx-auto">

        <div className="flex items-center gap-4 mb-14">
          <h2 className="text-3xl font-bold">Projects I've Built</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              onMouseLeave={() => setOpenIndex(null)}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0b0f14]
              transform transition duration-500 group-hover:scale-105">

                {/* Image */}
                <div className="relative w-full h-64 flex items-center justify-center">

                  {project.upcoming ? (
                    <div className="w-full h-full flex flex-col items-center justify-center
                    bg-gradient-to-br from-purple-900 via-black to-cyan-900 gap-4">
                      <FaLock className="text-5xl text-gray-300" />
                      <p className="text-sm text-gray-400 tracking-widest">
                        UPCOMING
                      </p>
                    </div>
                  ) : (
                    <>
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      )}

                      {/* Buttons (Desktop only) */}
                      <div className="hidden md:flex absolute inset-0 items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
                        
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-cyan-500 text-black px-4 py-2 rounded-md text-sm hover:scale-110 transition"
                        >
                          <FaExternalLinkAlt />
                          Live
                        </a>

                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-black/70 border border-gray-600 px-4 py-2 rounded-md text-sm hover:scale-110 transition"
                        >
                          <FaGithub />
                          Code
                        </a>

                        <button
                          onClick={() =>
                            setOpenIndex(openIndex === index ? null : index)
                          }
                          className="bg-purple-600 px-4 py-2 rounded-md text-sm hover:scale-110 transition"
                        >
                          Detail
                        </button>

                      </div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold">
                    {project.title}
                  </h3>

                  {/* 📱 Mobile Buttons */}
                  <div className="flex md:hidden justify-center gap-10 mt-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-500 text-black p-3 rounded-md"
                    >
                      <FaExternalLinkAlt />
                    </a>

                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/70 border border-gray-600 p-3 rounded-md"
                    >
                      <FaGithub />
                    </a>

                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="bg-purple-600 p-2 rounded-md"
                    >
                      Detail
                    </button>
                  </div>

                  <AnimatePresence>
                    {openIndex === index && !project.upcoming && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, y: -10 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="mt-4 space-y-3 overflow-hidden"
                      >
                        <p className="text-sm text-gray-400">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap justify-center gap-2">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="text-xs px-2 py-1 bg-gray-900 rounded-md text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}