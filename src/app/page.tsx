import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/whysection";
import ResortsSection from "@/components/ResortsSection";
import AtollsSection from "@/components/AtollsSection";
import CoverageSection from "@/components/CoverageSection";
import GuidesSection from "@/components/GuidesSection";
import FAQSection from "@/components/FAQSection";
import RecommendationSection from "@/components/RecommendationSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <ResortsSection />
      <AtollsSection />
      <CoverageSection />
      <GuidesSection />
      <FAQSection />
      <RecommendationSection />
    </>
  );
}