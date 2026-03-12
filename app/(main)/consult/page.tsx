import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactButton from "@/components/ui/ContactButton";

export const metadata: Metadata = {
  title: "AI Consultation — $500 One-Time Session",
  description:
    "A personalized, one-time AI consultation for professionals in legal, medical, government, banking, and other high-compliance sectors. Walk away with the right tools, best practices, and resources for your field.",
};

const SECTORS = [
  {
    name: "Legal",
    roles: "Law firms, solo practitioners, paralegals, compliance counsel",
    examples: [
      "AI-assisted legal research and case analysis",
      "Contract review and drafting acceleration",
      "Client intake and document automation",
      "Confidentiality-safe tools that respect attorney-client privilege",
    ],
  },
  {
    name: "Medical & Healthcare",
    roles: "Clinics, hospitals, private practices, telehealth providers",
    examples: [
      "Clinical documentation and note generation",
      "Patient intake automation",
      "HIPAA-compliant AI tools and vendor evaluation",
      "Medical research and literature review acceleration",
    ],
  },
  {
    name: "Government & Public Sector",
    roles: "Federal, state, and municipal agencies, public administration",
    examples: [
      "Constituent communication and response automation",
      "Policy research and legislative analysis",
      "FedRAMP and security-cleared tool selection",
      "Internal process automation within compliance boundaries",
    ],
  },
  {
    name: "Banking & Financial Services",
    roles: "Banks, credit unions, wealth management, insurance, fintech",
    examples: [
      "Risk analysis and compliance reporting acceleration",
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
    title: "AI Tool Audit & Recommendations",
    description:
      "A personalized assessment of your current workflow, role, and organization — matched to the exact AI tools that will have the highest impact. No generic lists. Every recommendation is specific to what you actually do.",
  },
  {
    title: "Compliance-First Vendor Evaluation",
    description:
      "Honest, unbiased answers about AI vendors, their data handling policies, and which platforms are safe for your regulatory environment — HIPAA, attorney-client privilege, FINRA, FedRAMP, SOC 2, and beyond.",
  },
  {
    title: "Live Walkthrough & Hands-On Training",
    description:
      "A guided session where I walk you through each recommended tool, show you how to use it effectively in your day-to-day work, and answer every question until you feel confident.",
  },
  {
    title: "Best Practices for Your Field",
    description:
      "Industry-specific guidance on prompt engineering, data handling, output verification, and the operational patterns that separate productive AI use from risky experimentation.",
  },
  {
    title: "Resource Package",
    description:
      "You leave with a curated kit — setup guides, prompt templates, vendor comparison matrices, and reference materials you can share with your team or firm leadership.",
  },
  {
    title: "Ongoing Q&A Support",
    description:
      "After the session, you can reach out with follow-up questions about the tools, vendors, or implementation. The goal is for you to feel fully equipped, not just informed.",
  },
];

export default function ConsultPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-hero pt-28 pb-14 lg:pt-36 lg:pb-20">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel dark>One-Time Consultation</SectionLabel>
            <h1 className="text-display-hero font-serif font-bold text-white mt-3 mb-5">
              AI Tools & Strategy for High-Compliance Professionals
            </h1>
            <p className="text-white/70 lg:text-lg max-w-2xl mb-8">
              A single, focused session to identify the best AI tools for your
              field, walk you through how to use them, and leave you with
              everything you need to leverage them confidently — with your
              compliance and confidentiality requirements front and center.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-white">$500</span>
                <span className="text-white/50 text-sm">one-time session</span>
              </div>
              <ContactButton variant="primary" className="sm:ml-4">
                Book Your Consultation
              </ContactButton>
            </div>
          </div>
        </Container>
      </section>

      {/* What You Get */}
      <Section theme="white">
        <Container>
          <SectionLabel className="mb-2">What You Get</SectionLabel>
          <h2 className="text-display-xl font-serif font-bold text-heading mb-3">
            Everything you need to adopt AI with confidence.
          </h2>
          <p className="text-gray-text mb-10 max-w-2xl">
            This isn&apos;t a generic overview of ChatGPT. It&apos;s a
            personalized working session built around your role, your
            organization, and the regulatory constraints of your industry.
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
          <SectionLabel className="mb-2">Sectors</SectionLabel>
          <h2 className="text-display-xl font-serif font-bold text-heading mb-3">
            Built for industries where confidentiality isn&apos;t optional.
          </h2>
          <p className="text-gray-text mb-10 max-w-2xl">
            Every recommendation is made with your sector&apos;s regulatory and
            data handling requirements as the starting point — not an
            afterthought.
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
          <SectionLabel className="mb-2">How It Works</SectionLabel>
          <h2 className="text-display-xl font-serif font-bold text-heading mb-10">
            Simple, focused, and actionable.
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Tell me about your work",
                description:
                  "We start with a short intake — your role, your organization, the tools you currently use, and what you're trying to accomplish. This lets me tailor everything to your situation.",
              },
              {
                step: "02",
                title: "Live consultation session",
                description:
                  "A focused, hands-on session where I walk you through the recommended tools, demonstrate how to use them in your workflows, and answer every question you have about vendors, pricing, and compliance.",
              },
              {
                step: "03",
                title: "Walk away equipped",
                description:
                  "You leave with a complete resource package — tool recommendations, setup guides, prompt templates, and vendor evaluations. Plus ongoing access for follow-up questions.",
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

      {/* Why Me */}
      <Section theme="purple-light">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel className="mb-2">Why Leverage Strategies</SectionLabel>
            <h2 className="text-display-xl font-serif font-bold text-heading mb-6">
              Not a course. Not a webinar. A working session with someone who
              does this every day.
            </h2>
            <div className="text-left space-y-4 mt-8">
              {[
                "I've worked hands-on with every major AI platform — I know what actually works versus what's marketing.",
                "Recommendations are specific to your role, your workflows, and your compliance constraints — not a one-size-fits-all list.",
                "Every tool I suggest is vetted for your sector's data handling and regulatory requirements before I recommend it.",
                "You walk away with actionable resources and real competence, not a slide deck you'll never open.",
                "I work across legal, medical, government, banking, and enterprise — so I understand the patterns and pitfalls unique to high-compliance environments.",
              ].map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-purple-accent shrink-0 mt-0.5"
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
                  <p className="text-body leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section theme="dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-lg font-serif font-bold text-white mb-4">
              Ready to leverage AI the right way?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              One session. $500. Walk away with the tools, training, and
              resources to use AI confidently in your field.
            </p>
            <ContactButton variant="primary">
              Book Your Consultation
            </ContactButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
