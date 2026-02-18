import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "About",
  description:
    "Leverage Strategies is led by Dan Albasry. A practitioner, not a slideware consultant. Diagnostic, then design, then build-with-you.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-hero pt-28 pb-14 lg:pt-36 lg:pb-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel dark>About</SectionLabel>
            <h1 className="text-display-hero font-serif font-bold text-white mt-3 mb-4">
              About Leverage Strategies
            </h1>
            <p className="text-white/70 lg:text-lg">
              A practitioner, not a slideware consultant.
            </p>
          </div>
        </Container>
      </section>

      {/* Bio Section */}
      <Section theme="white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionLabel className="mb-4">The Person</SectionLabel>
            <h2 className="text-display-lg font-serif font-bold text-heading mb-6">
              Dan Albasry
            </h2>
            <div className="space-y-5 text-body leading-relaxed">
              <p>
                Leverage Strategies works with CROs, CEOs, SVPs of Operations,
                and Heads of Product who know they need to move to AI-native GTM
                but want a practitioner, not a slideware consultant, to help
                them get there.
              </p>
              <p>
                We specialize in three things: designing AI-native GTM systems
                grounded in real revenue operations experience, building the
                agentic workflows and data infrastructure that power those
                systems, and helping executive teams establish the operating
                rhythm to run them.
              </p>
              <p>
                We also work with founders, solopreneurs, and growing businesses
                who want to leverage AI to punch above their weight. From
                personal AI coaching to business process automation to full CRM
                and operational systems. The same systems thinking applies at
                every scale.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Approach Section */}
      <Section theme="gray">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionLabel className="mb-4">Our Approach</SectionLabel>
            <h2 className="text-display-lg font-serif font-bold text-heading mb-6">
              Diagnostic. Design. Build-With-You.
            </h2>
            <div className="space-y-5 text-body leading-relaxed mb-10">
              <p>
                Our approach is diagnostic, then design, then build-with-you. We
                do not hand over a strategy deck and wish you luck. We build the
                system alongside your team, train them to operate it, and
                transfer full capability.
              </p>
              <p>
                The frameworks we publish are the same frameworks we use in
                every engagement. They are not theoretical. They are drawn from
                direct experience building multi-agent GTM systems, deploying
                Clay and Claude Code in production, and working with revenue
                teams that have successfully made the shift from tool-centric to
                system-centric go-to-market.
              </p>
              <p>
                If you are evaluating your AI GTM strategy, we are happy to
                start with a conversation. No pitch. No slide deck. Just an
                honest read on where you are and what the next step looks like
                for your specific situation.
              </p>
            </div>

            {/* Three-step approach */}
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Diagnostic",
                  description:
                    "We map your current revenue system (tools, workflows, team roles, and data flows) to identify what is working and what is breaking.",
                },
                {
                  step: "02",
                  title: "Design",
                  description:
                    "We design the AI-native GTM system architecture: agent workflows, data pipelines, operating rhythm, and role transformations.",
                },
                {
                  step: "03",
                  title: "Build-With-You",
                  description:
                    "We build the system alongside your team, train them to operate it, and transfer full capability. No dependency on us.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-lg border border-gray-border bg-white p-6"
                >
                  <span className="text-2xl font-bold text-purple-accent">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-heading mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-text">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
