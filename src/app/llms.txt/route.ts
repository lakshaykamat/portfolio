import { about, hero, experience, projects, socialMediaLinks } from "../../data";

export const dynamic = "force-static";

const SITE_URL = "https://lakshaykamat.netlify.app";

export function GET() {
  const body = `# ${hero.name}

> ${hero.role} — ${hero.tagline}

${about.paragraphs.join("\n\n")}

## Profile

- Name: ${hero.name}
- Role: ${hero.role}
- Location: ${hero.location}
- Stack: ${about.stackGroups.map((g) => `${g.label}: ${g.items.join(", ")}`).join(" · ")}

## Experience

${experience.map((e) => `- ${e.role} — ${e.company} (${e.period}): ${e.summary}`).join("\n")}

## Selected Work

${projects.map((p) => `- ${p.title} (${p.context}, ${p.year}): ${p.description}${p.href ? ` Link: ${p.href}` : ""}`).join("\n")}

## Pages

- [Home](${SITE_URL}/): Hero, about, experience, work, contact.
- [About](${SITE_URL}/#about): Background, stack, focus areas.
- [Experience](${SITE_URL}/#experience): Work history and journey.
- [Work](${SITE_URL}/#work): Selected projects and client work.
- [Contact](${SITE_URL}/#contact): Email and social channels.

## Contact

- Email: ${socialMediaLinks.mail}
- GitHub: ${socialMediaLinks.github}
- LinkedIn: ${socialMediaLinks.linkedIn}
- Twitter: ${socialMediaLinks.twitter}

## Optional

- [sitemap.xml](${SITE_URL}/sitemap.xml): Machine-readable URL index.
- [robots.txt](${SITE_URL}/robots.txt): Crawl policy.
- [Open Graph image](${SITE_URL}/og-image.png): Social preview card.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
