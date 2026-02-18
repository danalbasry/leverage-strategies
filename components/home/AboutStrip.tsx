"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import { useContact } from "@/components/providers/ContactProvider";

export default function AboutStrip() {
  const { openContact } = useContact();

  return (
    <Section theme="white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-display-lg font-serif font-bold text-heading mb-6">
            A Practitioner, Not a Slideware Consultant
          </h2>
          <p className="text-body leading-relaxed mb-4">
            Leverage Strategies is led by Dan Albasry. Our approach is
            diagnostic, then design, then build-with-you. We do not hand over a
            strategy deck and wish you luck. We build the system alongside your
            team, train them to operate it, and transfer full capability.
          </p>
          <p className="text-body leading-relaxed mb-8">
            The frameworks we publish are the same frameworks we use in every
            engagement. They are drawn from direct experience building
            multi-agent GTM systems, deploying Clay and Claude Code in
            production, and working with revenue teams that have made the shift.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href="/about" variant="primary">
              About Us
            </Button>
            <button
              onClick={openContact}
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 border-2 border-purple-accent text-purple-accent hover:bg-purple-accent hover:text-white"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
