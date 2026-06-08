import { about, hero, resume, socialMediaLinks } from "../../data";

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
- Stack: ${about.stack.join(", ")}

## Resume

- [Live resume document](${resume.url}): Always-current resume (last updated ${resume.updated}).

## Pages

- [Home](${SITE_URL}/): Hero, about, resume, contact.
- [About](${SITE_URL}/#about): Background, stack, focus areas.
- [Resume](${SITE_URL}/#resume): Link to the live resume document.
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
