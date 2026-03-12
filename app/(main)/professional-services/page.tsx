import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactButton from "@/components/ui/ContactButton";

export const metadata: Metadata = {
  title: "AI Systems for Professional Services",
  description:
    "SEO, GEO, AI search visibility, strategic positioning, and practitioner workflow systems for professional services firms in law, healthcare, financial advisory, real estate, and consulting.",
};

const SERVICES = [
  {
    title: "Generative Engine Optimization (GEO) and AI Search Visibility",
    description:
      "When a potential client asks an AI \"Who is the best [your specialty] in [your city]?\", the AI constructs an answer from structured, citation-rich content across the web. If your firm does not produce that content, you are not in the answer.",
    details:
      "We build content systems that make your firm the definitive source AI models reference. This includes structured blog content with proper citations and authority signals, FAQ sections designed for AI extraction, schema markup strategies, and ongoing content pipelines tied to your actual work product and case results.",
    featured: false,
  },
  {
    title: "Social Listening and Reputation Agents",
    description:
      "We deploy AI agents that monitor Reddit, forums, Quora, and social platforms for conversations relevant to your practice area. When someone posts a question, shares an experience, or asks for recommendations in your field, the system flags it in real time.",
    details:
      "You get a daily briefing of high-value threads with suggested responses, relevant content to reference, and engagement opportunities that build organic visibility over time. This is not spam. It is structured, authentic participation in the conversations your potential clients are already having, informed by AI that knows your firm's work, your published content, and your areas of expertise. Over time, this creates a layer of organic references across the platforms that AI models index most heavily.",
    featured: true,
  },
  {
    title: "Practitioner Workflow Systems",
    description:
      "We build AI workflows trained on how your senior people actually work. The output is not generic AI drafting. It is a trained system that mirrors the practitioner's thinking, structure, and tone, producing first-pass work product that is ready for review in a fraction of the normal time.",
    details:
      "For a litigator, that means disclosure analysis, cross-examination prep, and closing submissions drafted in their voice. For a physician, that means clinical note generation, referral letters, and patient communication. For a financial advisor, that means portfolio summaries, compliance documentation, and client reports.",
    featured: false,
  },
  {
    title: "Content Pipelines",
    description:
      "Every significant outcome your firm achieves is a content asset waiting to be created. We build repeatable pipelines that turn case results, client outcomes, published research, and professional milestones into blog posts, social content, podcast material, and short-form video, all structured for both human readers and AI indexing.",
    details:
      "The system runs on a cadence. You provide the raw material (a case summary, a client win, a regulatory update), and the pipeline produces the full content suite: long-form article with citations, LinkedIn post, FAQ section, and suggested social distribution plan.",
    featured: false,
  },
  {
    title: "Client Acquisition and Intake Optimization",
    description:
      "Many professional services firms spend heavily on Google Ads and traditional SEO but receive a disproportionate number of unqualified leads. We audit your current acquisition funnel, identify where qualified prospects are dropping off or never arriving, and restructure the digital presence to attract the right clients at the right price point.",
    details:
      "This includes rebuilding practice area pages for AI search, restructuring firm profiles for entity recognition, and aligning paid spend with the queries that actually convert.",
    featured: false,
  },
  {
    title: "SEO, Social Media, and Backlink Strategy",
    description:
      "GEO does not replace traditional SEO. It sits on top of it. We handle both. This includes technical SEO audits, on-page optimization, keyword strategy aligned to how your clients actually search, backlink acquisition from industry publications and directories, Google Business Profile optimization for local search, and social media content strategy across LinkedIn, Instagram, TikTok, X, and YouTube.",
    details:
      "We also manage paid search (Google Ads, social ads) when it makes sense, with a focus on qualified lead generation rather than volume. Every piece of the marketing stack is designed to work together: your blog content feeds your social, your social feeds your backlinks, your backlinks feed your domain authority, and your domain authority feeds your AI search visibility.",
    featured: false,
  },
];

const AUDIENCES = [
  "Medical and dental practices looking to improve patient acquisition and reduce administrative burden on practitioners",
  "Law firms where one or two senior lawyers carry the caseload and reputation but cannot scale without burning out",
  "Financial advisory and wealth management firms that need compliant, personalized client communications at scale",
  "Real estate brokerages and commercial firms that want to dominate local AI search results",
  "Consulting and advisory practices where thought leadership drives client acquisition but content production is inconsistent",
  "Any professional services firm spending $10K+ per month on marketing without seeing proportional growth in qualified inquiries",
];

