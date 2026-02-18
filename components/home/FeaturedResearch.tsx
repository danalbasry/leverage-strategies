import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ResearchCard from "@/components/research/ResearchCard";
import { getFeaturedResearch } from "@/lib/research";

export default function FeaturedResearch() {
  const articles = getFeaturedResearch();

  return (
    <Section theme="white">
      <Container>
        <h2 className="text-display-xl font-serif font-bold text-heading mb-3">
          Trusted insights are not everywhere.
        </h2>
        <p className="max-w-2xl text-gray-text mb-10">
          Practitioner-built research for executive teams making the shift to
          AI-native revenue operations.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <ResearchCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
