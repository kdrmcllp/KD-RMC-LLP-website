"use client";
import { useEffect, useState } from "react";
import BlurText from "@/components/ui/blur-text";

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(80); // Default navbar height

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

  // Get dynamic navbar height
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector("nav");
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);

    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  // Text rotation effect
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
      className="relative w-full overflow-hidden"
      style={{
        height: `calc(100vh - ${navbarHeight}px)`,
        marginTop: `${navbarHeight}px`,
      }}
    >
      {/* Video Background - Different scaling for mobile vs desktop */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:scale-120 scale-150"
          style={{
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            objectFit: "cover",
            transform: "translate(-50%, -50%)", // Base transform, scale added via classes
          }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/20 z-5"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 z-10">
        <div className="flex flex-col justify-start lg:justify-center items-start h-full ml-4 sm:ml-8 lg:ml-16 max-w-md lg:max-w-2xl pt-20 sm:pt-24 lg:pt-0">
          <div className="hidden lg:block">
            <BlurText
              key={animationKey}
              text={desktopTexts[currentTextIndex]}
              animateBy="words"
              delay={120}
              direction="top"
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white drop-shadow-2xl"
            />
          </div>
          <div className="block lg:hidden">
            <BlurText
              key={animationKey}
              text={mobileTexts[currentTextIndex]}
              animateBy="words"
              delay={120}
              direction="top"
              className="text-xl sm:text-2xl font-bold text-white drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-32 right-4 sm:right-16 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <style jsx>{`
        .scale-120 {
          transform: translate(-50%, -50%) scale(1.2) !important;
        }
        .scale-150 {
          transform: translate(-50%, -50%) scale(1.5) !important;
        }
      `}</style>
    </section>
  );
}
