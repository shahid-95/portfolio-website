"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_23klzfg", "template_j16g42s", form.current, "T3eCUXyoxsKlOz-dK")
      .then(
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
      className="relative w-full section-pad section-pad-y overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1200px] mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <p className="eyebrow mb-3">{"// contact"}</p>
          <p className="text-[var(--muted)] mt-3 max-w-xl text-sm sm:text-base text-balance">
            Have a question or want to work together? Drop me a message.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-14">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 sm:space-y-10"
          >
            <a href="mailto:shahiidd95@gmail.com" className="flex items-center gap-4 group w-fit">
              <div className="bg-[var(--accent-soft)] p-3.5 rounded-lg text-[var(--accent)] text-lg shrink-0">
                <FaEnvelope />
              </div>

              <div className="min-w-0">
                <p className="eyebrow">Email Me</p>
                <p className="text-base sm:text-lg font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors break-all sm:break-normal">
                  shahiidd95@gmail.com
                </p>
              </div>
            </a>

            <div>
              <p className="eyebrow mb-4">Connect With Me</p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/shahid-95/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="border border-[var(--border)] p-3 rounded-lg text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/mohd-shahid-9b56302b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="border border-[var(--border)] p-3 rounded-lg text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="tel:+919580275258"
                  aria-label="Phone"
                  className="border border-[var(--border)] p-3 rounded-lg text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                >
                  <FaPhone />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 sm:p-6 md:p-8"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="eyebrow">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full mt-2 bg-[var(--background)] border border-[var(--border)] rounded-md px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-2)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>

                <div>
                  <label className="eyebrow">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full mt-2 bg-[var(--background)] border border-[var(--border)] rounded-md px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-2)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="eyebrow">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  className="w-full mt-2 bg-[var(--background)] border border-[var(--border)] rounded-md px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-2)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>

              <div>
                <label className="eyebrow">Your Message</label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  placeholder="How can I help you?"
                  className="w-full mt-2 bg-[var(--background)] border border-[var(--border)] rounded-md px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-2)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[var(--accent)] text-[#0A0E17] py-3 rounded-md font-medium text-sm hover:bg-[var(--accent-strong)] active:scale-[0.99] transition-all"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
