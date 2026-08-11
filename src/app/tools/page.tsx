import { tools } from "@/lib/site";
import Link from "next/link";

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Proprietary Tools
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            We don&apos;t just consult; we build. Cyber Analyzer Labs has engineered robust, scalable platforms designed specifically for enterprise risk, compliance, and readiness operations.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {tools.map((tool) => (
            <div key={tool.slug} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-sky-200 hover:shadow-md">
              <div className="h-12 w-12 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">{tool.title}</h2>
              <p className="text-slate-600 leading-relaxed">
                {tool.description}
              </p>
              <div className="mt-8 border-t border-slate-100 pt-6">
                <Link href="/#contact" className="text-sm font-semibold text-sky-600 hover:text-sky-700 inline-flex items-center gap-2">
                  Request a Demo <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
