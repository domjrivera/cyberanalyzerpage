import Link from "next/link";

const articles = [
  {
    title: "The Challenges of Synthesizing Multi-Agency Federal Incident Data",
    slug: "federal-data-synthesis",
    date: "August 2026",
    excerpt: "Why linking EPA RMP, OSHA enforcement, and NRC incident records requires robust entity resolution and why standard deduplication fails.",
  },
  {
    title: "Moving Beyond Compliance: Predictive Risk Modeling in GRC",
    slug: "predictive-risk-modeling",
    date: "July 2026",
    excerpt: "How forward-thinking enterprises use machine learning to identify hidden compliance gaps before audits happen.",
  },
  {
    title: "Evidentiary Standards in AI for Digital Forensics",
    slug: "evidentiary-standards-ai",
    date: "June 2026",
    excerpt: "When deploying AI in law enforcement and litigation, transparency and reproducible methodologies are paramount. Here's how to build them.",
  }
];

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Insights & Case Examples
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          Our perspectives on navigating complex data ecosystems, applying scientific rigor to AI, and engineering solutions for highly regulated domains.
        </p>

        <div className="mt-16 space-y-12">
          {articles.map((article) => (
            <article key={article.slug} className="group relative flex flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={article.date} className="text-slate-500">
                  {article.date}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-xl font-semibold leading-6 text-slate-900 group-hover:text-sky-600 transition-colors">
                  <Link href={`/articles/${article.slug}`}>
                    <span className="absolute inset-0" />
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600 text-sm">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
