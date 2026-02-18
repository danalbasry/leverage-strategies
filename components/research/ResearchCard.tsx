import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import type { ResearchArticle } from "@/lib/types";

interface ResearchCardProps {
  article: ResearchArticle;
}

export default function ResearchCard({ article }: ResearchCardProps) {
  return (
    <Link
      href={`/research/${article.slug}`}
      className="group block overflow-hidden rounded-lg border border-gray-border bg-white shadow-sm hover:shadow-lg transition-all duration-200"
    >
      {/* Thumbnail */}
      <div className="relative w-full overflow-hidden bg-dark-hero">
        <Image
          src={article.thumbnailUrl}
          alt={article.title}
          width={1200}
          height={675}
          className="w-full h-auto"
        />
      </div>
      {/* Content */}
      <div className="p-5">
        <Badge category={article.category} className="mb-3" />
        <h3 className="text-lg font-bold text-heading mb-2 group-hover:text-purple-accent transition-colors leading-tight">
          {article.title}
        </h3>
        <p className="text-gray-text text-sm line-clamp-2 mb-4">{article.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-text/70">
            {article.author} &middot; {article.readTime}
          </span>
          <span className="text-sm font-semibold text-dark-hero group-hover:text-purple-accent transition-colors inline-flex items-center gap-1">
            Read Article
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
