import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Call",
  description: "30 minutes. Real conversation. What you're trying to accomplish, what we'd build, whether it's right. No pressure. No pitch.",
};

export default function Book() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="coaching-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-display-xxl font-bold mb-6">
              Let&apos;s talk
            </h1>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="coaching-section-padding">
        <div className="coaching-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-display-l font-bold mb-4">
                30 minutes. Real conversation.
              </h2>
              <p className="text-body-l text-gray-dark mb-4">
                What you&apos;re trying to accomplish. What we&apos;d build. Whether it&apos;s right.
              </p>
              <p className="text-body-l font-semibold">
                No pressure. No pitch.
              </p>
            </div>

            {/* Calendar Placeholder */}
            <div className="card bg-soft-warm mb-12">
              <div className="aspect-video flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
                <div className="text-center">
                  <p className="font-display font-semibold text-xl mb-2">
                    Calendar Embed
                  </p>
                  <p className="text-gray-dark text-body-m">
                    Calendly or Cal.com widget will go here
                  </p>
                  <p className="text-gray-light text-sm mt-4">
                    Replace this div with your calendar embed code
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
