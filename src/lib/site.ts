export const site = {
  name: "Cyber Analyzer LLC",
  tagline: "Rigorous analysis. Intelligent systems. Real-world impact.",
  description:
    "Research-driven AI and data analysis for governance, cybersecurity, creative tools, sports analytics, and beyond.",
  email: "contact@cyberanalyzer.com",
  url: "https://cyberanalyzer.com",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
] as const;

export const capabilities = [
  {
    title: "Governance, Risk & Compliance",
    description:
      "GRC analysis tools tailored to cybersecurity and other regulated domains—mapping controls, assessing risk postures, and turning policy into actionable insight.",
    icon: "shield",
  },
  {
    title: "Cybersecurity Research",
    description:
      "Threat modeling, security analytics, and evidence-based assessments grounded in direct research experience and scientific method.",
    icon: "lock",
  },
  {
    title: "Cross-Domain Analysis",
    description:
      "The same rigorous frameworks apply wherever data matters: from compliance programs to operational research across industries.",
    icon: "layers",
  },
  {
    title: "Creative & General Applications",
    description:
      "Practical tools for musicians, creators, and everyday workflows—where thoughtful design meets solid engineering.",
    icon: "music",
  },
  {
    title: "Sports Analytics",
    description:
      "Performance modeling, statistical inference, and decision support for teams and analysts who need more than dashboards.",
    icon: "chart",
  },
  {
    title: "Custom Research & Development",
    description:
      "Partner on bespoke projects: novel methods, prototypes, and production systems built with PhD-level depth and delivery focus.",
    icon: "flask",
  },
] as const;

export const approachSteps = [
  {
    step: "01",
    title: "Define the question",
    body: "Start with precise hypotheses and measurable outcomes—not buzzwords. Scope what success looks like before writing code.",
  },
  {
    step: "02",
    title: "Ground in evidence",
    body: "Use peer-reviewed methods, reproducible pipelines, and transparent assumptions. AI augments analysis; it does not replace rigor.",
  },
  {
    step: "03",
    title: "Build & validate",
    body: "Ship tools that practitioners can trust: tested, documented, and validated against real data and domain expertise.",
  },
  {
    step: "04",
    title: "Iterate with impact",
    body: "Measure results in the field, refine models and UX, and deliver outcomes that hold up under scrutiny.",
  },
] as const;