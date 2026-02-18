export interface ArticleSection {
  id: string;
  title: string;
  content: string;
}

export type ResearchCategory =
  | "framework"
  | "research"
  | "blockchain-web3"
  | "guide"
  | "deep-dive"
  | "trends";

export interface ResearchArticle {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: ResearchCategory;
  date: string;
  readTime: string;
  author: string;
  keyTakeaways: string[];
  executiveSummary: string;
  sections: ArticleSection[];
  pdfUrl: string;
  slidesUrl?: string;
  slidesPdfUrl?: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  relatedSlugs: string[];
  thumbnailUrl: string;
  coverBg: string;
}

export interface CategoryMeta {
  slug: ResearchCategory;
  label: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  track: "enterprise" | "smb";
  deliverables?: string[];
  audience?: string;
  url?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
