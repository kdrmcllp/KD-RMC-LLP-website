"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
// import AboutCard from "../components/ui/AboutCard"; // ⬅️ import the new card

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.02 },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const splitText = (text: string) =>
    text.split("").map((char, index) => (
      <motion.span key={index} variants={charVariants}>
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-muted/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="/concrete-factory-workers-quality-control.jpg"
                alt="KD Factory Operations"
                layout="responsive"
                width={1200}
                height={800}
                objectFit="cover"
                priority={true}
                className="fade-in-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* ✅ About Card */}
            {/* <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6">
              <AboutCard value="10+" label="Years of Excellence" />
            </div> */}
          </motion.div>

          {/* Content Side */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance"
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {splitText("Building Excellence with")}
                <br />
                <span className="text-primary font-extrabold">
                  {splitText(" Premium Concrete Solutions")}
                </span>
              </motion.h2>

              <div className="w-16 sm:w-20 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed">
              <motion.p
                className="text-base sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                KD RMC LLP is a Proprietorship firm. Hard Work of Mr. Kailash
                Purohit has now taken this firm to the new height. K D
                CORPORATION was established in Maharashtra in year 2017. It
                started operating as a construction trading entity whereby its
                initial activities included Aggregate and construction material
                in the Mumbai Suburban Market.
              </motion.p>

              <motion.p
                className="text-base sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Despite significant challenges and competition in the market,
                the Company underpinned significant growth in its sale and
                achieved record levels. The Company continuously focused on
                developing its clients&apos; database and penetrated new market
                segments by implementing new marketing plans and tactics
                emphasizing on the following:
              </motion.p>

              <motion.div
                className="text-base sm:text-lg space-y-2 ml-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p>
                  • Increase in its market share and differentiation from
                  competitors;
                </p>
                <p>
                  • Maintaining high quality supply according to international
                  standards;
                </p>
                <p>
                  • Employing a professional and experienced management team;
                </p>
                <p>• Adopting a competitive pricing strategy; and</p>
                <p>
                  • Increasing its clients&apos; database through a focused and
                  aggressive sales force.
                </p>
              </motion.div>
            </div>

            <div className="pt-6">
              <a
                href="/about-us"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 group cement-texture-btn modern-btn relative overflow-hidden"
              >
                <span className="relative z-10">Read More About Us</span>
                <svg
                  className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
