"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function PartnersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
        <div
          className={`text-center mb-12 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
            Trusted by Industry Leaders
          </h2>
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
