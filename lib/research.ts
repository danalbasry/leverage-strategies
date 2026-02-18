import type { ResearchArticle, ResearchCategory } from "@/lib/types";
import { allResearch } from "@/content/research";

export function getAllResearch(): ResearchArticle[] {
  return allResearch.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getResearchBySlug(slug: string): ResearchArticle | undefined {
  return allResearch.find((article) => article.slug === slug);
}

export function getResearchByCategory(
  category: ResearchCategory
): ResearchArticle[] {
  return getAllResearch().filter((article) => article.category === category);
}

export function getFeaturedResearch(): ResearchArticle[] {
  return getAllResearch().slice(0, 4);
}

export function getRelatedResearch(
  currentSlug: string,
  relatedSlugs: string[]
): ResearchArticle[] {
  return allResearch.filter(
    (article) =>
      article.slug !== currentSlug && relatedSlugs.includes(article.slug)
  );
}

export function getAllSlugs(): string[] {
  return allResearch.map((article) => article.slug);
}
