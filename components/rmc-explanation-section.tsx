"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Truck,
  Factory,
  Beaker,
  CheckCircle,
  Clock,
  Shield,
} from "lucide-react";
import Image from "next/image";

export default function RmcExplanationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isHeadingInView = useInView(headingRef, { margin: "-100px" }); // triggers every time

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Factory,
      title: "Factory Manufactured",
      description: "Precise mixing in controlled environment",
    },
    {
      icon: Truck,
      title: "Transit Delivery",
      description: "Fresh concrete delivered to your site",
    },
    {
      icon: Beaker,
      title: "Custom Mixtures",
      description: "Tailored to specific applications",
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Computer-controlled operations",
    },
    {
      icon: Clock,
      title: "Time Efficient",
      description: "Reduced worksite confusion",
    },
    {
      icon: Shield,
      title: "Reliable Supply",
      description: "Consistent quality and performance",
    },
  ];

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
    <section ref={sectionRef} className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            ref={headingRef}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug"
            variants={textVariants}
            initial="hidden"
            animate={isHeadingInView ? "visible" : "hidden"} // animate every time
          >
            {splitText("What is ")}
            <span className="text-[#1b2c50]">
              {splitText("Ready Mix Concrete")}
            </span>
            {splitText("?")}
          </motion.h2>

          <div
            className="w-20 h-1 rounded-full mx-auto"
            style={{ backgroundColor: "#1b2c50" }}
          ></div>
        </div>

        {/* Content Side */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Ready-mix concrete or{" "}
                <strong style={{ color: "#1b2c50" }}>RMC</strong> as it is
                popularly called, refers to concrete that is manufactured in a
                factory or batching plant, according to a set recipe, and then
                delivered to a worksite, by truck mounted transit mixers in a
                freshly mixed and plastic or unhardened state.
              </p>

              <p className="text-lg">
                This results in a precise mixture, allowing specialty concrete
                mixtures to be developed and implemented on construction sites.
                Ready-mix concrete is sometimes preferred over on-site concrete
                mixing because of the precision of the mixture and reduced
                worksite confusion.
              </p>

              <p className="text-lg">
                Concrete itself is a mixture of Portland cement, water and
                aggregates comprising sand and gravel or crushed stone. Ready
                Mixed Concrete is bought and sold by volume, expressed in cubic
                meters.
              </p>
            </div>

            <div
              className="p-6 rounded-lg border-l-4"
              style={{ backgroundColor: "#1b2c5020", borderColor: "#1b2c50" }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Key Benefits
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "#1b2c50" }}
                  />
                  <span>Computer-controlled operations ensure consistency</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "#1b2c50" }}
                  />
                  <span>Custom-made to suit different applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "#1b2c50" }}
                  />
                  <span>Transported using sophisticated equipment</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Image Side */}
          <div
            className={`relative transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="/images/plant 5.jpg"
                alt="RMC Delivery Truck"
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-white p-6 rounded-lg shadow-md transition-all duration-700 border-l-4 hover:shadow-lg ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                borderColor: "#1b2c5040",
                transitionDelay: `${600 + index * 100}ms`,
              }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#1b2c5020" }}
                  >
                    <feature.icon
                      className="w-6 h-6"
                      style={{ color: "#1b2c50" }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
