import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AboutCompanySection from "@/components/about-company-section";
import VisionMissionSection from "@/components/vision-mission-section";
import QualityAggregatesSection from "@/components/quality-aggregates-section";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About KD RMC LLP - Quality Crushed Aggregates",
  description:
    "Learn about KD RMC LLP's mission, vision, and commitment to delivering quality crushed aggregates using advanced VSI technology.",
  url: "https://kd-concrete.com/about-us",
  mainEntity: {
    "@type": "Organization",
    name: "KD RMC LLP",
    description:
      "Leading manufacturer of quality crushed aggregates with 10+ years of experience in the industry.",
  },
};

export const metadata = {
  title: "About Us - KD RMC LLP | Quality Crushed Aggregates",
  description:
    "Learn about KD RMC LLP mission, vision, and commitment to delivering quality crushed aggregates using advanced VSI technology.",
  keywords:
    "about KD RMC LLP, crushed aggregates, VSI technology, construction materials, quality aggregates",
  openGraph: {
    title: "About Us - KD RMC LLP",
    description:
      "Leading manufacturer of quality crushed aggregates with 10+ years of experience",
    type: "website",
    url: "https://kd-concrete.com/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen overflow-x-hidden w-full">
        <Navbar />
        <div className="pt-16 w-full">
          <AboutCompanySection />
          <VisionMissionSection />
          <QualityAggregatesSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
