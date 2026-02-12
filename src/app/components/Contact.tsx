"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-32 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="section-title mb-8"
      >
        Let’s Build Something Impactful
      </motion.h2>

      <p className="section-subtitle mb-10">
        Open to internships, AI projects, and innovative collaborations.
      </p>

      <div className="flex justify-center gap-10 text-lg">
        <a
          href="mailto:2310080060aids@gmail.com"
          className="text-cyan-400 hover:text-white transition"
        >
          Email
        </a>

        <a
          href="https://github.com/srisaiarun"
          target="_blank"
          className="text-cyan-400 hover:text-white transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/janagama-srisaiarun-1636b7339/"
          target="_blank"
          className="text-cyan-400 hover:text-white transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
