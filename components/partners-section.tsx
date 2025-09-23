"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function PartnersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(headingRef, { margin: "-100px" }); // triggers every time

  const partners = [
    { name: "New India Construction", logo: "/images/partners/logo1.webp" },
    { name: "Shapoorji Pallonji", logo: "/images/partners/logo2.png" },
    { name: "Om Swastik Multitrade", logo: "/images/partners/logo3.png" },
    { name: "Mahaveer", logo: "/images/partners/logo4.png" },
    { name: "Pragati Enterprises", logo: "/images/partners/logo5.png" },
    { name: "H. Rishabraj", logo: "/images/partners/logo6.png" },
    { name: "H. Rishabraj", logo: "/images/partners/logo7.png" },
    { name: "H. Rishabraj", logo: "/images/partners/logo8.png" },
    { name: "H. Rishabraj", logo: "/images/partners/logo9.png" },
    { name: "H. Rishabraj", logo: "/images/partners/logo10.png" },
  ];

  const duplicatedPartners = [...partners, ...partners];

  // Heading animation variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.02 } },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const splitText = (text: string) =>
    text.split("").map((char, index) => (
      <motion.span key={index} variants={charVariants}>
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="py-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f9fafb 0%, #f1f5f9 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            ref={headingRef}
            className="text-lg sm:text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance leading-snug"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // animate every time in view
          >
            {splitText("Trusted by Industry Leaders")}
          </motion.h2>
        </div>

        {/* Continuous Logo Carousel */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scrolling Container */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll space-x-12 items-center">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 w-36 h-24 relative flex items-center justify-center"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
