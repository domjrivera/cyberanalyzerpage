export const site = {
  name: "Cyber Analyzer Labs, LLC",
  tagline: "Rigorous analysis. Intelligent systems. Real-world impact.",
  description:
    "We build proprietary analysis tools and partner with organizations for bespoke R&D consulting—bringing scientific rigor to complex data challenges.",
  email: "contact@cyberanalyzer.com",
  url: "https://cyberanalyzer.com",
} as const;

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/tools", label: "Tools" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/articles", label: "Insights" },
  { href: "/#contact", label: "Contact" },
] as const;

export const capabilities = [
  {
    title: "Governance, Risk & Compliance",
    description:
      "Enterprise-scale GRC analysis. We map controls, assess risk postures, and synthesize massive federal datasets (e.g., EPA, OSHA, NRC) into actionable regulatory insights.",
    icon: "shield",
  },
  {
    title: "Cybersecurity & Evidence Analytics",
    description:
      "Threat modeling and evidence-based assessments grounded in prosecutorial discipline. We build analytical systems that withstand scrutiny from regulators and skeptical reviewers.",
    icon: "lock",
  },
  {
    title: "Bespoke R&D Consulting",
    description:
      "Partner on complex, high-stakes projects. We bring doctoral-level depth to design novel methods, prototypes, and production systems tailored to your domain.",
    icon: "flask",
  },
] as const;

export const tools = [
  {
    title: "Regulatory Readiness Analysis Tools",
    slug: "regulatory-readiness",
    description: "Automated assessment frameworks to test and prepare enterprise operations against emerging state and federal compliance mandates before regulatory audits.",
  },
  {
    title: "Risk Management Dashboards",
    slug: "risk-dashboards",
    description: "Executive-level visibility platforms that synthesize threat intelligence, compliance gaps, and operational metrics into defensible, real-time risk postures.",
  },
];

export const portfolio = [
  {
    title: "Regulatory Modernization Analytics",
    category: "Enterprise GRC & Safety",
    description:
      "Conducted a nationwide, multi-decade analysis of federal incident data (EPA RMP, OSHA, NRC) for a major industry association. Developed a rule-based, multi-class facility classifier to cleanly disambiguate sector-specific risk, providing the quantitative foundation for regulatory modernization advocacy.",
    link: null,
  },
  {
    title: "CyberForensix",
    category: "Digital Forensics",
    description:
      "The AI-driven digital forensics platform for forward-thinking law enforcement and intelligence agencies. Built to process, structure, and analyze digital evidence 10x faster under rigorous evidentiary standards.",
    link: "https://cyberforensix.com",
  },
  {
    title: "TrialCounsel Research Assistant",
    category: "Legal Technology",
    description:
      "An advanced AI research assistant built specifically for litigation and trial preparation. It applies prosecutorial precision to case law, enabling attorneys to find defensible precedents rapidly.",
    link: "https://trialcounsel.com",
  },
  {
    title: "LitVille Music Studio",
    category: "Creative Technology",
    description:
      "An AI-powered music studio platform providing advanced track separation, chord detection, and granular speed/pitch control for musicians and audio professionals.",
    link: "https://litville.com",
  },
  {
    title: "FFOptimizer",
    category: "Sports Analytics",
    description:
      "Bringing predictive risk modeling and statistical inference to the sports domain. FFOptimizer delivers advanced decision support and performance modeling for competitive fantasy sports analysts.",
    link: "https://ffoptimizer.com",
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
    body: "Measure results in the field, refine models and UX, and deliver outcomes that hold up under evidentiary scrutiny.",
  },
] as const;