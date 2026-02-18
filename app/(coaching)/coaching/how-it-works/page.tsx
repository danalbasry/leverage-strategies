import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description: "30 days. Complete AI systems. Walk away transformed.",
};

export default function HowItWorks() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="coaching-container">
          <div className="max-w-3xl">
            <h1 className="font-display text-display-xxl font-bold mb-6">
              How it works
            </h1>
            <p className="text-body-l text-gray-dark">
              30 days. Your schedule. Complete AI systems. Walk away a wizard.
            </p>
          </div>
        </div>
      </section>

      {/* Simple Version Section */}
      <section className="coaching-section-padding bg-soft-sage">
        <div className="coaching-container">
          <div className="max-w-3xl">
            <h2 className="font-display text-display-xl font-bold mb-6">
              The simple version
            </h2>
            <p className="text-body-l text-gray-dark mb-4">
              You do the onboarding on your own time. We have five calls. I build everything. You walk away with AI infrastructure and the skills to keep going.
            </p>
            <p className="text-body-l font-semibold">
              You don&apos;t need to know anything about tech. Show up. Let me guide you.
            </p>
          </div>
        </div>
      </section>

      {/* What This Is Built On */}
      <section className="coaching-section-padding">
        <div className="coaching-container">
          <div className="two-column">
            <div>
              <h2 className="font-display text-display-xl font-bold">
                What this is built on
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-body-l text-gray-dark">
                300+ frameworks. Top scientists. Philosophers. Thought leaders. Researchers. Best selling authors. TED speakers. Podcast giants. Every industry.
              </p>
              <p className="text-body-l text-gray-dark">
                Hundreds of hours extracting what actually works.
              </p>
              <p className="text-body-l font-semibold">
                All engineered into a system that creates AI around individual humans. You get all of it. Built for your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="coaching-section-padding bg-soft-warm">
        <div className="coaching-container">
          <div className="max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
              <div className="md:col-span-2 flex md:justify-center">
                <div className="w-16 h-16 rounded-full bg-amber flex items-center justify-center text-white font-display font-bold text-xl">
                  1
                </div>
              </div>
              <div className="md:col-span-10">
                <h2 className="font-display text-display-l font-bold mb-4">
                  Custom Onboarding
                </h2>
                <p className="text-body-l text-gray-dark mb-4">
                  A proprietary system I designed. Not a form. Engineered extraction.
                </p>
                <p className="text-body-l text-gray-dark mb-4">
                  Your psychology. Your biology. Your parents&apos; history. Your patterns. Your relationships. Your money stories. Your goals. Your fears.
                </p>
                <p className="text-body-l text-gray-dark mb-4">
                  Stuff you didn&apos;t know was relevant. Stuff that changes everything.
                </p>
                <p className="text-body-l font-semibold">
                  Voice based. Your own time. 7 to 10 hours.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
              <div className="md:col-span-2 flex md:justify-center">
                <div className="w-16 h-16 rounded-full bg-amber flex items-center justify-center text-white font-display font-bold text-xl">
                  2
                </div>
              </div>
              <div className="md:col-span-10">
                <h2 className="font-display text-display-l font-bold mb-4">
                  Knowledge Architecture
                </h2>
                <p className="text-body-l text-gray-dark mb-4">
                  I structure everything you shared.
                </p>
                <p className="text-body-l text-gray-dark mb-4">
                  How your childhood connects to your decisions. How your biology affects your energy. How your patterns show up everywhere.
                </p>
                <p className="text-body-l font-semibold">
                  This is what makes AI understand you instead of just storing facts.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
              <div className="md:col-span-2 flex md:justify-center">
                <div className="w-16 h-16 rounded-full bg-amber flex items-center justify-center text-white font-display font-bold text-xl">
                  3
                </div>
              </div>
              <div className="md:col-span-10">
                <h2 className="font-display text-display-l font-bold mb-4">
                  Build Sessions
                </h2>
                <p className="text-body-l text-gray-dark mb-4">
                  Five 2 hour calls with me.
                </p>
                <p className="text-body-l text-gray-dark mb-4">
                  We map your life. Your 80 year old self looking back. What mattered?
                </p>
                <p className="text-body-l font-semibold">
                  Then we build backwards from there.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
              <div className="md:col-span-2 flex md:justify-center">
                <div className="w-16 h-16 rounded-full bg-amber flex items-center justify-center text-white font-display font-bold text-xl">
                  4
                </div>
              </div>
              <div className="md:col-span-10">
                <h2 className="font-display text-display-l font-bold mb-4">
                  Trained AI + Custom Apps
                </h2>
                <p className="text-body-l text-gray-dark mb-4">
                  AI trained on your data. Apps built for your life.
                </p>
                <p className="text-body-l text-gray-dark mb-4">
                  Your workflows. Your routines. Your needs.
                </p>
                <p className="text-body-l font-semibold">
                  From scratch. Polished. Yours.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-2 flex md:justify-center">
                <div className="w-16 h-16 rounded-full bg-amber flex items-center justify-center text-white font-display font-bold text-xl">
                  5
                </div>
              </div>
              <div className="md:col-span-10">
                <h2 className="font-display text-display-l font-bold mb-4">
                  You Know What To Do Next
                </h2>
                <p className="text-body-l text-gray-dark mb-4">
                  You don&apos;t just walk away with systems. You walk away knowing how to build from here.
                </p>
                <p className="text-body-l font-semibold">
                  That&apos;s the difference. You become genuinely skilled with AI. Independent, not dependent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Walk Away With */}
      <section className="coaching-section-padding bg-soft-stone">
        <div className="coaching-container">
          <div className="max-w-3xl">
            <h2 className="font-display text-display-xl font-bold mb-8">
              What you walk away with
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-amber-dark text-2xl">✓</span>
                <span className="text-body-l">AI that actually knows you</span>
              </li>
              <li className="flex gap-4">
                <span className="text-amber-dark text-2xl">✓</span>
                <span className="text-body-l">Apps built for your specific life</span>
              </li>
              <li className="flex gap-4">
                <span className="text-amber-dark text-2xl">✓</span>
                <span className="text-body-l">Strategy for where you&apos;re going</span>
              </li>
              <li className="flex gap-4">
                <span className="text-amber-dark text-2xl">✓</span>
                <span className="text-body-l">Skills to keep building</span>
              </li>
              <li className="flex gap-4">
                <span className="text-amber-dark text-2xl">✓</span>
                <span className="text-body-l">The edge that compounds. Every month you get further ahead.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="coaching-section-padding bg-black text-white">
        <div className="coaching-container text-center">
          <h2 className="font-display text-display-xl font-bold mb-6">
            Ready to start?
          </h2>
          <p className="text-body-l text-gray-400 mb-8 max-w-2xl mx-auto">
            Book a call. We&apos;ll talk about where you are, what you&apos;re trying to build, and whether this is the right fit.
          </p>
          <Link
            href="/coaching/book"
            className="coaching-btn bg-amber text-white border-2 border-amber hover:bg-amber-dark hover:border-amber-dark"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </>
  );
}
