import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const serviceCards = [
  {
    title: "AI GTM System Design",
    description:
      "Revenue system mapping, AI-native architecture, and agent role definitions for enterprise GTM teams.",
  },
  {
    title: "Agentic Workflow Development",
    description:
      "Production-ready multi-agent workflows: outbound engines, closed-lost revival, expansion monitors.",
  },
  {
    title: "Personal AI Coaching",
    description:
      "One-on-one coaching for founders and leaders building their personal AI operating system.",
    url: "/coaching",
  },
  {
    title: "Business Process Automation",
    description:
      "Identify and replace repetitive workflows with intelligent automation. Scale operations, not headcount.",
  },
  {
    title: "CRM & Operational Systems",
    description:
      "Design and implement the operational backbone: CRM setup, pipeline management, integrations.",
  },
  {
    title: "Product Strategy Consulting",
    description:
      "Connect product signals, market intelligence, and customer behavior into a continuous feedback loop.",
  },
];

export default function ServicesGrid() {
  return (
    <Section theme="white">
      <Container>
        <div className="mb-10 text-center">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="text-display-xl font-serif font-bold text-heading mt-3">
            Services
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-gray-border bg-white p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-heading mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-text leading-relaxed">
                {service.description}
              </p>
              {service.url && (
                <Link
                  href={service.url}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-dark-hero hover:text-purple-accent transition-colors"
                >
                  Learn More
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/services">View All Services</Button>
        </div>
      </Container>
    </Section>
  );
}
