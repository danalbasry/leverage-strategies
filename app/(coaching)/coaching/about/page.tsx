import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dan",
  description: "I built what doesn't exist yet. AI that actually knows you. Not ChatGPT with context. Complete systems engineered around your life.",
};

export default function CoachingAbout() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="coaching-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="font-display text-display-xxl font-bold mb-6">
                About Dan
              </h1>
            </div>
            <div>
              <div className="w-full aspect-square max-w-md mx-auto bg-soft-sage rounded-2xl flex items-center justify-center">
                <span className="text-gray-light font-display text-xl">
                  Photo
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built What Doesn't Exist Section */}
      <section className="coaching-section-padding bg-soft-warm">
        <div className="coaching-container">
          <div className="max-w-3xl">
            <h2 className="font-display text-display-xl font-bold mb-8">
              I built what doesn&apos;t exist yet
            </h2>
            <div className="space-y-6 text-body-l text-gray-dark">
              <p>
                AI that actually knows you. Not ChatGPT with context. Complete systems engineered around your life.
              </p>
              <p>
                Your psychology. Your biology. Your history. Your patterns.
              </p>
              <p>
                This took years. 300+ frameworks. Hundreds of hours of research. Scientists, philosophers, thought leaders, researchers. Every industry.
              </p>
              <p className="font-semibold text-black">
                Now I build it for people who want what nobody else has.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* You Don't Need To Know Section */}
      <section className="coaching-section-padding">
        <div className="coaching-container">
          <div className="two-column">
            <div>
              <h2 className="font-display text-display-xl font-bold">
                You don&apos;t need to know anything about AI
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-body-l text-gray-dark">
                That&apos;s the whole point.
              </p>
              <p className="text-body-l text-gray-dark">
                Show up. Let me guide you. Walk away with polished systems and the skills to keep building.
              </p>
              <p className="text-body-l font-semibold">
                You&apos;ll be operating at a level most people don&apos;t know exists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Work Section */}
      <section className="coaching-section-padding bg-soft-stone">
        <div className="coaching-container">
          <div className="max-w-3xl">
            <h2 className="font-display text-display-xl font-bold mb-6">
              Custom work requires real time
            </h2>
            <p className="text-body-l text-gray-dark mb-4">
              This is custom work. Each client requires significant hours from me.
            </p>
            <p className="text-body-l font-semibold">
              This level of customization takes real time. That&apos;s what makes it actually work.
            </p>
          </div>
        </div>
      </section>

      {/* It Works Section */}
      <section className="coaching-section-padding">
        <div className="coaching-container">
          <div className="max-w-3xl">
            <h2 className="font-display text-display-xl font-bold mb-6">
              It works
            </h2>
            <p className="text-body-l text-gray-dark mb-4">
              Not theory. Tested. Refined. Built on the best research available.
            </p>
            <p className="text-body-l font-semibold mb-8">
              If you want AI that actually knows you, let&apos;s talk.
            </p>
            <Link href="/coaching/book" className="coaching-btn coaching-btn-primary">
              Book a Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
