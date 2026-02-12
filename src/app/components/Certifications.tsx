"use client";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "MongoDB Certified Associate Developer",
    org: "MongoDB"
  },
  {
    title: "GitHub Foundations Certification",
    org: "GitHub"
  },
  {
    title: "Certified Advanced Automation Professional",
    org: "Automation Anywhere"
  },
  {
    title: "Certificate of Excellence – OpenCV Bootcamp",
    org: "OpenCV"
  }
];

export default function Certifications() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="bg-[#111827] border border-gray-800 p-8 rounded-2xl hover:border-cyan-400 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              {cert.title}
            </h3>
            <p className="text-cyan-400">
              {cert.org}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
