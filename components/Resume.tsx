"use client";

import { FaDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative w-full text-white pl-7 py-16 sm:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1680px] mx-auto">

        {/* Heading */}
        <div className="mb-12 lg:-mb-36"> {/* reduced gap */}
          <h2 className="text-2xl sm:text-3xl font-bold">Resume</h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="space-y-4">

            <p className="text-gray-400 text-sm sm:text-base">
              I'm a passionate Full stack developer focused on building modern
              and responsive web applications.
            </p>

            <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">•</span>
                BCA Student – Data Science
              </li>

              <li className="flex items-center gap-2">
                <span className="text-cyan-400">•</span>
                Full Stack Developer
              </li>

              <li className="flex items-center gap-2">
                <span className="text-cyan-400">•</span>
                React / Next.js Projects
              </li>

              <li className="flex items-center gap-2">
                <span className="text-cyan-400">•</span>
                Git & GitHub Workflow
              </li>
            </ul>

            {/* BUTTON */}
            <a
              href="/shahid-resume.pdf"
              download
              className="inline-flex items-center gap-3 bg-cyan-500 text-black px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium hover:bg-cyan-400 transition duration-300 shadow-lg shadow-cyan-500/20 text-sm sm:text-base"
            >
              <FaDownload />
              Download Resume
            </a>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end lg:pr-1 lg:mt-48">
            {/* 👆 added lg:justify-end + lg:pr-6 */}

            <a
              href="/shahid-resume.pdf"
              target="_blank"
              className="relative w-full max-w-sm sm:max-w-md group"
            >

              {/* PDF */}
              <iframe
                src="/shahid-resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                className="w-full h-[300px] sm:h-[380px] lg:h-[420px] rounded-xl blur-sm opacity-70 border border-gray-800"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
                <div className="bg-black/70 border border-cyan-400 text-cyan-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium backdrop-blur">
                  Preview
                </div>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-cyan-400 transition"></div>

            </a>

          </div>

        </div>

      </div>
    </section>
  );
}