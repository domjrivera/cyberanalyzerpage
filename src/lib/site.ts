export const site = {
  name: "Cyber Analyzer Labs, LLC",
  tagline: "Rigorous analysis. Intelligent systems. Real-world impact.",
  description:
    "We build proprietary analysis tools and partner with organizations for bespoke R&D consulting—bringing scientific rigor to complex data challenges.",
  email: "contact@cyberanalyzer.com",
  url: "https://cyberanalyzer.com",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#portfolio", label: "Labs & Portfolio" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
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

export const portfolio = [
  {
    title: "Regulatory Modernization Analytics",
    category: "Enterprise GRC & Safety",
    description:
      "Conducted a nationwide, multi-decade analysis of federal incident data (EPA RMP, OSHA, NRC) for a major industry association. Developed a rule-based, multi-class facility classifier to cleanly disambiguate sector-specific risk, providing the quantitative foundation for regulatory modernization advocacy.",
    link: null,
  },
  {
    title: "LitVille & TrialCounsel",
    category: "Legal Technology",
    description:
      "Applying rigorous evidence-handling standards and advanced analytics to the legal sector. Building proprietary tools that support litigation, e-discovery, and trial counsel workflows with uncompromising accuracy.",
    link: "https://trialcounsel.com",
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