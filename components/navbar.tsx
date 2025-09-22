"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
// import { Button } from "/components/ui/button";

const navItems = [
  {
    name: "About",
    href: "#about",
    dropdown: [
      { name: "ABOUT THE COMPANY", href: "/about-us#company" },
      { name: "VISION / MISSION", href: "/about-us#vision-mission" },
      { name: "OUR MANAGEMENT", href: "/about-us#management" },
    ],
  },
  { name: "Certificates", href: "#certificates" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHome = () => {
    if (pathname !== "/") {
      router.push("/");
    } else {
      const element = document.querySelector("#home");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (item: any) => {
    if (item.dropdown) return; // dropdown toggle handled separately
    if (item.name === "About" && pathname === "/") {
      scrollToSection(item.href);
    } else {
      scrollToSection(item.href);
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const getNavTextColor = () => {
    if (pathname === "/about-us" || pathname === "/bucon")
      return "oklch(0.25 0 0)";
    return isScrolled ? "oklch(0.25 0 0)" : "#ffffff";
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || pathname === "/about-us" || pathname === "/bucon"
          ? "bg-background/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
      style={
        {
          "--nav-text-color": getNavTextColor(),
          "--nav-hover-color": "oklch(0.65 0.15 280)",
        } as React.CSSProperties
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer h-full flex items-center"
            onClick={scrollToHome}
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={160} // Base width for mobile/tablet
              height={50} // Base height for mobile/tablet
              className="h-16 w-auto object-contain transition-opacity duration-300 hover:opacity-80 lg:h-20 lg:w-auto" // Increased size for large screens
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex ml-10 items-baseline space-x-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.name ? null : item.name
                      )
                    }
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    className="px-3 py-2 text-lg font-bold flex items-center gap-1 transition-colors duration-300" // Increased text size and made bold
                    style={{ color: "var(--nav-text-color)" }}
                  >
                    {item.name}
                    <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item)}
                    className="px-3 py-2 text-lg font-bold transition-colors duration-300 relative group" // Increased text size and made bold
                    style={{ color: "var(--nav-text-color)" }}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1b2c50] transition-all duration-500 ease-out group-hover:w-full"></span>
                  </Link>
                )}

                {/* Dropdown */}
                {item.dropdown && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-300 transform origin-top ${
                      activeDropdown === item.name
                        ? "opacity-100 scale-y-100 translate-y-0"
                        : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                    }`}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="py-2">
                      {item.dropdown.map((dropItem, index) => (
                        <Link
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1b2c50] hover:text-white transition-all duration-200 border-l-4 border-transparent hover:border-[#1b2c50]"
                          style={{
                            transitionDelay: `${index * 50}ms`,
                            animation:
                              activeDropdown === item.name
                                ? `slideInFromLeft 0.3s ease-out ${
                                    index * 50
                                  }ms both`
                                : "none",
                          }}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <div
            className="md:hidden cursor-pointer p-2 transition-colors duration-300 hover:bg-white/10 rounded"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: "var(--nav-text-color)" }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-sm rounded-lg mt-2 transform transition-transform duration-500 ease-in-out">
            {navItems.map((item, index) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.name ? null : item.name
                      )
                    }
                    className={`text-foreground hover:text-[#1b2c50] block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 hover:bg-[#1b2c50]/10`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item)}
                    className={`text-foreground hover:text-[#1b2c50] block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 hover:bg-[#1b2c50]/10`}
                  >
                    {item.name}
                  </Link>
                )}

                {item.dropdown && activeDropdown === item.name && (
                  <div className="ml-4 space-y-1">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        href={dropItem.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#1b2c50] hover:bg-[#1b2c50]/5 rounded-md transition-all duration-200"
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}
