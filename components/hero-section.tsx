"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import BlurText from "@/components/ui/blur-text";

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  // ✅ Desktop images + texts
  const desktopImages = [
    {
      src: "/images/banner/1.png",
      text: "Building Tomorrow with Quality",
    },
    {
      src: "/images/banner/2.png",
      text: "Reliability in Every Foundation",
    },
    { src: "/images/banner/3.png", text: "Excellence in Every Pour" },
  ];

  // ✅ Mobile images + texts
  const mobileImages = [
    { src: "/images/banner/mobile/1.png", text: "Quality You Can Trust" },
    {
      src: "/images/banner/mobile/2.png",
      text: "Strong Foundations Everywhere",
    },
    { src: "/images/banner/mobile/3.png", text: "Pouring Excellence Daily" },
  ];

  // Carousel interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % desktopImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [desktopImages.length]);

  // Helper to trigger animation reset
  const [animationKey, setAnimationKey] = useState(0);

  // Whenever currentImage changes, trigger the animation reset
  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [currentImage]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ===== Desktop Background Carousel ===== */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        {desktopImages.map((item, index) => (
          <div
            key={item.src}
            className={`absolute inset-0 w-full h-full transition-opacity duration-2000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.src}
              alt={`KD Concrete Plant Desktop ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* ===== Mobile Background Carousel ===== */}
      <div className="absolute inset-0 z-0 block lg:hidden">
        {mobileImages.map((item, index) => (
          <div
            key={item.src}
            className={`absolute inset-0 w-full h-full transition-opacity duration-2000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.src}
              alt={`KD Concrete Plant Mobile ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* ===== Text Overlay ===== */}
      <div className="absolute top-32 left-16 z-10 max-w-md">
        {/* Desktop text */}
        <div className="hidden lg:block">
          <BlurText
            key={animationKey} // This will force a re-render when currentImage changes
            text={desktopImages[currentImage].text}
            animateBy="words"
            delay={120}
            direction="top"
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white drop-shadow-lg"
          />
        </div>

        {/* Mobile text */}
        <div className="block lg:hidden">
          <BlurText
            key={animationKey} // Same as above for mobile text
            text={mobileImages[currentImage].text}
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
