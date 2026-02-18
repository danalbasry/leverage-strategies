import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import ResearchCard from "./ResearchCard";
import type { ResearchArticle } from "@/lib/types";

interface RelatedResearchProps {
  articles: ResearchArticle[];
}

export default function RelatedResearch({ articles }: RelatedResearchProps) {
  if (articles.length === 0) return null;

  return (
    <Section theme="gray">
      <Container>
        <SectionLabel>Continue Reading</SectionLabel>
        <h2 className="text-display-lg font-serif font-bold text-heading mt-3 mb-8">
          Related Research
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <ResearchCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
