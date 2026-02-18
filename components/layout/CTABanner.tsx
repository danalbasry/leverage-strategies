"use client";

import Container from "./Container";
import { useContact } from "@/components/providers/ContactProvider";

export default function CTABanner() {
  const { openContact } = useContact();

  return (
    <section className="bg-dark-hero py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-4xl lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-display-lg font-serif font-bold text-white mb-3">
              Drive stronger performance on the metrics that matter most.
            </h2>
            <p className="text-white/60 max-w-xl">
              Get in touch to learn how Leverage Strategies can help your team
              build AI-native revenue systems.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button
              onClick={openContact}
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 bg-purple-accent text-white hover:bg-purple-accent-hover shadow-sm whitespace-nowrap"
            >
              Talk to Us
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
