"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaPhone } from "react-icons/fa";

export default function Contact() {

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      "service_23klzfg",
      "template_j16g42s",
      form.current,
      "T3eCUXyoxsKlOz-dK"
    ).then(
      () => {
        alert("Message sent successfully!");
        form.current?.reset();
      },
      (error) => {
        console.error(error);
        alert("Failed to send message.");
      }
    );
  };

  return (
    <section
      id="contact"
      className="relative w-full text-white py-18 px-6 lg:px-16 overflow-hidden"
    >

     <div className="relative z-10 w-full max-w-[1680px] mx-auto">


        {/* Heading */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
        </div>
      
        <p className="text-gray-400 mb-6 max-w-xl">
          Have a question or want to work together? Drop me a message!
        </p>

        <div className="grid lg:grid-cols-2 gap-14 ">

          {/* LEFT SIDE */}
          <div className="space-y-10">

            <a href="mailto:shahiidd95@gmail.com" className="flex items-center gap-4">
              <div className="bg-cyan-500/20 p-4 rounded-lg text-cyan-400 text-xl">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-gray-400 text-sm uppercase tracking-widest">
                  Email Me
                </p>

                <p className="text-lg font-semibold">
                  shahiidd95@gmail.com
                </p>
              </div>
            </a>

            <div>

              <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">
                Connect With Me
              </p>

              <div className="flex gap-4">

                <a
                  href="https://github.com/shahidd95/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-500/40 p-3 rounded-lg hover:bg-cyan-500/10"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/shahid-khan-9b56302b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-500/40 p-3 rounded-lg hover:bg-cyan-500/10"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="tel:+919580275258"
                  className="border border-cyan-500/40 p-3 rounded-lg hover:bg-cyan-500/10"
                >
                  <FaPhone />
                </a>

              </div>
          
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-[#0f1720] border border-gray-800 rounded-xl p-8 lg:justify-end lg:-mt-10">

            <form ref={form} onSubmit={sendEmail} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <label className="text-sm text-gray-400">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full mt-2 bg-black border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full mt-2 bg-black border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-400"
                  />
                </div>

              </div>

              <div>
                <label className="text-sm text-gray-400">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  className="w-full mt-2 bg-black border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">
                  Your Message
                </label>

                <textarea
                  rows={5}
                  name="message"
                  placeholder="How can I help you?"
                  className="w-full mt-2 bg-black border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-cyan-500 text-black py-3 rounded-lg font-semibold hover:bg-cyan-400 transition"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </div>

        </div>
      
      </div>

    </section>
  );
}