"use client";

interface ResearchFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories: { value: string; label: string }[] = [
  { value: "all", label: "All" },
  { value: "framework", label: "Frameworks" },
  { value: "research", label: "Research" },
  { value: "blockchain-web3", label: "Blockchain & Web3" },
];

export default function ResearchFilter({
  activeCategory,
  onCategoryChange,
}: ResearchFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onCategoryChange(cat.value)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
            activeCategory === cat.value
              ? "bg-dark-hero text-white shadow-sm"
              : "bg-white text-gray-text border border-gray-border hover:border-heading hover:text-heading"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
