// EDIT ME — placeholder copy. Replace with your real role, company, status.
export const hero = {
  name: "Lakshay Kamat",
  role: "Full-Stack Engineer",
  location: "India",
  // One-line value prop — what you build and for whom.
  tagline:
    "I build production web applications — backend systems, APIs, and the UI on top.",
  // Status block shown next to hero. Set `available: false` if not looking.
  status: {
    available: true,
    label: "Available for new work",
    currentlyAt: "Octify Technologies", // change or set to "" to hide
  },
};

// Legacy exports kept so existing imports don't break — safe to remove later.
export const Images = {
  profile: "/profile_pic.jpg",
};

export const Description = {
  Heading: hero.role,
  caption: hero.tagline,
};
