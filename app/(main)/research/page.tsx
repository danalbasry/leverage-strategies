import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import ResearchListing from "@/components/research/ResearchListing";
import { getAllResearch } from "@/lib/research";

export const metadata: Metadata = {
  title: "Research & Insights",
  description:
    "Practitioner-built frameworks and research for executive teams building AI-native go-to-market systems.",
};

export default function ResearchPage() {
  const articles = getAllResearch();

  return (
    <>
      {/* Hero */}
      <section className="bg-dark-hero pt-28 pb-14 lg:pt-36 lg:pb-20">
        <Container>
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <SectionLabel dark>Research</SectionLabel>
              <h1 className="text-display-hero font-serif font-bold text-white mt-3 mb-4">
                Research & Insights
              </h1>
              <p className="max-w-lg text-white/70 lg:text-lg">
                Practitioner-built frameworks and research for executive teams
                making the shift to AI-native revenue operations.
              </p>
            </div>
            <div className="hidden lg:block">
              <Image
                src="/images/research-graphic.svg"
                alt="Research & Insights"
                width={500}
                height={340}
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Listing area */}
      <section className="bg-gray-bg py-12 lg:py-16">
        <Container>
          <ResearchListing articles={articles} />
        </Container>
      </section>
    </>
  );
}
