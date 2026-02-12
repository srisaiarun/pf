"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-10"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-gray-400 leading-relaxed"
      >
        I am an AI & Data Science undergraduate focused on building intelligent,
        production-ready systems that combine deep learning with scalable web
        architectures. My work centers around Generative AI and Computer Vision,
        where I integrate models like Stable Diffusion with custom pipelines
        using OpenCV.  
        <br /><br />
        Beyond AI, I have strong foundations in Data Structures & Algorithms
        and full-stack development using MERN and Django. My goal is to engineer
        systems that are not just technically sound, but impactful in real-world
        applications.
      </motion.p>
    </section>
  );
}
