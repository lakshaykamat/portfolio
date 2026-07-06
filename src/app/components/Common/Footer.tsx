import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { socialMediaLinks } from "../../../data";

const socials = [
  { href: socialMediaLinks.github,   label: "GitHub",   Icon: Github },
  { href: socialMediaLinks.linkedIn, label: "LinkedIn", Icon: Linkedin },
  { href: socialMediaLinks.twitter,  label: "Twitter",  Icon: Twitter },
  { href: `mailto:${socialMediaLinks.mail}`, label: "Email", Icon: Mail },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-300 mt-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-8 flex flex-wrap items-center justify-between gap-4">
        <p className="meta">© {year} Lakshay Kamat</p>
        <div className="flex gap-5">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer me"
              aria-label={label}
              className="text-ash hover:text-bone transition-colors"
            >
              <Icon className="w-4 h-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
