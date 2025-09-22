"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, Users, Award, Target } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button"; // ⬅️ import your reusable Button

export default function BuconSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const elements = entry.target.querySelectorAll(".gsap-animate");
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("animate-in");
              if (el.classList.contains("highlight-card")) {
                setTimeout(() => {
                  (el as HTMLElement).style.transform = "scale(1.02)";
                  setTimeout(() => {
                    (el as HTMLElement).style.transform = "scale(1)";
                  }, 200);
                }, 100);
              }
            }, index * 150);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Building2,
      title: "Independent Company",
      description: "Leading ready mixed concrete company in India",
    },
    {
      icon: Users,
      title: "Experienced Leadership",
      description: "Over a decade of industry experience",
    },
    {
      icon: Award,
      title: "Quality Focus",
      description: "Committed to excellence in concrete solutions",
    },
    {
      icon: Target,
      title: "Strategic Vision",
      description: "Significant force in the RMC industry",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-gray-50 overflow-hidden relative"
    >
      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .gsap-animate {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gsap-animate.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .fade-in-image {
          transition: opacity 0.6s ease-in-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .highlight-card:hover {
          background-color: rgba(27, 44, 80, 0.05);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100 rounded-full blur-xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200 rounded-full blur-lg opacity-40"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Side */}
          <div
            className={`space-y-6 lg:space-y-8 order-2 lg:order-1 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="space-y-4">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance gsap-animate opacity-0 transform translate-y-4"
                style={{ color: "#1b2c50" }}
              >
                <span style={{ color: "#1b2c50" }}>BUCON</span>
              </h2>
              <div
                className="w-16 sm:w-20 h-1 rounded-full gsap-animate opacity-0 transform translate-y-4"
                style={{ backgroundColor: "#1b2c50" }}
              ></div>
            </div>

            <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed">
              <p className="text-base sm:text-lg gsap-animate opacity-0 transform translate-y-4">
                Bucon Readymix LLP is an independent ready mixed concrete
                company in India. The company was established in 2021 with
                participation from Mr. Kailash Purohit.
              </p>

              <p className="text-base sm:text-lg gsap-animate opacity-0 transform translate-y-4">
                Both Partners have experience of over a decade in a leadership
                role in leading ready mixed concrete and/or construction
                organizations and brings to the table a unique blend of skills
                that will help Bucon Readymix LLP achieve its goal of being a
                significant force in the ready mixed concrete industry.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="flex items-start space-x-3 gsap-animate highlight-card opacity-0 transform translate-y-4 p-3 rounded-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "rgba(27, 44, 80, 0.1)" }}
                    >
                      <highlight.icon
                        className="w-4 h-4 sm:w-5"
                        style={{ color: "#1b2c50" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-sm font-semibold"
                      style={{ color: "#1b2c50" }}
                    >
                      {highlight.title}
                    </div>
                    <div className="text-xs text-gray-500">
                      {highlight.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button onClick={() => router.push("/bucon")}>
                Learn More About Bucon
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div
            className={`relative order-1 lg:order-2 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl h-40 sm:h-56 lg:h-72">
              <Image
                src="/images/BUCON logo trasparent.png"
                alt="Bucon Readymix Plant"
                fill
                className="object-contain fade-in-image"
                priority
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
