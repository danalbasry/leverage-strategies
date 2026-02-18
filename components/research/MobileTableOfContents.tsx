"use client";

import { useState } from "react";
import type { ArticleSection } from "@/lib/types";

interface MobileTableOfContentsProps {
  sections: ArticleSection[];
}

export default function MobileTableOfContents({
  sections,
}: MobileTableOfContentsProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-8 rounded-lg border border-gray-border bg-gray-bg lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="section-label text-gray-text">On This Page</span>
        <svg
          className={`h-4 w-4 text-gray-text transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <ul className="border-t border-gray-border px-5 py-3 space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-gray-text hover:text-purple-accent transition-colors"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
