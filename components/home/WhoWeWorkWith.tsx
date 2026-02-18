import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";

const audiences = [
  {
    title: "CROs & Revenue Leaders",
    description:
      "Rebuilding pipeline engines around AI agents and data-driven workflows. Moving from headcount-dependent growth to systems that compound.",
  },
  {
    title: "CEOs & Founders",
    description:
      "Evaluating AI GTM strategy and making investment decisions based on frameworks, not vendor pitches. Building organizations that scale independently of team size.",
  },
  {
    title: "SVPs of Operations & Product Leaders",
    description:
      "Designing the operating model for human-agent collaboration. Connecting market signals to product roadmaps through continuous intelligence loops.",
  },
];

export default function WhoWeWorkWith() {
  return (
    <Section theme="gray">
      <Container>
        <div className="mb-10 text-center">
          <SectionLabel>Who We Work With</SectionLabel>
          <h2 className="text-display-xl font-serif font-bold text-heading mt-3">
            Built for Executive Teams
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {audiences.map((audience) => (
            <div key={audience.title} className="rounded-lg border border-gray-border bg-white p-6">
              <h3 className="font-semibold text-heading mb-3">
                {audience.title}
              </h3>
              <p className="text-gray-text leading-relaxed text-sm">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-gray-text italic text-sm">
          Whether you are coordinating a commercial operation across seven
          hundred salespeople or building your first outbound motion as a
          founder. The frameworks are the same. The scale is different.
        </p>
      </Container>
    </Section>
  );
}
