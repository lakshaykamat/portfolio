// EDIT ME — role, tagline, status.
export const hero = {
  name: "Lakshay Kamat",
  role: "AI Engineer",
  location: "New Delhi, India",
  // Mono eyebrow above the name — what you actually work on.
  focus: "Voice Agents · RAG · LLM Systems",
  // One-line value prop — what you build and for whom.
  tagline: "I engineer intelligent systems from model to production",
  // Status block shown next to hero. Set `available: false` if not looking.
  status: {
    available: true,
    label: "Available for new work",
    currentlyAt: "Octify Technologies", // change or set to "" to hide
  },
  // Proof, not adjectives. Shown as a strip under the hero.
  stats: [
    { value: "10k+", label: "LLM requests / day" },
    { value: "−30%", label: "latency in production" },
    { value: "−40%", label: "deployment failures" },
    { value: "2 yrs", label: "shipping AI systems" },
  ],
};

// Legacy exports kept so existing imports don't break — safe to remove later.
export const Images = {
  profile: "/pic.png",
};

export const Description = {
  Heading: hero.role,
  caption: hero.tagline,
};
