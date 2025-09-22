import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
// import CertificatesSection from "@/components/certificates-section";
import PartnersSection from "@/components/partners-section";
import ProductsSection from "@/components/products-section";
import BuconSection from "@/components/bucon-section";
import RmcExplanationSection from "@/components/rmc-explanation-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KD RMC LLP",
  alternateName: "KD",
  url: "https://kd-concrete.com",
  logo: "https://kd-concrete.com/logo.png",
  description:
    "Leading crushed aggregates and ready mix concrete supplier with ISO certification and 10+ years experience. Premium quality RMC and VSI aggregates for all construction needs.",
  foundingDate: "2017",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "3rd Floor, Flat No.303, Wing 1, Ramdev Dham Co.Op.Hsg Soc.Ltd",
    addressLocality: "Miraroad-East",
    addressRegion: "Thane",
    postalCode: "401107",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-98765-43210",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "ISO 9001:2015 Quality Management System",
      credentialCategory: "Quality Certification",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "VSI Technology Certification",
      credentialCategory: "Industry Standard",
    },
  ],
  areaServed: {
    "@type": "State",
    name: "Maharashtra",
  },
  serviceType: ["Crushed Aggregates Supply", "Ready Mix Concrete Supply"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
  },
};

export const metadata = {
  title:
    "KD RMC LLP - Premium Crushed Aggregates & Ready Mix Concrete | Mumbai",
  description:
    "Leading supplier of quality crushed aggregates and ready mix concrete in Mumbai. ISO certified with 10+ years experience. VSI technology for superior quality construction materials.",
  keywords:
    "crushed aggregates, ready mix concrete, RMC, VSI technology, construction materials, Mumbai, Maharashtra, quality aggregates, concrete supplier, building materials",
  authors: [{ name: "KD RMC LLP" }],
  creator: "KD RMC LLP",
  publisher: "KD RMC LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kd-concrete.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KD RMC LLP - Premium Crushed Aggregates & Ready Mix Concrete",
    description:
      "Leading supplier of quality crushed aggregates and ready mix concrete in Mumbai. ISO certified with 10+ years experience.",
    url: "https://kd-concrete.com",
    siteName: "KD RMC LLP",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KD RMC LLP - Quality Crushed Aggregates",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KD RMC LLP - Premium Crushed Aggregates & Ready Mix Concrete",
    description:
      "Leading supplier of quality crushed aggregates and ready mix concrete in Mumbai. ISO certified with 10+ years experience.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen overflow-x-hidden w-full">
        <Navbar />
        <HeroSection />
        <AboutSection />
        {/* <CertificatesSection /> */}
        <PartnersSection />
        <ProductsSection />
        <BuconSection />
        <RmcExplanationSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
