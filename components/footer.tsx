"use client";

import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Products", href: "#products" },
    { name: "Certificates", href: "#certificates" },
    { name: "Partners", href: "#partners" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative bg-primary text-primary-foreground bg-no-repeat bg-contain bg-bottom"
      style={{ backgroundImage: "url('/images/construction-bg-footer.jpg')" }} // ensure the file name has no space
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-primary/90" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/logo-1.png"
                alt="KD Logo"
                width={200}
                height={60}
                className="object-contain"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer text-sm sm:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-primary-foreground/80 text-xs sm:text-sm">
                  <p>3rd Floor, Flat No.303, Wing 1</p>
                  <p>Ramdev Dham Co.Op.Hsg Soc.Ltd</p>
                  <p>Kenwood Park, Behind Seven Square School</p>
                  <p>Miraroad-East, Thane-401107</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-xs sm:text-sm">
                  +91 9920374769
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-xs sm:text-sm">
                  kdrmcllp@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/80 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} KD. All rights reserved. Built with excellence and
              precision.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <span className="text-primary-foreground/80 hover:text-accent cursor-pointer transition-colors">
                Privacy Policy
              </span>
              <span className="text-primary-foreground/80 hover:text-accent cursor-pointer transition-colors">
                Terms of Service
              </span>
              <span className="text-primary-foreground/80 hover:text-accent cursor-pointer transition-colors">
                Sitemap
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
