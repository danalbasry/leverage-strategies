import type { ResearchArticle } from "@/lib/types";
import ResearchCard from "./ResearchCard";

interface ResearchGridProps {
  articles: ResearchArticle[];
}

export default function ResearchGrid({ articles }: ResearchGridProps) {
  if (articles.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-gray-text">
          No research articles in this category yet. Check back soon.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {articles.map((article) => (
        <ResearchCard key={article.slug} article={article} />
      ))}
    </div>
  );
}
