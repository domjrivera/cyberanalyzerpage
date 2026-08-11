import { CapabilityIcon } from "@/components/CapabilityIcon";
import { approachSteps, capabilities, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32 bg-white">
        <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 glow-orb" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-6">
          <img
            src="/logo.png"
            alt="Cyber Analyzer Labs, LLC"
            className="mb-5 h-20 w-auto sm:h-24 mix-blend-multiply"
            height={96}
            width={75}
          />

          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-600/10 bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-700">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse" />
            D.Eng.-led research · AI & data analysis
          </p>

          <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Turn complex data into{" "}
            <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
              defensible decisions
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            {site.name} builds analysis tools and applications where scientific rigor meets
            modern AI—from GRC and cybersecurity to music, sports, and beyond.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 shadow-sm"
            >
              Explore capabilities
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 shadow-sm"
            >
              Start a conversation
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-slate-200 pt-10 sm:grid-cols-4">
            {[
              { label: "Focus", value: "Research-grade" },
              { label: "Domains", value: "Multi-sector" },
              { label: "Methods", value: "AI + science" },
              { label: "Delivery", value: "Tools & apps" },
            ].map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
                About Cyber Analyzer Labs, LLC
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We are a research-driven firm specializing in data analysis through artificial
                intelligence and scientifically rigorous methods. Our work spans high-stakes
                compliance and security programs as well as creative and analytical tools for
                everyday practitioners.
              </p>
            </div>
            <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-slate-700 leading-relaxed font-medium">
                Led by a Doctor of Engineering (D.Eng.) with direct, hands-on research
                experience, we bring academic depth to product delivery: reproducible methods,
                clear assumptions, and software people actually use.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  Governance, Risk & Compliance tooling across domains
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  Cybersecurity analysis and security research
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  General-purpose apps—from musicians to sports analytics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-24 py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
              Capabilities
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              One rigorous foundation, many applications. We partner on projects where quality of
              analysis and clarity of outcomes matter.
            </p>
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <li
                key={cap.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-sky-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="text-sky-600">
                  <CapabilityIcon name={cap.icon} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{cap.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="approach" className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
              Our approach
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              AI is powerful when it is accountable. We combine modern models with methods that
              stand up to peer review and operational reality.
            </p>
          </div>

          <ol className="mt-14 grid gap-8 md:grid-cols-2">
            {approachSteps.map((step) => (
              <li
                key={step.step}
                className="relative rounded-2xl border border-slate-200 bg-white p-8 pl-20 shadow-sm"
              >
                <span
                  className="absolute left-8 top-8 font-mono text-3xl font-bold text-sky-100"
                  aria-hidden
                >
                  {step.step}
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-10 md:p-14 shadow-sm relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-white pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
                Let&apos;s work together
              </h2>
              <p className="mt-4 max-w-xl text-slate-600 leading-relaxed">
                Whether you need a GRC assessment framework, a security research engagement, or a
                specialized application—we welcome inquiries about new projects and collaborations.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 shadow-sm"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}