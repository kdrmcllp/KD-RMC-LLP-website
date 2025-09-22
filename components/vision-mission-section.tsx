"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function VisionMissionSection() {
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
        ease: [0, 0, 0.58, 1], // ✅ replaced "easeOut" with cubic-bezier
      },
    },
  };

  return (
    <section
      id="vision-mission"
      className="py-12 sm:py-16 lg:py-20 bg-[#1b2c50] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block px-3 sm:px-4 py-2 bg-white/10 rounded-full mb-4 sm:mb-6"
          >
            <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wide">
              Vision & Mission
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-text-reveal"
          >
            Our Guiding Principles
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-text-reveal"
            style={{ animationDelay: "0.2s" }}
          >
            Driven by excellence and innovation, we are committed to shaping the
            future of the aggregate industry
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission */}
          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                MISSION
              </h3>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
              Our mission is to deliver quality Aggregates to meet customer
              specifications and satisfaction for the longterm profitability and
              growth of the company. We are committed to maintaining the highest
              standards of quality while ensuring sustainable business practices
              that benefit all our stakeholders.
            </p>

            <div className="mt-6 sm:mt-8 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-white/90 text-sm sm:text-base">
                  Quality First Approach
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-white/90 text-sm sm:text-base">
                  Customer Satisfaction Focus
                </span>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <Eye className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                VISION
              </h3>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
              Our vision is to be universally recognized as the market leader in
              the management and execution of all our activities. We aspire to
              set industry benchmarks through innovation, quality excellence,
              and sustainable practices that contribute to the development of
              infrastructure across the nation.
            </p>

            <div className="mt-6 sm:mt-8 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-white/90 text-sm sm:text-base">
                  Market Leadership
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-white/90 text-sm sm:text-base">
                  Innovation Excellence
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-white/90 text-sm sm:text-base">
                  Sustainable Growth
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
