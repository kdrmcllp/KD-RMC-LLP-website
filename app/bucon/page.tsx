"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CheckCircle, Factory, Truck, Shield } from "lucide-react";

export default function BuconPage() {
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

  const services = [
    {
      icon: Factory,
      title: "VSI Crusher Aggregates",
      description: "Our own VSI crusher aggregates used for RMC production",
    },
    {
      icon: Shield,
      title: "Quality Control Laboratory",
      description: "Fully equipped quality control laboratory at all plants",
    },
    {
      icon: CheckCircle,
      title: "Tested Mix Designs",
      description:
        "Mix Designs are designed and tested thoroughly to yield optimal performance",
    },
    {
      icon: Truck,
      title: "Performance Monitoring",
      description:
        "Constant in-house monitoring through regimented concrete sampling program",
    },
  ];

  const qualityFeatures = [
    "Process control through quality management system",
    "Thorough system of quality control at all plants",
    "Identify, document and correct problems before field deployment",
    "Calibration and maintenance of all batching and testing equipment",
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-[#1b2c50]/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-5xl font-bold text-foreground text-balance">
                <span className="text-[#1b2c50]">BUCON READYMIX</span> LLP
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Independent ready mixed concrete company committed to excellence
                and innovation in the construction industry
              </p>
              <div className="w-20 h-1 bg-[#1b2c50] rounded-full mx-auto"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={sectionRef} className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className={`space-y-8 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-foreground text-balance">
                    About{" "}
                    <span className="text-[#1b2c50]">Bucon Readymix LLP</span>
                  </h2>
                  <div className="w-20 h-1 bg-[#1b2c50] rounded-full"></div>
                </div>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    Bucon Readymix LLP is an independent ready mixed concrete
                    company in India. The company was established in 2021 with
                    participation from Mr. Kailash Purohit and Mr. Sanjay
                    Borawat.
                  </p>

                  <p className="text-lg">
                    Both Partners have experience of over a decade in a
                    leadership role in leading ready mixed concrete and/or
                    construction organizations and brings to the table a unique
                    blend of skills that will help Bucon Readymix LLP achieve
                    its goal of being a significant force in the ready mixed
                    concrete industry.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 border-l-4 border-l-[#1b2c50]">
                    <div className="text-3xl font-bold text-[#1b2c50] mb-2">
                      2021
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Established
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 border-l-4 border-l-[#1b2c50]">
                    <div className="text-3xl font-bold text-[#1b2c50] mb-2">
                      10+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`relative ${
                  isVisible ? "animate-slide-in-right" : "opacity-0"
                }`}
              >
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <div className="relative w-full h-[500px] rounded-lg shadow-2xl overflow-hidden">
                    <Image
                      src="/ready-mix-concrete-plant.jpg"
                      alt="Bucon Readymix Plant"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b2c50]/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold text-foreground text-balance">
                Why Choose Our{" "}
                <span className="text-[#1b2c50]">RMC Company</span>
              </h2>
              <div className="w-20 h-1 bg-[#1b2c50] rounded-full mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 border-l-4 border-l-[#1b2c50]/20 hover:border-l-[#1b2c50] ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#1b2c50]/10 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-[#1b2c50]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quality Management */}
            <div className="bg-[#1b2c50]/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Quality Management System
              </h3>
              <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
                With our quality management system comes process control. We
                have a thorough system of quality control in place at all of our
                plants.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {qualityFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 ${
                      isVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#1b2c50] flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
