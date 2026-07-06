// EDIT ME — selected work. `context` says who it was for;
// entries with `href` render as links.
export type Project = {
  title: string;
  context: string; // "Personal — Live", "Octify Technologies", ...
  year: string;
  description: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Jobbound",
    context: "Personal — Live",
    year: "2025",
    description:
      "AI job-analysis assistant: fetches and deduplicates listings, scores fit against your resume with structured LLM outputs, finds gaps, and suggests tailored changes. Pre-LLM filtering, token-cost controls, zero-repeat checks, failure isolation.",
    tags: ["LLM Scoring", "Structured Outputs", "Next.js"],
    href: "https://jobbound.vercel.app/",
  },
  {
    title: "Voice Agents for Sales Coaching",
    context: "Octify Technologies",
    year: "2025 — 26",
    description:
      "Voice-agent workflows for AI calling and coaching — prompt chains, tool calling, validated JSON outputs — serving 10k+ requests a day with guardrails, fallbacks, and full tracing.",
    tags: ["Voice Agents", "Tool Calling", "Guardrails"],
  },
  {
    title: "Agentic Growth Automation",
    context: "Octify Technologies",
    year: "2025 — 26",
    description:
      "Autonomous agents for lead generation, SEO monitoring, and WhatsApp/Twitter engagement — API tools, async jobs, Redis state, retries, and failure isolation in NestJS.",
    tags: ["AI Agents", "NestJS", "Redis"],
  },
  {
    title: "Groovo AI",
    context: "Founding build",
    year: "2025 — 26",
    description:
      "Sales conversation practice and marketing content platform for growing teams — built from zero as founding engineer.",
    tags: ["LLM Product", "0 → 1"],
  },
  {
    title: "Feedback Intelligence",
    context: "Filo Edtech",
    year: "2024",
    description:
      "Multi-channel feedback collection, parsing, categorization, and summarization — cut product research cycle time by 32%.",
    tags: ["NLP", "Automation"],
  },
];
