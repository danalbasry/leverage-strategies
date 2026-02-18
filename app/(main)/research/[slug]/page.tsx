import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ContactButton from "@/components/ui/ContactButton";
import KeyTakeaways from "@/components/research/KeyTakeaways";
import RelatedResearch from "@/components/research/RelatedResearch";
import { getResearchBySlug, getRelatedResearch, getAllSlugs } from "@/lib/research";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getResearchBySlug(slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    openGraph: {
      type: "article",
      title: article.metaTitle,
      description: article.metaDescription,
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function ResearchDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getResearchBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedResearch(article.slug, article.relatedSlugs);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Leverage Strategies",
    },
    datePublished: article.date,
  };

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-dark-hero pt-28 pb-14 lg:pt-36 lg:pb-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Badge category={article.category} className="mb-4" />
            <h1 className="text-display-hero font-serif font-bold text-white mb-4">
              {article.title}
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              {article.subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/50">
              <span>{article.author}</span>
              <span>|</span>
              <span>{formattedDate}</span>
              <span>|</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="bg-white py-12 lg:py-20">
        <Container>
          <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[1fr_340px] lg:gap-12">
            {/* Left Column: Overview */}
            <div>
              {/* Article Thumbnail */}
              <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden bg-gray-bg mb-8">
                <Image
                  src={article.thumbnailUrl}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description */}
              <h2 className="text-display-md font-bold text-heading mb-4">
                Overview
              </h2>
              <p className="text-body leading-relaxed text-lg mb-8">
                {article.executiveSummary}
              </p>

              {/* Key Takeaways */}
              <KeyTakeaways takeaways={article.keyTakeaways} />

              {/* What You'll Learn */}
              <div className="mt-10">
                <h2 className="text-display-md font-bold text-heading mb-6">
                  What&apos;s Inside
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {article.sections.map((section, i) => (
                    <div
                      key={section.id}
                      className="flex items-start gap-3 rounded-lg border border-gray-border p-4"
                    >
                      <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-dark-hero text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="text-sm font-medium text-heading leading-snug">
                        {section.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Download Sidebar */}
            <aside className="mt-10 lg:mt-0">
              <div className="sticky top-24 rounded-lg border border-gray-border bg-gray-bg p-6 lg:p-8">
                <h3 className="font-bold text-heading text-lg mb-2">
                  Download the Full Report
                </h3>
                <p className="text-sm text-gray-text mb-6">
                  Get the complete {article.readTime} research report with
                  frameworks, data, and actionable playbooks.
                </p>

                {/* Download Button */}
                <Button
                  href={article.pdfUrl}
                  variant="dark"
                  external
                  className="w-full mb-4"
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download PDF
                </Button>

                <p className="text-xs text-gray-text/70 text-center mb-6">
                  Free download, no sign-up required
                </p>

                <hr className="border-gray-border mb-6" />

                {/* Contact CTA */}
                <h4 className="font-bold text-heading text-sm mb-2">
                  Want to discuss this research?
                </h4>
                <p className="text-sm text-gray-text mb-4">
                  Talk to us about applying these frameworks to your team.
                </p>
                <ContactButton
                  variant="outline"
                  className="w-full text-sm"
                >
                  Talk to Us
                </ContactButton>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Related Research */}
      <RelatedResearch articles={related} />
    </>
  );
}
