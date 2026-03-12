import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactButton from "@/components/ui/ContactButton";

export const metadata: Metadata = {
  title: "AI Consultation",
  description:
    "One-time AI consultation for professionals in legal, medical, government, banking, and other high-compliance sectors.",
};

const SECTORS = [
  {
    name: "Legal",
    roles: "Law firms, solo practitioners, paralegals, compliance counsel",
    examples: [
      "AI-assisted legal research and case analysis",
      "Contract review and drafting workflows",
      "Client intake and document automation",
      "Tools that respect attorney-client privilege",
    ],
  },
  {
    name: "Medical & Healthcare",
    roles: "Clinics, hospitals, private practices, telehealth providers",
    examples: [
      "Clinical documentation and note generation",
      "Patient intake automation",
      "HIPAA-compliant tool selection and vendor evaluation",
      "Medical research and literature review",
    ],
  },
  {
    name: "Government & Public Sector",
    roles: "Federal, state, and municipal agencies, public administration",
    examples: [
      "Constituent communication and response workflows",
      "Policy research and legislative analysis",
      "FedRAMP and security-cleared tool selection",
      "Internal process automation within compliance boundaries",
    ],
  },
  {
    name: "Banking & Financial Services",
    roles: "Banks, credit unions, wealth management, insurance, fintech",
    examples: [
      "Risk analysis and compliance reporting",
      "Client communication and advisory workflows",
      "FINRA, SOX, and regulatory-compliant tool selection",
      "Document processing and data extraction",
    ],
  },
  {
    name: "Enterprise & Private Sector",
    roles: "Operations, HR, executive leadership, professional services",
    examples: [
      "Workflow automation across departments",
      "Internal knowledge management and AI assistants",
      "Vendor evaluation for data-sensitive environments",
      "Team-wide AI adoption strategy and training",
    ],
  },
];

const DELIVERABLES = [
  {
    title: "Tool Recommendations",
    description:
      "An assessment of your current workflow, role, and organization matched to the AI tools that fit. Recommendations are specific to what you do, not a generic list.",
  },
  {
    title: "Vendor Evaluation",
    description:
      "Clear answers on AI vendors, data handling policies, and which platforms meet your regulatory requirements. HIPAA, attorney-client privilege, FINRA, FedRAMP, SOC 2.",
  },
  {
    title: "Hands-On Walkthrough",
    description:
      "A live session where we go through each recommended tool, how to use it in your day-to-day, and any questions you have.",
  },
  {
    title: "Best Practices",
    description:
      "Industry-specific guidance on prompt engineering, data handling, output verification, and the operational patterns that matter in regulated environments.",
  },
  {
    title: "Resource Package",
    description:
      "Setup guides, prompt templates, vendor comparison notes, and reference materials you can share with your team or firm leadership.",
  },
  {
    title: "Follow-Up Support",
    description:
      "After the session, you can reach out with follow-up questions about the tools, vendors, or implementation.",
  },
];

export default function ConsultPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-hero pt-28 pb-14 lg:pt-36 lg:pb-20">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel dark>Consultation</SectionLabel>
            <h1 className="text-display-hero font-serif font-bold text-white mt-3 mb-5">
              AI Consultation for Regulated Industries
            </h1>
            <p className="text-white/70 lg:text-lg max-w-2xl mb-8">
              We consult for professionals and organizations in high-compliance
              sectors. One session covering the right tools for your field,
              how to use them, and the resources to get started.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-white">$500</span>
                <span className="text-white/50 text-sm">one-time session</span>
              </div>
              <ContactButton variant="primary" className="sm:ml-4">
                Book a Consultation
              </ContactButton>
            </div>
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <Section theme="white">
        <Container>
          <SectionLabel className="mb-2">What&apos;s Included</SectionLabel>
          <h2 className="text-display-xl font-serif font-bold text-heading mb-3">
            The session covers everything you need to get going.
          </h2>
          <p className="text-gray-text mb-10 max-w-2xl">
            Tailored to your role, your organization, and the regulatory
            requirements of your industry.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DELIVERABLES.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-border p-6 hover:border-purple-accent/30 transition-colors"
              >
                <h3 className="font-semibold text-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-text leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Sectors */}
      <Section theme="gray">
        <Container>
          <SectionLabel className="mb-2">Industries We Work With</SectionLabel>
          <h2 className="text-display-xl font-serif font-bold text-heading mb-3">
            Compliance and confidentiality are the starting point.
          </h2>
          <p className="text-gray-text mb-10 max-w-2xl">
            Every recommendation accounts for your sector&apos;s regulatory and
            data handling requirements.
          </p>

          <div className="space-y-6">
            {SECTORS.map((sector) => (
              <div
                key={sector.name}
                className="rounded-xl bg-white border border-gray-border p-6 lg:p-8"
              >
                <div className="lg:flex lg:gap-8">
                  <div className="lg:w-1/3 mb-4 lg:mb-0">
                    <h3 className="text-display-md font-serif font-bold text-heading">
                      {sector.name}
                    </h3>
                    <p className="text-sm text-gray-text mt-1">{sector.roles}</p>
                  </div>
                  <div className="lg:w-2/3">
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {sector.examples.map((example) => (
                        <li
                          key={example}
                          className="flex items-start gap-2 text-sm text-body"
                        >
                          <svg
                            className="h-4 w-4 text-purple-accent shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How It Works */}
      <Section theme="white">
        <Container>
          <SectionLabel className="mb-2">Process</SectionLabel>
          <h2 className="text-display-xl font-serif font-bold text-heading mb-10">
            How it works.
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Intake",
                description:
                  "You share your role, your organization, the tools you currently use, and what you are trying to accomplish. This lets us tailor the session to your situation.",
              },
              {
                step: "02",
                title: "Live Session",
                description:
                  "We walk through the recommended tools, demonstrate how they apply to your workflows, and cover any questions you have about vendors, pricing, and compliance.",
              },
              {
                step: "03",
                title: "Deliverables",
                description:
                  "You receive your resource package with tool recommendations, setup guides, prompt templates, and vendor evaluations. Follow-up questions are welcome after the session.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <span className="text-6xl font-bold text-purple-accent/10 font-serif">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold text-heading mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-text leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section theme="dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-lg font-serif font-bold text-white mb-4">
              Get in touch to book a session.
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              $500, one session. Covers tools, training, and resources
              for your field.
            </p>
            <ContactButton variant="primary">
              Book a Consultation
            </ContactButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
