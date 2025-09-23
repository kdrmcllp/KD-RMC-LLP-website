"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function VisionMissionSection() {
  const missionRef = useRef<HTMLDivElement | null>(null);
  const visionRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const isMissionInView = useInView(missionRef, {
    once: false,
    amount: 0.1,
    margin: "0px 0px -200px 0px",
  });

  const isVisionInView = useInView(visionRef, {
    once: false,
    amount: 0.1,
    margin: "0px 0px -200px 0px",
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Pattern Background with Parallax */}
      <div className="absolute inset-0 -z-10">
        <div
          className="w-full h-full"
          style={{
            backgroundColor: "#1b2c50",
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundAttachment: "fixed", // ✅ true parallax feel
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
          {/* Mission */}
          <div
            ref={missionRef}
            className="space-y-6 bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20"
            style={{
              transform: isMissionInView
                ? "translateX(0%)"
                : isMobile
                ? "translateX(-30%)"
                : "translateX(-100%)",
              opacity: isMissionInView ? 1 : 0,
              transition: "transform 1.5s ease-out, opacity 1s ease-in",
            }}
          >
            <div className="flex items-center space-x-4">
              <Target className="h-8 w-8 text-yellow-400" />
              <h2 className="text-3xl lg:text-4xl font-bold text-yellow-400">
                Our Mission
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-white/90">
              Our mission is to deliver quality Concrete to meet customer specifications and satisfaction for the longterm
profitability and growth of the company.
            </p>
          </div>

          {/* Vision */}
          <div
            ref={visionRef}
            className="space-y-6 bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20"
            style={{
              transform: isVisionInView
                ? "translateX(0%)"
                : isMobile
                ? "translateX(30%)"
                : "translateX(100%)",
              opacity: isVisionInView ? 1 : 0,
              transition: "transform 1.5s ease-out, opacity 1s ease-in",
            }}
          >
            <div className="flex items-center space-x-4">
              <Eye className="h-8 w-8 text-yellow-400" />
              <h2 className="text-3xl lg:text-4xl font-bold text-yellow-400">
                Our Vision
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-white/90">
              Our vision is to be universally recognized as the market leader in
              the management and execution of all our activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
