"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(0,255,255,0.15), transparent 40%)",
            "radial-gradient(circle at 80% 70%, rgba(139,92,246,0.15), transparent 40%)",
            "radial-gradient(circle at 40% 60%, rgba(0,255,255,0.15), transparent 40%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute inset-0"
      />
    </div>
  );
}
