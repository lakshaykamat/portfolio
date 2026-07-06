// EDIT ME — the journey. Main entries get full treatment,
// `earlier` renders as a compact single-line list.
export type ExperiencePhoto = {
  src: string;
  alt: string;
  caption?: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  photos?: ExperiencePhoto[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Octify Technologies",
    role: "AI Engineer",
    period: "Jan 2025 — Jun 2026",
    location: "Gurugram",
    summary:
      "Joined as an AI engineering intern, converted to full-time in six months. Owned LLM systems end to end — voice agents, retrieval, and agentic automation.",
    highlights: [
      "Built voice-agent workflows for AI calling and sales coaching — prompt design, tool calling, schema-validated JSON outputs.",
      "Designed RAG pipelines with embeddings, vector search, and retrieval filters grounded in business and product context.",
      "Shipped agentic automation for lead generation, SEO monitoring, and WhatsApp/Twitter outreach — NestJS, async jobs, Redis state, retries, failure isolation.",
      "Hardened LLM flows for 10k+ requests a day: prompt versioning, guardrails, fallbacks, tracing, cost and latency tracking.",
    ],
    photos: [
      {
        src: "/gallery/spaze-palazo.jpeg",
        alt: "Spaze Palazo office tower in Gurugram, home of Octify Technologies",
        caption: "Spaze Palazo, Gurugram",
      },
      {
        src: "/gallery/meeting.jpeg",
        alt: "Laptop on a desk during a team video call in the office",
        caption: "Mid-meeting",
      },
    ],
  },
  {
    company: "Groovo AI",
    role: "Founding Engineer",
    period: "Jun 2025 — Jun 2026",
    summary:
      "First engineer on a platform for growing teams that want to practice better sales conversations and produce marketing content more efficiently.",
    highlights: [
      "Built the product from zero — AI conversation-practice flows and content pipelines for sales and marketing teams.",
    ],
    photos: [
      {
        src: "/gallery/speech-placeholder.png",
        alt: "Abstract sound-wave illustration representing conversation practice",
      },
    ],
  },
  {
    company: "Filo Edtech",
    role: "Product Research Intern",
    period: "Sep 2024 — Nov 2024",
    location: "Gurugram",
    summary:
      "Turned scattered multi-channel user feedback into something the product team could actually act on.",
    highlights: [
      "Built an internal feedback automation tool to collect, parse, categorize, and summarize feedback — research cycle time down 32%.",
      "Analyzed onboarding data, surfaced 3 high-friction points, helped lift retention by 5%.",
    ],
    photos: [
      {
        src: "/gallery/filo.png",
        alt: "Team presentation at the Filo office, with Filo branding on the screens",
        caption: "All-hands at Filo",
      },
    ],
  },
  {
    // EDIT ME — summary/highlights are placeholders; describe what you actually built here.
    company: "Panda Guys",
    role: "Backend Developer",
    period: "Jul 2024 — Aug 2024",
    location: "Delhi",
    summary:
      "Short backend stint building and maintaining REST APIs for client projects, working out of the HestaBit building.",
    highlights: [],
    photos: [
      {
        src: "/gallery/hestabit.jpeg",
        alt: "HestaBit building in Delhi, where Panda Guys worked from",
        caption: "HestaBit building, Delhi",
      },
    ],
  },
  {
    company: "Get Now Solutions",
    role: "Backend Developer Intern",
    period: "Apr 2024 — Jul 2024",
    location: "Delhi",
    summary: "First production backend work — where the performance instincts come from.",
    highlights: [
      "Profiled PostgreSQL query paths in CRM APIs, fixed N+1 patterns, added indexes — p95 latency from ~800ms to under 200ms.",
      "Root-caused recurring REST API failures, cutting the backend bug rate by 40%.",
    ],
    photos: [
      {
        src: "/gallery/building-placeholder.png",
        alt: "Abstract line illustration of office buildings",
      },
    ],
  },
];

