"use client";

import { motion } from "framer-motion";

interface AboutCardProps {
  value: string;
  label: string;
}

export default function AboutCard({ value, label }: AboutCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative bg-white rounded-2xl shadow-lg border border-[#1b2c50]/20 px-6 py-6 sm:px-8 sm:py-8 w-fit max-w-[200px] text-center"
    >
      {/* Decorative Accent Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-[#1b2c50] pointer-events-none"></div>

      <div className="text-3xl sm:text-4xl font-extrabold text-[#1b2c50] drop-shadow-sm">
        {value}
      </div>
      <div className="mt-1 text-sm sm:text-base text-gray-600 font-medium">
        {label}
      </div>
    </motion.div>
  );
}
