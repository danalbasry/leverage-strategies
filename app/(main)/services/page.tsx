import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceTrack from "@/components/services/ServiceTrack";
import { enterpriseServices, smbServices } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI GTM system design, agentic workflow development, and consulting for enterprise teams and growing businesses.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-hero pt-28 pb-14 lg:pt-36 lg:pb-20">
        <Container>
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <SectionLabel dark>Services</SectionLabel>
              <h1 className="text-display-hero font-serif font-bold text-white mt-3 mb-4">
                What We Do
              </h1>
              <p className="max-w-lg text-white/70 lg:text-lg">
                From designing AI-native GTM systems for enterprise teams to
                personal AI coaching for founders. Two tracks, one mission: build
                systems that scale you.
              </p>
            </div>
            <div className="hidden lg:block">
              <Image
                src="/images/services-graphic.svg"
                alt="Services overview"
                width={500}
                height={340}
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Enterprise Track */}
      <Section theme="white">
        <Container>
          <SectionLabel className="mb-2">Enterprise</SectionLabel>
          <h2 className="text-display-xl font-serif font-bold text-heading mb-3">
            Enterprise Research & Systems
          </h2>
          <p className="text-gray-text mb-10 max-w-2xl">
            For CROs, SVPs of Operations, CEOs, and Heads of Product leading
            commercial teams.
          </p>
          <ServiceTrack services={enterpriseServices} />
        </Container>
      </Section>

      {/* SMB Track */}
      <Section theme="gray">
        <Container>
          <SectionLabel className="mb-2">Founders & SMBs</SectionLabel>
          <h2 className="text-display-xl font-serif font-bold text-heading mb-3">
            AI Consulting & Systems Design
          </h2>
          <p className="text-gray-text mb-10 max-w-2xl">
            For founders, solopreneurs, and growing businesses building the
            infrastructure to punch above their weight.
          </p>
          <ServiceTrack services={smbServices} />
        </Container>
      </Section>
    </>
  );
}
