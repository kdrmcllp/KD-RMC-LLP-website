"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Shield, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function CertificatesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const certificates = [
    {
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
      description:
        "Certified for maintaining highest quality standards in concrete production and delivery processes with rigorous quality control measures and continuous improvement protocols.",
      image: "/images/certificates/ISO certificate.jpeg",
      icon: Award,
    },
    {
      title: "QCI Certification",
      subtitle: "Bureau of Indian Standards",
      description:
        "Government approved certification ensuring compliance with QCI Ready Mixed Concrete Plant Certification Scheme requirements for production control of ready mixed concrete, as per Building Materials & Technology Promotion Council (BMTPC) criteria.",
      image: "/images/certificates/QCI certificate.jpeg",
      icon: Shield,
    },
  ];

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(27,44,80,0.15),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Certified Excellence in
            <span className="text-[#1b2c50]"> Quality & Compliance</span>
          </h2>
          <div className="w-24 h-1 bg-[#1b2c50] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to quality is validated by prestigious certifications
            from government and international bodies, ensuring you receive
            concrete that meets the highest industry standards.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className={`group relative bg-white rounded-xl border shadow-md overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#1b2c50] cursor-pointer ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Certificate Image Container */}
              <div className="relative w-full h-80 sm:h-96 md:h-80 lg:h-96 xl:h-[420px] overflow-hidden bg-gray-100">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  fill
                  className="object-contain object-center p-4 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-6">
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <cert.icon className="w-8 h-8 text-white mx-auto mb-3" />
                    <h4 className="text-xl font-bold mb-2">{cert.title}</h4>
                    <p className="text-sm text-gray-200 mb-4 font-medium">
                      {cert.subtitle}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-100">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="p-6 text-center bg-gradient-to-r from-gray-50 to-gray-100">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {cert.subtitle}
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600 font-medium">
                    Verified & Active
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div
          className={`mt-16 text-center ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.8s" }}
        >
          <div className="inline-flex items-center space-x-2 bg-[#1b2c50]/10 px-6 py-3 rounded-full">
            <CheckCircle className="w-5 h-5 text-[#1b2c50]" />
            <span className="text-[#1b2c50] font-medium">
              All certifications regularly audited and renewed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
