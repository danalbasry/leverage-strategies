import Link from "next/link";
import HeroIllustration from "@/components/coaching/HeroIllustration";

export default function CoachingHome() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="coaching-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="font-display text-display-xxl font-bold mb-6">
                AI that actually{" "}
                <span className="text-amber-dark">knows you</span>
              </h1>
              <p className="text-body-l text-gray-dark mb-4">
                I build life operating systems. AI, coaching frameworks, and automation combined into a personal command center that organizes your life and keeps you on track.
              </p>
              <p className="text-body-l font-semibold mb-8">
                30 days. 5 sessions. You walk away with everything built.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/coaching/book" className="coaching-btn coaching-btn-primary">
                  Book a Call
                </Link>
                <Link href="/coaching/how-it-works" className="coaching-btn coaching-btn-secondary">
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="coaching-section-padding bg-soft-sage">
        <div className="coaching-container">
          <div className="max-w-3xl">
            <h2 className="font-display text-display-xl font-bold mb-8">
              What you get
            </h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-amber-dark text-2xl">✓</span>
                <div>
                  <span className="text-body-l font-semibold">A complete operating system built around how you think and work.</span>
                  <span className="text-body-l text-gray-dark"> Not generic templates. Built for you.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-amber-dark text-2xl">✓</span>
                <div>
                  <span className="text-body-l font-semibold">5 coaching sessions where we build it together.</span>
                  <span className="text-body-l text-gray-dark"> Not courses you won&apos;t finish.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-amber-dark text-2xl">✓</span>
                <div>
                  <span className="text-body-l font-semibold">Automations that handle the stuff you hate doing.</span>
                  <span className="text-body-l text-gray-dark"> The repetitive tasks. Gone.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-amber-dark text-2xl">✓</span>
                <div>
                  <span className="text-body-l font-semibold">An AI trained on you.</span>
                  <span className="text-body-l text-gray-dark"> Your voice. Your decisions. Your patterns.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-amber-dark text-2xl">✓</span>
                <div>
                  <span className="text-body-l font-semibold">Accountability so it actually gets used.</span>
                  <span className="text-body-l text-gray-dark"> Not another thing collecting dust.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="coaching-section-padding">
        <div className="coaching-container">
          <h2 className="font-display text-display-xl font-bold mb-12 text-center">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-amber flex items-center justify-center text-white font-display font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="font-display text-display-m font-bold mb-2">Onboarding</h3>
              <p className="text-body-m text-gray-dark">
                You answer questions about your life. Voice-based. On your own time. 7 to 10 hours total.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-amber flex items-center justify-center text-white font-display font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="font-display text-display-m font-bold mb-2">Build Sessions</h3>
              <p className="text-body-m text-gray-dark">
                5 calls where we design and build your system together. You don&apos;t need to know anything about AI.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-amber flex items-center justify-center text-white font-display font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="font-display text-display-m font-bold mb-2">Walk Away</h3>
              <p className="text-body-m text-gray-dark">
                Complete operating system. Trained AI. Automations. And the skills to keep building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Gap Section */}
      <section className="coaching-section-padding bg-soft-stone">
        <div className="coaching-container">
          <div className="two-column">
            <div>
              <h2 className="font-display text-display-xl font-bold">
                You&apos;re thinking &ldquo;I can already do this myself&rdquo;
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-body-l font-semibold">Not quite.</p>
              <p className="text-body-l text-gray-dark">
                You can give ChatGPT context. Write prompts. Tell it about yourself. That&apos;s not what this is.
              </p>
              <p className="text-body-l text-gray-dark">
                This is a structured system I spent years developing. 300+ frameworks from top scientists, philosophers, thought leaders, researchers. Every industry. The best selling books. The TED talks. The podcasts. The research that actually works.
              </p>
              <p className="text-body-l text-gray-dark">
                Hundreds of hours extracting what matters. Built into architecture that creates AI around your specific life.
              </p>
              <p className="text-body-l text-gray-dark">
                Your psychology. Your biology. Your parents&apos; history. Your patterns. Your day to day.
              </p>
              <p className="text-body-l font-semibold">
                You can&apos;t prompt your way to this. You can&apos;t learn it from YouTube. The system doesn&apos;t exist anywhere else because I built it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Therapy and Coaching Can't Do Section */}
      <section className="coaching-section-padding">
        <div className="coaching-container">
          <div className="two-column">
            <div>
              <h2 className="font-display text-display-xl font-bold">
                What therapy and coaching can&apos;t do
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-body-l text-gray-dark">
                A therapist sees you one hour a week. A coach can&apos;t hold your whole context. They&apos;re limited by human bandwidth.
              </p>
              <p className="text-body-l text-gray-dark">
                AI offers something different: persistent memory. Pattern recognition at scale. The ability to hold your entire history, your parents&apos; influence, your money stories, your relationship tendencies, your biological rhythms, your goals you haven&apos;t admitted.
              </p>
              <p className="text-body-l text-gray-dark">
                All connected. All the time. Always adapting.
              </p>
              <p className="text-body-l font-semibold">
                This isn&apos;t replacing human support. It&apos;s adding capabilities that didn&apos;t exist before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Divide Section */}
      <section className="coaching-section-padding bg-soft-warm">
        <div className="coaching-container">
          <div className="max-w-3xl">
            <h2 className="font-display text-display-xl font-bold mb-6">
              AI is creating a divide
            </h2>
            <p className="text-body-l text-gray-dark mb-4">
              People who leverage it fully. People who don&apos;t.
            </p>
            <p className="text-body-l text-gray-dark mb-4">
              Most people aren&apos;t sharing how they use it. It&apos;s their edge.
            </p>
            <p className="text-body-l font-semibold">
              Everyone else has a tool. You&apos;ll have a system engineered around who you actually are.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="coaching-section-padding">
        <div className="coaching-container">
          <div className="two-column">
            <div>
              <h2 className="font-display text-display-xl font-bold">
                Whatever you&apos;re trying to do
              </h2>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-amber-dark text-2xl flex-shrink-0">→</span>
                  <div>
                    <span className="text-body-l font-semibold">Get ahead at work.</span>
                    <span className="text-body-l text-gray-dark"> Systems that make you more valuable in your role.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-amber-dark text-2xl flex-shrink-0">→</span>
                  <div>
                    <span className="text-body-l font-semibold">Build your business.</span>
                    <span className="text-body-l text-gray-dark"> Strategy, operations, marketing. Complete infrastructure.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-amber-dark text-2xl flex-shrink-0">→</span>
                  <div>
                    <span className="text-body-l font-semibold">Manage your life.</span>
                    <span className="text-body-l text-gray-dark"> Finances. Health. Family. All organized.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-amber-dark text-2xl flex-shrink-0">→</span>
                  <div>
                    <span className="text-body-l font-semibold">Become who you&apos;re supposed to be.</span>
                    <span className="text-body-l text-gray-dark"> Career change. Life transition. Finding direction.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="coaching-section-padding bg-soft-sage">
        <div className="coaching-container">
          <div className="max-w-xl mx-auto">
            <div className="card bg-white border-2 border-amber">
              <div className="text-center">
                <span className="inline-block bg-amber text-white text-sm font-display font-semibold px-4 py-1 rounded-full mb-4">
                  Building Case Studies
                </span>
                <p className="text-display-xxl font-display font-bold mb-2">
                  $750
                </p>
                <p className="text-body-m text-gray-dark mb-6">
                  Once I have case studies, this goes to $3,000.
                </p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex gap-3">
                    <span className="text-amber-dark">✓</span>
                    <span>Complete life operating system</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-dark">✓</span>
                    <span>5 coaching sessions (10 hours total)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-dark">✓</span>
                    <span>Custom automations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-dark">✓</span>
                    <span>AI trained on your data</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-dark">✓</span>
                    <span>Skills to keep building</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-dark">✓</span>
                    <span>Everything delivered in 30 days</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-dark mb-6">
                  This is custom work. Each client requires significant hours. Capacity depends on scheduling.
                </p>
                <Link href="/coaching/book" className="coaching-btn coaching-btn-primary w-full">
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="coaching-section-padding bg-black text-white">
        <div className="coaching-container text-center">
          <h2 className="font-display text-display-xl font-bold mb-6">
            You&apos;ve read this far because you know what&apos;s possible
          </h2>
          <p className="text-body-l text-gray-400 mb-4 max-w-2xl mx-auto">
            30 days from now, everything could work differently.
          </p>
          <p className="text-body-l text-white font-semibold mb-8">
            Let&apos;s talk.
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
