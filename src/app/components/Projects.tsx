"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Hairstyle AI – Face-Preserving Inpainting",
    desc: "Generative AI web app using Stable Diffusion & OpenCV for realistic hairstyle transformation while preserving facial identity.",
    tech: "Stable Diffusion • OpenCV • Python • Full Stack"
  },
  {
    title: "AVL Tree Visualizer",
    desc: "Interactive visualization of AVL rotations with real-time balancing animations.",
    tech: "JavaScript • DSA • Canvas API"
  },
  {
    title: "Car Rental Platform",
    desc: "Responsive booking system with REST APIs and database integration.",
    tech: "MERN • MongoDB • APIs"
  },
  {
    title: "Voice-to-Text System",
    desc: "Speech recognition tool converting WAV files into accurate text output.",
    tech: "Python • Google Speech API"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="section-title text-center mb-16">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            className="bg-[#111827] border border-gray-800 rounded-2xl p-8 hover:border-cyan-400 transition"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              {p.title}
            </h3>
            <p className="text-gray-400 mb-6">
              {p.desc}
            </p>
            <p className="text-sm text-cyan-400">
              {p.tech}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
