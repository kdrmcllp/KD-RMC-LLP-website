"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card } from "@/components/ui/AboutCard";
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
        <section className="pt-24 pb-16 bg-gradient-to-br from-accent/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm">
                SISTER COMPANY
              </div>
              <h1 className="text-5xl font-bold text-foreground text-balance">
                <span className="text-accent">BUCON READYMIX</span> LLP
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Independent ready mixed concrete company committed to excellence
                and innovation in the construction industry
              </p>
              <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
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
                    <span className="text-accent">Bucon Readymix LLP</span>
                  </h2>
                  <div className="w-20 h-1 bg-accent rounded-full"></div>
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
                  <Card className="p-4 border-l-4 border-l-accent">
                    <div className="text-2xl font-bold text-accent">2021</div>
                    <div className="text-sm text-muted-foreground">
                      Established
                    </div>
                  </Card>
                  <Card className="p-4 border-l-4 border-l-accent">
                    <div className="text-2xl font-bold text-accent">10+</div>
                    <div className="text-sm text-muted-foreground">
                      Years Experience
                    </div>
                  </Card>
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
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent"></div>
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
                Why Choose Our <span className="text-accent">RMC Company</span>
              </h2>
              <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className={`p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent/20 hover:border-l-accent ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-accent" />
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
                </Card>
              ))}
            </div>

            {/* Quality Management */}
            <div className="bg-accent/5 p-8 rounded-lg">
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
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Partner with Bucon Readymix LLP
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Experience the difference of working with an independent ready
              mixed concrete company that prioritizes quality, innovation, and
              customer satisfaction.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
