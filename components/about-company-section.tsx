"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import Image from "next/image";

export default function AboutCompanySection() {
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
        staggerChildren: 0.3,
        duration: 0.6,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut", // This is now properly typed
      },
    },
  };

  return (
    <section
      id="company"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            <div>
              <motion.div
                variants={itemVariants}
                className="inline-block px-3 sm:px-4 py-2 bg-[#1b2c50]/10 rounded-full mb-4 sm:mb-6"
              >
                <span className="text-[#1b2c50] font-semibold text-xs sm:text-sm uppercase tracking-wide">
                  About The Company
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
              >
                Building Excellence with{" "}
                <span className="text-[#1b2c50]">KD RMC LLP</span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8"
              >
                KD RMC LLP has been a trusted name in the aggregate industry,
                committed to delivering superior quality crushed aggregates that
                meet the highest standards of construction excellence. Our
                journey began with a vision to revolutionize the aggregate
                manufacturing process through innovation and unwavering
                dedication to quality.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-gray-600 leading-relaxed"
              >
                With over a decade of experience, we have established ourselves
                as industry leaders, consistently delivering products that
                exceed customer expectations. Our state-of-the-art facilities
                and advanced VSI technology ensure that every aggregate we
                produce meets stringent quality parameters.
              </motion.p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative order-1 lg:order-2"
          >
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/aboutus.jpg"
                alt="KD RMC LLP Manufacturing Plant"
                fill
                className="object-cover fade-in-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b2c50]/20 to-transparent" />
            </div>

            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
