"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { Settings, Zap, Shield, Leaf, CheckCircle } from "lucide-react";
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

  // ✅ Explicitly typed as Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        ease: "easeOut", // ✅ Valid easing type
      },
    },
  };

  const benefits = [
    {
      icon: Settings,
      title: "Superior Shape & Texture",
      description: "VSI produces rounded edges and natural surface texture",
    },
    {
      icon: Shield,
      title: "Enhanced Durability",
      description: "Superior crushing strength and performance",
    },
    {
      icon: Leaf,
      title: "Environmental Benefits",
      description: "Reduces CO2 emissions significantly",
    },
  ];

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
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 lg:mb-16"
          >
            <div className="inline-block px-3 sm:px-4 py-2 bg-[#1b2c50]/10 rounded-full mb-4 sm:mb-6">
              <span className="text-[#1b2c50] font-semibold text-xs sm:text-sm uppercase tracking-wide">
                Our Management
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight animate-text-reveal">
              QUALITY CRUSHED <span className="text-[#1b2c50]">AGGREGATES</span>
            </h2>

            <p
              className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-text-reveal"
              style={{ animationDelay: "0.2s" }}
            >
              Advanced VSI Technology for Superior Construction Materials
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12 lg:mb-16">
            {/* Text Content */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 lg:space-y-8 order-2 lg:order-1"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Particles produced by the VSI have rounded edges and a surface
                  texture closely resembling that of naturally formed
                  aggregates. Traditionally, most aggregate used in concrete
                  originate from a gravel pit, but due to depletion of these
                  sources, aggregate is now increasingly produced from hard rock
                  quarries.
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  The crushing action of the VSI includes abrasion and impact,
                  simulating the natural gravel formation process in a much
                  shorter time. This results in aggregate particles with cubical
                  shape and smooth surface texture, technically superior to
                  compression-crushed aggregates.
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Well-shaped coarse aggregate produced by VSI can reduce cement
                  content, increase concrete workability, and reduce sand
                  content in the mix. This reduction in cement content decreases
                  drying shrinkage and heat production, allowing for larger
                  pours without special temperature control measures.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit.title}
                    variants={itemVariants}
                    className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#1b2c50]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#1b2c50]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                        {benefit.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual Content */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 lg:space-y-8 order-1 lg:order-2"
            >
              {/* Main Image */}
              <div className="relative h-60 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/vsi-crusher-machine-in-industrial-setting-with-agg.jpg"
                  alt="VSI Crusher Technology"
                  fill
                  className="object-cover fade-in-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b2c50]/30 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-[#1b2c50]" />
                    <span className="font-semibold text-gray-900 text-xs sm:text-sm">
                      VSI Technology
                    </span>
                  </div>
                </div>
              </div>

              {/* Environmental Impact */}
              <div className="bg-green-50 rounded-xl p-4 sm:p-6 border border-green-100">
                <div className="flex items-center mb-3 sm:mb-4">
                  <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <h3 className="text-base sm:text-lg font-semibold text-green-900">
                    Environmental Impact
                  </h3>
                </div>
                <p className="text-green-800 mb-3 sm:mb-4 text-sm sm:text-base">
                  By using VSI aggregate, we can reduce cement consumption by
                  5%, potentially reducing CO2 emissions significantly
                  worldwide.
                </p>
                <div className="flex items-center text-green-700">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">
                    Sustainable Construction Solution
                  </span>
                </div>
              </div>

              {/* Process Advantages */}
              <div className="bg-[#1b2c50] rounded-xl p-4 sm:p-6 text-white">
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                  Process Advantages
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 text-white/80 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">
                      Simulates natural gravel formation
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 text-white/80 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">
                      Produces cubical shaped particles
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 text-white/80 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">
                      Reduces natural resource exploitation
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 text-white/80 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">
                      Ensures future availability of natural sand
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