const ENGAGEMENTS = [
  "GEO audit and content strategy for AI search visibility",
  "Content pipeline design and launch, turning firm outcomes into search assets",
  "Social listening and reputation agent deployment across Reddit, forums, and social platforms",
  "Trained AI workflow for a senior practitioner's case prep, documentation, or reporting process",
  "Full digital presence restructure for AI-era client acquisition",
  "SEO, social media, and backlink strategy aligned to both traditional search and AI search",
];

export default function ProfessionalServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-hero pt-28 pb-14 lg:pt-36 lg:pb-20">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel dark>Industries</SectionLabel>
            <h1 className="text-display-hero font-serif font-bold text-white mt-3 mb-5">
              AI Systems for Professional Services Firms
            </h1>
            <p className="text-white/70 lg:text-lg max-w-2xl">
              SEO, Generative Engine Optimization, AI search visibility,
              strategic positioning, and practitioner workflow systems for firms
              in law, healthcare, financial advisory, real estate, and
              consulting. We turn expertise into scalable systems.
            </p>
          </div>
        </Container>
      </section>

      {/* The Problem */}
      <Section theme="white">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel className="mb-2">The Problem</SectionLabel>
            <h2 className="text-display-xl font-serif font-bold text-heading mb-6">
              Expertise does not scale by default.
            </h2>
            <div className="space-y-5 text-gray-text lg:text-lg leading-relaxed">
              <p>
                Professional services firms have a specific problem that most
                marketing agencies and AI consultants do not understand. Your
                business runs on credibility. Your clients find you through
                search, referrals, or reputation. Your senior practitioners are
                the product, and they cannot be cloned.
              </p>
              <p>
                The result is a predictable bottleneck. The people who generate
                revenue are also the people buried in case prep, client reports,
                compliance documentation, and content that never gets written.
                Meanwhile, the firm's digital presence is managed by a
                generalist agency producing content that worked three years ago
                but is now invisible to the platforms that matter most: AI search
                engines like ChatGPT, Claude, Perplexity, and Google AI
                Overviews.
              </p>
              <p>
                This is not a technology problem. It is a systems problem. And
                it requires someone who understands both the AI and the industry.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* What We Build */}
      <Section theme="gray">
        <Container>
          <SectionLabel className="mb-2">What We Build</SectionLabel>
          <h2 className="text-display-xl font-serif font-bold text-heading mb-3">
            SEO. GEO. Strategic positioning. Practitioner workflows.
          </h2>
          <p className="text-gray-text mb-10 max-w-2xl">
            Each system is built around your firm's specific practice areas,
            competitive landscape, and client acquisition goals.
          </p>

          <div className="space-y-6">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className={`rounded-xl bg-white border p-6 lg:p-8 ${
                  service.featured
                    ? "border-purple-accent/40 ring-1 ring-purple-accent/20"
                    : "border-gray-border"
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <h3 className="text-display-md font-serif font-bold text-heading">
                    {service.title}
                  </h3>
                  {service.featured && (
                    <span className="section-label text-purple-accent bg-purple-light px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
                      Key Differentiator
                    </span>
                  )}
                </div>
                <div className="space-y-4 text-gray-text leading-relaxed">
                  <p>{service.description}</p>
                  <p>{service.details}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Who This Is For */}
      <Section theme="white">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel className="mb-2">Who This Is For</SectionLabel>
            <h2 className="text-display-xl font-serif font-bold text-heading mb-8">
              Firms where the practitioners are the product.
            </h2>
            <ul className="space-y-4">
              {AUDIENCES.map((item) => (
                <li key={item} className="flex items-start gap-3">
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
                  <span className="text-body leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* How We Work */}
      <Section theme="gray">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel className="mb-2">How We Work</SectionLabel>
            <h2 className="text-display-xl font-serif font-bold text-heading mb-6">
              Scoped projects built around how your firm operates.
            </h2>
            <div className="space-y-5 text-gray-text leading-relaxed mb-10">
              <p>
                Every engagement starts with a focused consultation to
                understand how the firm operates: who does what, where the
                bottlenecks are, and what the senior practitioners' workflows
                look like from intake through delivery.
              </p>
              <p>
                From there, we scope a specific project. Typical engagements
                include:
              </p>
            </div>
            <div className="space-y-3">
              {ENGAGEMENTS.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-lg bg-white border border-gray-border p-4"
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                  <span className="text-sm text-body">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-text mt-8">
              Every engagement is confidential. We do not publish client names,
              case details, or proprietary workflows without explicit permission.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section theme="dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-lg font-serif font-bold text-white mb-4">
              Discuss how AI systems can work for your practice.
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Book a consultation at{" "}
              <Link
                href="/consult"
                className="text-white/80 underline underline-offset-2 hover:text-white transition-colors"
              >
                leveragestrategies.ca/consult
              </Link>{" "}
              or reach out directly.
            </p>
            <ContactButton variant="primary">
              Get in Touch
            </ContactButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
