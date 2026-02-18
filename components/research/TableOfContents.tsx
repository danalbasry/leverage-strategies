"use client";

import { useState, useEffect } from "react";
import type { ArticleSection } from "@/lib/types";

interface TableOfContentsProps {
  sections: ArticleSection[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="sticky top-24">
      <p className="section-label text-gray-text mb-4">On This Page</p>
      <ul className="space-y-1 border-l-2 border-gray-border">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`block border-l-2 -ml-0.5 py-1.5 pl-4 text-sm transition-colors ${
                activeId === section.id
                  ? "border-purple-accent text-purple-accent font-medium"
                  : "border-transparent text-gray-text hover:text-heading"
              }`}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
