"use client";
import { motion } from "framer-motion";

const tech = [
  "Java",
  "Python",
  "C",
  "Next.js",
  "React",
  "MERN Stack",
  "Django",
  "MongoDB",
  "MySQL",
  "Stable Diffusion",
  "OpenCV",
  "Deep Learning",
  "Computer Vision",
  "Git & GitHub"
];

export default function TechStack() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto text-center">
      <h2 className="section-title mb-16">Tech Stack</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {tech.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="bg-[#111827] border border-gray-800 p-6 rounded-xl text-white hover:border-cyan-400 transition"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
