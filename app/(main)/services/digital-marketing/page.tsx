import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactButton from "@/components/ui/ContactButton";

export const metadata: Metadata = {
  title: "SEO, GEO & Digital Marketing",
  description:
    "Full-service SEO, Generative Engine Optimization, content marketing, social media management, paid search, backlink strategy, and AI search visibility for businesses and professional services firms.",
};

const CORE_SERVICES = [
  {
    title: "Search Engine Optimization (SEO)",
    items: [
      "Technical SEO audits and site health remediation",
      "On-page optimization for every key page and practice area",
      "Keyword research and strategy aligned to how your clients actually search",
      "Site speed, Core Web Vitals, and mobile optimization",
      "Internal linking architecture and URL structure",
      "Google Business Profile setup and optimization for local search",
      "Local SEO for multi-location businesses",
      "Monthly ranking reports with plain-language analysis",
    ],
  },
  {
    title: "Generative Engine Optimization (GEO)",
    items: [
      "AI search visibility audits across ChatGPT, Claude, Perplexity, and Google AI Overviews",
      "Content structured for AI extraction: citations, structured data, FAQ markup",
      "Schema markup strategy for entity recognition and knowledge graph inclusion",
      "Authority signal development so AI models treat your firm as a primary source",
      "Ongoing monitoring of how AI search engines reference your brand and competitors",
      "Content gap analysis: what your competitors are being cited for that you are not",
    ],
  },
  {
    title: "Content Marketing",
    items: [
      "Long-form blog content with proper sourcing and citations",
      "Practice area and service pages written for both human readers and AI indexing",
      "Case study and outcome-based content pipelines",
      "Thought leadership articles and industry commentary",
      "Email newsletter strategy and content",
      "Content calendar planning and editorial management",
      "Content repurposing: one piece becomes a blog, social post, email, and FAQ entry",
    ],
  },
  {
    title: "Social Media Management",
    items: [
      "LinkedIn strategy and content for professional services firms",
      "Instagram, TikTok, X, and YouTube content planning",
      "Short-form video scripting and production guidance",
      "Social media content calendar and scheduling",
      "Community engagement and comment management",
      "Platform-specific optimization for reach and engagement",
      "Monthly performance reporting",
    ],
  },
  {
    title: "Paid Search and Advertising",
    items: [
      "Google Ads setup, management, and optimization",
      "Social media advertising across LinkedIn, Meta, and other platforms",
      "Landing page strategy and conversion optimization",
      "Audience targeting and retargeting campaigns",
      "Budget allocation and ROAS tracking",
      "A/B testing for ad creative and landing pages",
      "Focus on qualified lead generation, not vanity metrics",
    ],
  },
  {
    title: "Backlink Strategy and Digital PR",
    items: [
      "Backlink acquisition from industry publications, directories, and media",
      "Guest posting and contributed content placement",
      "Digital PR for brand mentions and citation building",
      "Competitor backlink analysis and gap identification",
      "Directory and listing management across industry-specific platforms",
      "Link quality monitoring and toxic link disavowal",
    ],
  },
];

const AI_DIFFERENTIATORS = [
  {
    title: "AI-Powered Social Listening",
    description:
      "We deploy agents that monitor Reddit, Quora, forums, and social platforms for conversations relevant to your business. You get a daily briefing of high-value threads, suggested responses, and engagement opportunities. This builds organic visibility on the platforms AI models index most heavily.",
  },
  {
    title: "AI Content Workflows",
    description:
      "Content production runs through AI systems trained on your brand voice, practice areas, and past work. This means higher output at a consistent quality level, with human review at every stage. One client outcome becomes a full content suite: article, social posts, email, FAQ section, and distribution plan.",
  },
  {
    title: "GEO as Standard Practice",
    description:
      "Most agencies still treat SEO and AI search as separate disciplines. We treat GEO as a core part of every engagement. Every piece of content, every page optimization, and every backlink is evaluated for how it performs in both traditional search and AI search.",
  },
  {
    title: "Practitioner Workflow Integration",
    description:
      "For professional services clients, we build AI workflows that sit inside the practitioner's existing process. The content pipeline connects directly to real work product: case results, client outcomes, and professional milestones become search assets without adding to the practitioner's workload.",
  },
];

const VERTICALS = [
  "Law firms and legal practices",
  "Medical, dental, and healthcare practices",
  "Financial advisory and wealth management",
  "Real estate brokerages and commercial firms",
  "Consulting and advisory practices",
  "SaaS and technology companies",
  "Professional services firms of all sizes",
  "Local and multi-location businesses",
];

