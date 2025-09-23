"use client";

import { useEffect, useState } from "react";
import BlurText from "@/components/ui/blur-text";

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const desktopTexts = [
    "Building Tomorrow with Quality",
    "Reliability in Every Foundation",
    "Excellence in Every Pour",
  ];

  const mobileTexts = [
    "Quality You Can Trust",
    "Strong Foundations Everywhere",
    "Pouring Excellence Daily",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % desktopTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [desktopTexts.length]);

  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [currentTextIndex]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20" // <-- Add top padding equal to navbar height
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/images/banner.mp4"
      />

      {/* Text Overlay */}
      <div className="absolute top-32 left-16 z-10 max-w-md">
        <div className="hidden lg:block">
          <BlurText
            key={animationKey}
            text={desktopTexts[currentTextIndex]}
            animateBy="words"
            delay={120}
            direction="top"
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white drop-shadow-lg"
          />
        </div>
        <div className="block lg:hidden">
          <BlurText
            key={animationKey}
            text={mobileTexts[currentTextIndex]}
            animateBy="words"
            delay={120}
            direction="top"
            className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg"
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-accent/20 rounded-full blur-xl animate-pulse -z-10"></div>
      <div
        className="absolute bottom-32 right-4 sm:right-16 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-2xl animate-pulse -z-10"
        style={{ animationDelay: "1s" }}
      ></div>
    </section>
  );
}
