import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/research";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://leveragestrategies.ca";

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/research/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/about/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  const researchPages: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${baseUrl}/research/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Static guide pages served from public/guides (trailing slash is part of the URL)
  const guideSlugs = [
    "how-i-work-with-a-small-business",
    "cafe-first-month-with-ai",
    "inventory-dashboard",
    "supplier-price-check",
    "team-ai-setup-first-hour",
    "workshop-first-three-ai-wins",
    "first-30-days-with-ai",
    "restaurant-and-cafe-playbook",
    "retail-shop-playbook",
    "service-firm-playbook",
    "manufacturer-and-maker-playbook",
    "trades-playbook",
    "match-purchase-orders-to-shipping",
    "outreach-that-gets-replies",
    "quickbooks-and-xero-ai",
    "staff-training-manual",
    "workshop-marketing-in-a-morning",
    "workshop-numbers-you-can-trust",
    "ai-for-personal-admin",
    "run-your-business-from-your-phone",
    "how-to-tell-when-ai-is-wrong",
    "10-prompts-every-owner-should-save",
    "ai-words-explained",
    "ai-agents-for-small-business",
    "one-job-several-tools",
    "real-estate-agent-playbook",
  ];

  const guidePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/guides/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...guideSlugs.map((slug) => ({
      url: `${baseUrl}/guides/${slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return [...staticPages, ...researchPages, ...guidePages];
}
