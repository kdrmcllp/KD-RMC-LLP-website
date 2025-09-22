"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, ExternalLink, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: [
        "3rd Floor, Flat No.303, Wing 1",
        "Ramdev Dham Co.Op.Hsg Soc.Ltd",
        "Kenwood Park, Behind Seven Square School",
        "Miraroad-East, Thane-401107",
      ],
      action: "View on Map",
      actionType: "map",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: [
        "+91 9920374769",
        "Quick Response Guaranteed",
        "Available 24/7",
      ],
      action: "Chat on WhatsApp",
      actionType: "whatsapp",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 9920374769", "+91 9920374769"],
      action: "Call Now",
      actionType: "phone",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["kdrmcllp@gmail.com", "kdpurohit1284@gmail.com"],
      action: "Send Email",
      actionType: "email",
    },
  ];

  const openGoogleMaps = () => {
    const address =
      "3rd Floor, Flat No.303, Wing 1, Ramdev Dham Co.Op.Hsg Soc.Ltd, Kenwood Park, Behind Seven Square School, Miraroad-East, Thane-401107";
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(url, "_blank");
  };

  const openWhatsApp = () => {
    const phoneNumber = "9920374769";
    const message =
      "Hi I came across your website and would like to have a meeting interested";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleContactAction = (type: string) => {
    switch (type) {
      case "map":
        openGoogleMaps();
        break;
      case "whatsapp":
        openWhatsApp();
        break;
      case "phone":
        window.location.href = "tel:+919920374769";
        break;
      case "email":
        window.location.href = "mailto:kdrmcllp@gmail.com";
        break;
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch with <span style={{ color: "#1b2c50" }}>Our Team</span>
          </h2>
          <div className="w-24 h-1 bg-[#1b2c50] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your concrete requirements? Our experienced team is
            here to provide expert guidance and competitive pricing for your
            next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className={`bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6 flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        info.actionType === "whatsapp"
                          ? "bg-green-100"
                          : "bg-[#1b2c50]/10"
                      }`}
                    >
                      <info.icon
                        className={`w-6 h-6`}
                        stroke="#1b2c50"
                        strokeWidth={1.8}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {info.title}
                      </h3>
                      <div className="space-y-1 mb-4">
                        {info.details.map((d, i) => (
                          <p key={i} className="text-gray-600 text-sm">
                            {d}
                          </p>
                        ))}
                      </div>
                      <button
                        onClick={() => handleContactAction(info.actionType)}
                        className={`inline-flex items-center px-4 py-2 border rounded-md text-sm font-medium transition-colors duration-200 ${
                          info.actionType === "whatsapp"
                            ? "text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
                            : "text-[#1b2c50] border-[#1b2c50] hover:bg-[#1b2c50] hover:text-white"
                        }`}
                      >
                        {info.action}
                        {info.actionType === "map" && (
                          <ExternalLink className="w-4 h-4 ml-2" />
                        )}
                        {info.actionType === "whatsapp" && (
                          <MessageCircle className="w-4 h-4 ml-2" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div
            className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm h-full overflow-hidden">
              <iframe
                title="KD Location Map"
                src="https://www.google.com/maps/search/?api=1&query=3rd%20Floor%2C%20Flat%20No.303%2C%20Wing%201%2C%20Ramdev%20Dham%20Co.Op.Hsg%20Soc.Ltd%2C%20Kenwood%20Park%2C%20Behind%20Seven%20Square%20School%2C%20Miraroad-East%2C%20Thane-401107"
                width="100%"
                height="100%"
                className="rounded-lg min-h-[400px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
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
      `}</style>
    </section>
  );
}
