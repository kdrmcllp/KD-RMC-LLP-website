"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Beaker,
  Truck,
  Settings,
  CheckCircle,
  Factory,
  Shield,
  Award,
} from "lucide-react";

export default function RMCSection() {
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
      title: "Own VSI Crusher",
      description: "Our own VSI crusher aggregates used for RMC production",
    },
    {
      icon: Beaker,
      title: "Quality Control Lab",
      description: "Fully equipped quality control laboratory at all plants",
    },
    {
      icon: Settings,
      title: "Optimized Mix Designs",
      description:
        "Mix Designs are designed and tested thoroughly to yield optimal performance",
    },
    {
      icon: Shield,
      title: "Continuous Monitoring",
      description:
        "Constant in-house monitoring through regimented concrete sampling program",
    },
    {
      icon: CheckCircle,
      title: "Process Control",
      description: "Thorough system of quality control in place at all plants",
    },
    {
      icon: Award,
      title: "Equipment Maintenance",
      description:
        "Extended to calibration and maintenance of all batching and testing equipment",
    },
  ];

  const features = [
    "Precise mixture allowing specialty concrete mixtures",
    "Reduced worksite confusion",
    "Custom-made to suit different applications",
    "Computer-controlled operations",
    "Sophisticated equipment and methods",
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-4">
            READY MIX CONCRETE
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">
            <span className="text-accent">PRECISION ENGINEERED</span>
            <br />
            CONCRETE SOLUTIONS
          </h2>
          <div className="w-32 h-1 bg-accent rounded-full mx-auto mb-8"></div>
        </div>

        {/* Introduction Section with Animation */}
        <div
          className={`mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <Card className="p-8 lg:p-12 bg-gradient-to-r from-accent/5 to-accent/10 border-l-4 border-l-accent">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  What is Ready-Mix Concrete?
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    Ready-mix concrete or{" "}
                    <strong className="text-accent">RMC</strong> as it is
                    popularly called, refers to concrete that is manufactured in
                    a factory or batching plant, according to a set recipe, and
                    then delivered to a worksite by truck mounted transit mixers
                    in a freshly mixed and plastic or unhardened state.
                  </p>
                  <p>
                    This results in a precise mixture, allowing specialty
                    concrete mixtures to be developed and implemented on
                    construction sites. Ready-mix concrete is sometimes
                    preferred over on-site concrete mixing because of the
                    precision of the mixture and reduced worksite confusion.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative w-full h-[300px] rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src="/concrete-mixer-truck.jpg"
                    alt="Ready Mix Concrete Delivery"
                    className="fade-in-image"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </Card>
        </div>

        {/* Features Section */}
        <div
          className={`mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Key Advantages
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 ${
                      isVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card className="p-6 bg-accent text-accent-foreground h-full">
                <div className="flex items-center mb-4">
                  <Truck className="w-8 h-8 mr-3" />
                  <h4 className="text-xl font-bold">Volume Based</h4>
                </div>
                <p className="text-accent-foreground/90 leading-relaxed">
                  Ready Mixed Concrete is bought and sold by volume, expressed
                  in cubic meters. RMC can be custom-made to suit different
                  applications.
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div
          className={`mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Why Choose Our <span className="text-accent">RMC Company</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Management Section */}
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <Card className="p-8 lg:p-12 border-l-4 border-l-accent">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Quality Management System
              </h3>
              <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With our quality management system comes process control. We
                  have a thorough system of quality control in place at all of
                  our plants. This helps us to identify, document and correct
                  most problems before they reach the field.
                </p>
                <p>
                  These procedures are also extended to the calibration and
                  maintenance of all of our batching and testing equipment,
                  ensuring consistent quality and performance across all our
                  operations.
                </p>
              </div>
              <div className="relative">
                <div className="relative w-full h-[250px] rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src="/quality-control-laboratory.jpg"
                    alt="Quality Control Laboratory"
                    className="fade-in-image"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.8s" }}
        >
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg"
          >
            Get RMC Quote Today
          </Button>
        </div>
      </div>
    </section>
  );
}
