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
    { name: "Larsen & Toubro", logo: "/images/partners/logo1.webp" },
    { name: "Tata Projects", logo: "/images/partners/logo2.png" },
    { name: "Shapoorji Pallonji", logo: "/images/partners/logo3.png" },
    { name: "DLF Limited", logo: "/images/partners/logo4.png" },
    { name: "Godrej Properties", logo: "/images/partners/logo5.png" },
    { name: "Prestige Group", logo: "/images/partners/logo6.png" },
    { name: "Brigade Group", logo: "/images/partners/logo7.png" },
    { name: "Sobha Limited", logo: "/images/partners/logo8.png" },
    { name: "Sobha Limited", logo: "/images/partners/logo9.png" },
    { name: "Sobha Limited", logo: "/images/partners/logo10.png" },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="py-16 bg-muted/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-pretty">
            Partnering with top construction companies to build India&apos;s
            infrastructure
          </p>
        </div>

        {/* Continuous Logo Carousel */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-muted/20 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-muted/20 to-transparent z-10"></div>

          {/* Scrolling Container */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll space-x-12 items-center">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 w-32 h-48 relative flex items-center justify-center"
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
