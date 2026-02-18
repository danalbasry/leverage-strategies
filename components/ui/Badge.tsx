import type { ResearchCategory } from "@/lib/types";

interface BadgeProps {
  category: ResearchCategory;
  className?: string;
}

const categoryConfig: Record<ResearchCategory, { label: string; color: string }> = {
  framework: { label: "Framework", color: "bg-purple-accent text-white" },
  research: { label: "Research", color: "bg-dark-hero text-white" },
  "blockchain-web3": { label: "Blockchain & Web3", color: "bg-gray-text text-white" },
  guide: { label: "Guide", color: "bg-purple-accent text-white" },
  "deep-dive": { label: "Deep Dive", color: "bg-dark-hero text-white" },
  trends: { label: "Trends", color: "bg-gray-text text-white" },
};

export default function Badge({ category, className = "" }: BadgeProps) {
  const config = categoryConfig[category];
  return (
    <span
      className={`inline-block rounded px-2.5 py-1 text-xs font-bold tracking-wide uppercase ${config.color} ${className}`}
    >
      {config.label}
    </span>
  );
}
