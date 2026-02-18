"use client";

import { useState } from "react";
import type { ResearchArticle } from "@/lib/types";
import ResearchFilter from "./ResearchFilter";
import ResearchGrid from "./ResearchGrid";

interface ResearchListingProps {
  articles: ResearchArticle[];
}

export default function ResearchListing({ articles }: ResearchListingProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div>
      <div className="mb-8">
        <ResearchFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>
      <ResearchGrid articles={filtered} />
    </div>
  );
}
