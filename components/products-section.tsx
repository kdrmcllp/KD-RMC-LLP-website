"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  Truck,
  Clock,
  Shield,
  Zap,
  Factory,
  Users,
  Award,
  Beaker,
  CheckCircle,
} from "lucide-react";

export default function ProductsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isHeadingInView = useInView(headingRef, { margin: "-100px" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ✅ First Features Grid (New one)
  const newFeatures = [
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

  // ✅ Second Features Grid (Existing one)
  const features = [
    {
      icon: Truck,
      title: "On-Time Delivery",
      description: "GPS-tracked fleet ensures punctual delivery",
    },
    {
      icon: Clock,
      title: "Continuous Operations",
      description: "Extended production hours for project needs",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Rigorous testing at every stage of production",
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Fast deployment for project requirements",
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
    <section id="products" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            ref={headingRef}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-snug"
            variants={textVariants}
            initial="hidden"
            animate={isHeadingInView ? "visible" : "hidden"}
          >
            <span className="text-[#1b2c50]">
              {splitText("OUR OPERATIONS")}
            </span>
            <br />
            {splitText("CAPABILITIES")}
          </motion.h2>
          <div className="w-32 h-1 bg-[#1b2c50] rounded-full mx-auto mb-8"></div>
        </div>

        {/* Image Section */}
        <div
          className={`grid lg:grid-cols-2 gap-12 mb-8 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/plant 6.jpg"
              alt="KD Corporation Plant Operations"
              fill
              className="object-cover rounded-xl fade-in-image"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b2c50]/20 to-transparent rounded-xl"></div>
            <div className="absolute bottom-6 left-6 text-white z-10">
              <h3 className="text-2xl font-bold mb-2">Modern Plant Facility</h3>
            </div>
          </div>

          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/plant 4.jpg"
              alt="KD Corporation Team"
              fill
              className="object-cover rounded-xl fade-in-image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b2c50]/20 to-transparent rounded-xl"></div>
            <div className="absolute bottom-6 left-6 text-white z-10">
              <h3 className="text-2xl font-bold mb-2">Company Vehical Fleet</h3>
            </div>
          </div>
        </div>

        {/* ✅ New Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {newFeatures.map((feature, index) => (
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

        {/* ✅ Existing Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-white rounded-xl shadow-md border border-gray-200 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-[#1b2c50]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-[#1b2c50]" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h4>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