export default function DigitalMarketingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-hero pt-28 pb-14 lg:pt-36 lg:pb-20">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel dark>Services</SectionLabel>
            <h1 className="text-display-hero font-serif font-bold text-white mt-3 mb-5">
              SEO, GEO & Digital Marketing
            </h1>
            <p className="text-white/70 lg:text-lg max-w-2xl">
              Full-service search engine optimization, generative engine
              optimization, content marketing, social media, paid search, and
              backlink strategy. Everything a digital marketing agency does,
              plus AI search visibility and AI-powered workflows that most
              agencies do not offer.
            </p>
          </div>
        </Container>
      </section>

      {/* Positioning */}
      <Section theme="white">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel className="mb-2">Our Approach</SectionLabel>
            <h2 className="text-display-xl font-serif font-bold text-heading mb-6">
              Traditional digital marketing plus the AI layer most agencies
              have not built yet.
            </h2>
            <div className="space-y-5 text-gray-text lg:text-lg leading-relaxed">
              <p>
                We handle the full scope of digital marketing: SEO, content,
                social, paid search, and backlinks. That is the foundation and
                it has to be right. But we also build the layer that sits on
                top: Generative Engine Optimization, AI search visibility,
                social listening agents, and AI-powered content workflows.
              </p>
              <p>
                The shift is already happening. When someone asks ChatGPT,
                Claude, or Perplexity for a recommendation in your industry,
                the answer is built from structured, citation-rich content
                across the web. Traditional SEO alone does not determine who
                appears in those answers. GEO does. We handle both.
              </p>
              <p>
                Every piece of the marketing stack is designed to work together.
                Your blog content feeds your social. Your social feeds your
                backlinks. Your backlinks feed your domain authority. And your
                domain authority feeds your AI search visibility. Nothing runs
                in isolation.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Services */}
      <Section theme="gray">
        <Container>
          <SectionLabel className="mb-2">Services</SectionLabel>
          <h2 className="text-display-xl font-serif font-bold text-heading mb-3">
            Full-service digital marketing.
          </h2>
          <p className="text-gray-text mb-10 max-w-2xl">
            Each engagement is scoped to what your business actually needs.
            No filler services, no padded retainers.
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            {CORE_SERVICES.map((service) => (
              <div
                key={service.title}
                className="rounded-xl bg-white border border-gray-border p-6 lg:p-8"
              >
                <h3 className="text-display-md font-serif font-bold text-heading mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-body"
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* AI Differentiators */}
      <Section theme="white">
        <Container>
          <SectionLabel className="mb-2">What Sets Us Apart</SectionLabel>
          <h2 className="text-display-xl font-serif font-bold text-heading mb-3">
            The AI layer most agencies do not have.
          </h2>
          <p className="text-gray-text mb-10 max-w-2xl">
            These are capabilities we build in-house. They are not add-ons
            or partnerships with third-party tools.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {AI_DIFFERENTIATORS.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-purple-accent/30 bg-purple-light/30 p-6 lg:p-8"
              >
                <h3 className="font-semibold text-heading mb-3">
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

      {/* How It Works */}
      <Section theme="gray">
        <Container>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionLabel className="mb-2">How It Works</SectionLabel>
              <h2 className="text-display-xl font-serif font-bold text-heading mb-6">
                Scoped to your business. No long-term lock-in.
              </h2>
              <div className="space-y-5 text-gray-text leading-relaxed">
                <p>
                  Every engagement starts with an audit of your current digital
                  presence: what is working, what is not, and where the highest
                  impact opportunities are. We look at your site, your content,
                  your backlink profile, your social presence, your paid spend,
                  and your AI search visibility.
                </p>
                <p>
                  From there, we build a plan with clear deliverables and
                  timelines. Engagements are typically structured as monthly
                  retainers or project-based scopes, depending on what makes
                  sense for the work.
                </p>
                <p>
                  Reporting is straightforward. You get monthly reports that
                  cover rankings, traffic, content performance, backlink
                  growth, AI search visibility, and lead generation. No
                  vanity metrics.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <h3 className="font-semibold text-heading mb-4">
                Industries we work with
              </h3>
              <ul className="space-y-3">
                {VERTICALS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-lg bg-white border border-gray-border p-4"
                  >
                    <svg
                      className="h-4 w-4 text-purple-accent shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                    <span className="text-sm text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section theme="dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-lg font-serif font-bold text-white mb-4">
              Get a digital marketing audit.
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              We will review your current SEO, content, AI search visibility,
              and digital presence and tell you where the highest impact
              opportunities are.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ContactButton variant="primary">
                Get in Touch
              </ContactButton>
              <Link
                href="/professional-services"
                className="text-sm text-white/60 hover:text-white transition-colors underline underline-offset-2"
              >
                See our professional services work
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
