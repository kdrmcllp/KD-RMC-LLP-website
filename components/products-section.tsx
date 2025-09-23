"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Truck, Clock, Shield, Zap, Factory, Users, Award } from "lucide-react";

export default function ProductsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // only trigger once
        }
      },
      { threshold: 0.05, rootMargin: "50px" } // more mobile-friendly
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">
            <span className="text-[#1b2c50]">QUALITY CRUSHED</span>
            <br />
            AGGREGATES
          </h2>
          <div className="w-32 h-1 bg-[#1b2c50] rounded-full mx-auto mb-8"></div>
        </div>

        {/* Image Section */}
        <div
          className={`grid lg:grid-cols-2 gap-12 mb-20 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* Image 1 */}
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
              <p className="text-white/90">
                State-of-the-art VSI crushing technology
              </p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/plant 4.jpg"
              alt="KD Corporation Team"
              fill
              className="object-cover rounded-xl fade-in-image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b2c50]/20 to-transparent rounded-xl"></div>
            <div className="absolute bottom-6 left-6 text-white z-10">
              <h3 className="text-2xl font-bold mb-2">Expert Team</h3>
              <p className="text-white/90">
                Experienced professionals ensuring quality
              </p>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div
          className={`grid lg:grid-cols-3 gap-8 mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="lg:col-span-2 space-y-6">
            {/* Traditional vs Modern Card */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 border-l-4 border-l-[#1b2c50] hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Traditional vs. Modern Aggregate Production
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Traditionally, most aggregate used in concrete originate from a
                gravel pit. It is recovered and screened then material
                conforming to size requirements is used in concrete without
                further processing. Due to its naturally rounded shape,
                resulting concrete has good workability properties.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These sources of aggregate have been depleted and, increasingly,
                aggregate is now produced from material recovered from hard rock
                quarries. Because most material is crushed using compression
                crushers, the shape of aggregate particles is generally angular,
                lacking the smooth rounded edges of naturally formed aggregate
                particles.
              </p>
            </div>

            {/* VSI Technology Card */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 border-l-4 border-l-[#1b2c50] hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                VSI Technology Advantages
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                It is generally accepted that well shaped coarse aggregate, as
                produced by the VSI, can reduce the cement content of concrete.
                Added to this cost advantage is an increase in concrete
                workability and a reduction of sand content in the mix.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Reducing cement content reduces the drying shrinkage of
                concrete, a major cause of cracking in slabs and other
                structures. Lower cement content also reduces heat produced,
                thus allowing larger pours without the necessity of special
                measures to control the temperature of the concrete after
                pouring.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Environmental Impact Card */}
            <div className="bg-gradient-to-br from-[#1b2c50] to-[#1b2c50]/80 text-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <Factory className="w-8 h-8 mr-3" />
                <h4 className="text-xl font-bold">Environmental Impact</h4>
              </div>
              <p className="text-white/90 leading-relaxed">
                By using VSI aggregate, savings can be anything between 10kg and
                40kg of cement per cubic metre of concrete, reducing CO2
                emissions significantly.
              </p>
            </div>

            {/* Superior Quality Card */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-[#1b2c50] mr-3" />
                <h4 className="text-xl font-bold text-foreground">
                  Superior Quality
                </h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The crushing action of the VSI includes abrasion and impact,
                simulating the natural gravel formation process in a much
                shorter time.
              </p>
            </div>

            {/* Sustainable Solution Card */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-[#1b2c50] mr-3" />
                <h4 className="text-xl font-bold text-foreground">
                  Sustainable Solution
                </h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Production of manufactured sand reduces the impact on
                traditional sources, protecting the environment from
                over-exploitation.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
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
