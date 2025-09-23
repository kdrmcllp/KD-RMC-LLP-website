"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import Image from "next/image";

export default function QualityAggregatesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="management"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Image 1 */}
          <motion.div variants={itemVariants}>
            <div className="relative h-60 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/plant 7.webp"
                alt="VSI Crusher Technology"
                fill
                className="object-cover fade-in-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b2c50]/20 to-transparent" />
            </div>
          </motion.div>

          {/* Image 2 */}
          <motion.div variants={itemVariants}>
            <div className="relative h-60 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/plant 6.webp"
                alt="Plant Operations"
                fill
                className="object-cover fade-in-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b2c50]/20 to-transparent" />
            </div>
          </motion.div>

          {/* Image 3 */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="relative h-60 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/plant 5.jpg"
                alt="Quality Control"
                fill
                className="object-cover fade-in-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b2c50]/20 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
