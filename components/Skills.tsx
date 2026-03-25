"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaJava,
  FaPython
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiExpress,
  SiMongodb
} from "react-icons/si";

export default function Skills() {

  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
    { name: "Python", icon: <FaPython />, color: "text-yellow-300" },
    { name: "Java", icon: <FaJava />, color: "text-red-500" },
    { name: "GitHub", icon: <FaGithub />, color: "text-white" },
  ];

  return (
    <section
      id="skills"
      className="relative w-full text-white py-18 px-4 pl-8 sm:px-6 lg:px-16 overflow-hidden"
    >

      {/* 🔥 subtle background glow (no spacing impact) */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1680px] mx-auto">

        {/* Title */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">
            Tech Stack
          </h2>
        </div>

        {/* Skills Grid */}
        <div
          className="
          grid justify-items-start
          grid-cols-4 
          sm:grid-cols-4 
          md:grid-cols-5 
          lg:grid-cols-6 
          xl:grid-cols-8 
          gap-6 sm:gap-8
          "
        >

          {skills.map((skill, index) => (
            <div key={index} className="group flex flex-col items-center">

              {/* Neon Ring */}
              <div className="relative">

                <div
                  className="
                  absolute inset-0
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-400
                  via-purple-500
                  to-cyan-400
                  blur-lg
                  opacity-0
                  group-hover:opacity-80
                  transition duration-500
                  "
                />

                {/* Icon Card */}
                <div
                  className="
                  relative
                  w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20
                  flex items-center justify-center
                  rounded-2xl
                  bg-white/[0.07]
                  backdrop-blur-xl
                  border border-white/10
                  shadow-lg shadow-black/40
                  text-2xl sm:text-3xl
                  transition-all duration-500
                  group-hover:scale-110
                  group-hover:-translate-y-2
                  group-hover:shadow-cyan-500/30
                  "
                >
                  <span className={`${skill.color} drop-shadow-2xl`}>
                    {skill.icon}
                  </span>
                </div>

              </div>

              {/* Name */}
              <p className="text-xs sm:text-sm mt-3 text-gray-400 group-hover:text-cyan-400 transition duration-300 tracking-wide">
                {skill.name}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}