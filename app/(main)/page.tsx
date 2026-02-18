import Hero from "@/components/home/Hero";
import ValuePropTracks from "@/components/home/ValuePropTracks";
import FeaturedResearch from "@/components/home/FeaturedResearch";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhoWeWorkWith from "@/components/home/WhoWeWorkWith";
import AboutStrip from "@/components/home/AboutStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValuePropTracks />
      <FeaturedResearch />
      <ServicesGrid />
      <WhoWeWorkWith />
      <AboutStrip />
    </>
  );
}
