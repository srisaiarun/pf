"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      {/* Profile Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative mb-8"
      >
        {/* Glow Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-xl opacity-40"></div>

        <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-cyan-400">
          <Image
            src="/arun photo.jpg"
            alt="Sri Sai Arun"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold"
      >
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Sri Sai Arun
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl"
      >
        Building{" "}
        <span className="text-cyan-400 font-semibold">
          AI-powered systems
        </span>{" "}
        with Generative AI, Computer Vision & Full Stack Engineering.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 flex gap-6"
      >
        <a
          href="#projects"
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold hover:scale-105 transition-transform"
        >
          View Work
        </a>

        <a
          href="mailto:2310080060aids@gmail.com"
          className="px-8 py-3 rounded-lg border border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-black transition-all"
        >
          Contact Me
        </a>
      </motion.div>

    </section>
  );
}
