import { hero, socialMediaLinks } from "../../data";

export const dynamic = "force-static";

export function GET() {
  const body = `/* TEAM */
  Name: ${hero.name}
  Role: ${hero.role}
  Site: https://lakshaykamat.netlify.app
  GitHub: ${socialMediaLinks.github}
  LinkedIn: ${socialMediaLinks.linkedIn}
  Twitter: ${socialMediaLinks.twitter}
  Location: ${hero.location}

/* SITE */
  Last update: ${new Date().getUTCFullYear()}
  Standards: HTML5, CSS3, TypeScript
  Components: Next.js (App Router), React, Tailwind CSS, framer-motion
  Software: VS Code, pnpm
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
