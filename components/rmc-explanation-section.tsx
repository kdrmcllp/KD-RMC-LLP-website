"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/AboutCard";
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

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center space-y-4 mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm">
            OUR PRODUCT
          </div>
          <h2 className="text-4xl font-bold text-foreground text-balance">
            What is <span className="text-accent">Ready Mix Concrete</span>?
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content Side */}
          <div
            className={`space-y-6 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Ready-mix concrete or{" "}
                <strong className="text-accent">RMC</strong> as it is popularly
                called, refers to concrete that is manufactured in a factory or
                batching plant, according to a set recipe, and then delivered to
                a worksite, by truck mounted transit mixers in a freshly mixed
                and plastic or unhardened state.
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

            <div className="bg-accent/5 p-6 rounded-lg border-l-4 border-accent">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Key Benefits
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Computer-controlled operations ensure consistency</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Custom-made to suit different applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Transported using sophisticated equipment</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Image Side */}
          <div
            className={`relative ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="/concrete-mixer-truck-construction-site.jpg"
                alt="RMC Delivery Truck"
                className="fade-in-image rounded-lg"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent"></div>
            </div>

            {/* Floating Info Card */}
            <Card className="absolute -bottom-6 -right-6 p-4 bg-background shadow-xl border-l-4 border-l-accent">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">m³</div>
                <div className="text-xs text-muted-foreground">
                  Sold by Volume
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent/20 hover:border-l-accent ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
