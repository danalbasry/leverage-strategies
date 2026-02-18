import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-dark-hero pt-28 pb-16 lg:pt-32 lg:pb-20">
      <Container>
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Text */}
          <div>
            <h1 className="text-display-hero font-serif font-bold text-white mb-4 leading-tight">
              Built for leaders.<br />
              Wired for what&apos;s next.
            </h1>
            <p className="text-white/70 mb-6 max-w-lg lg:text-lg">
              Research, frameworks, and consulting for executive teams building
              AI-native go-to-market systems, powered by practitioner experience,
              not vendor pitches.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/research" variant="primary">
                Explore Research
              </Button>
              <Button href="/services" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-dark-hero">
                Our Services
              </Button>
            </div>
          </div>
          {/* Graphic */}
          <div className="hidden lg:block">
            <Image
              src="/images/hero-graphic.svg"
              alt="AI-native GTM growth trend"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Stat counters */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/10 pt-10">
          {[
            { number: "60%", label: "Open rates with signal-driven outbound" },
            { number: "10x", label: "Output per GTM engineer vs. traditional SDR" },
            { number: "36hr", label: "Signal to pipeline with agent fleet" },
            { number: "12min", label: "Total human involvement per deal" },
          ].map((stat) => (
            <div key={stat.label}>
              <span className="text-3xl lg:text-4xl font-bold text-white">{stat.number}</span>
              <p className="text-sm text-white/50 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
