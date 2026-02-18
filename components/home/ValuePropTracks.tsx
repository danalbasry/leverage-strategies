import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const tracks = [
  {
    label: "For Enterprise Revenue Leaders",
    title: "Research & Frameworks",
    description:
      "Practitioner-built frameworks for CROs, SVPs of Operations, CEOs, and Heads of Product navigating the shift to AI-native go-to-market. Not theory. Operating models drawn from direct experience building multi-agent GTM systems.",
    cta: { label: "Explore Research", href: "/research" },
  },
  {
    label: "For Founders & SMBs",
    title: "AI Consulting & Systems Design",
    description:
      "From personal AI coaching to business process automation to full CRM and operational systems. We help founders and growing businesses build the infrastructure that lets them punch above their weight.",
    cta: { label: "See Services", href: "/services" },
  },
];

export default function ValuePropTracks() {
  return (
    <Section theme="white">
      <Container>
        <div className="mb-10 text-center">
          <SectionLabel>
            Two Tracks, One Mission
          </SectionLabel>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {tracks.map((track) => (
            <div
              key={track.title}
              className="rounded-lg border border-gray-border bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="section-label text-purple-accent mb-3">
                {track.label}
              </p>
              <h3 className="text-display-md font-serif font-bold text-heading mb-3">
                {track.title}
              </h3>
              <p className="text-body mb-6 leading-relaxed">
                {track.description}
              </p>
              <Button href={track.cta.href} variant="primary">
                {track.cta.label}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
