// EDIT ME — keep it short. No filler.
export const about = {
  paragraphs: [
    "AI Engineer working on the layer where LLMs meet real users — voice agents, RAG workflows, and agentic automation that has to behave when the demo is over.",
    "I got here through backend: profiling PostgreSQL, fixing N+1 queries, stabilizing APIs. Then data, then product research, then applied GenAI. That path shapes how I build — retrieval design and prompt engineering on top, boring reliable engineering underneath.",
    "The unglamorous parts are the ones I care about most: guardrails, fallbacks, evals, tracing, and knowing what every token costs.",
  ],

  education: {
    degree: "BCA — Data Science",
    school: "Echelon Institute of Technology",
    period: "2022 — 2025",
  },

  // Grouped so the range reads at a glance.
  stackGroups: [
    {
      label: "AI / LLM",
      items: ["LangChain", "LangGraph", "CrewAI", "LlamaIndex", "RAG", "Voice Agents", "Fine-tuning", "LLM Evals"],
    },
    {
      label: "Backend",
      items: ["Python", "TypeScript", "FastAPI", "NestJS", "Node.js", "WebSockets", "Redis Queues"],
    },
    {
      label: "Data / Vector",
      items: ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "Qdrant", "pgvector"],
    },
    {
      label: "MLOps / Cloud",
      items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "LangSmith", "RAGAS", "CI/CD"],
    },
  ],

  // Legacy flat list — kept for anything still importing it.
  stack: ["Python", "TypeScript", "LangChain", "FastAPI", "NestJS", "PostgreSQL"],
};
