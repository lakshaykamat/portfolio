"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Section from "../Common/Section";
import { socialMediaLinks } from "../../../data";
import { ArrowUpRight, Check, Copy } from "lucide-react";

const easeOut = [0.22, 1, 0.36, 1] as const;

type Channel = {
  label: string;
  value: string;
  href: string;
  copy?: string;
};

const channels: Channel[] = [
  { label: "Email",    value: socialMediaLinks.mail,  href: `mailto:${socialMediaLinks.mail}`, copy: socialMediaLinks.mail },
  { label: "LinkedIn", value: "lakshaykamat",         href: socialMediaLinks.linkedIn },
  { label: "GitHub",   value: "lakshaykamat",         href: socialMediaLinks.github },
  { label: "Twitter",  value: "@Lakshaykamat",        href: socialMediaLinks.twitter },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied((c) => (c === label ? null : c)), 1800);
    } catch {
      // Clipboard API blocked — let the surrounding <a> handle navigation.
    }
  };

  return (
    <Section id="contact" number="05" title="Contact">
      <motion.ul
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="divide-y divide-ink-300 border-y border-ink-300"
      >
        {channels.map((c) => {
          const isCopied = copied === c.label;
          const isExternal = !c.href.startsWith("mailto:");
          return (
            <motion.li
              key={c.label}
              variants={{
                hidden: { opacity: 0, x: 12 },
                show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
              }}
              className="group relative flex items-center justify-between gap-4 py-5 md:py-6"
            >
              <a
                href={c.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="absolute inset-0 z-0"
                aria-label={`Open ${c.label}`}
              />
              <span className="relative z-10 font-mono text-[11px] uppercase tracking-[0.18em] text-ash-soft pointer-events-none">
                {c.label}
              </span>
              <span className="relative z-10 flex items-center gap-2 sm:gap-3 text-bone font-display text-base sm:text-xl md:text-2xl
                               group-hover:text-accent transition-colors duration-300 pointer-events-none min-w-0">
                {c.value}
                {c.copy ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleCopy(c.copy!, c.label);
                    }}
                    aria-label={isCopied ? `${c.label} copied` : `Copy ${c.label}`}
                    className="pointer-events-auto relative z-20 ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-ink-400 text-ash-soft hover:border-bone hover:text-bone transition-colors"
                  >
                    {isCopied ? <Check size={13} /> : <Copy size={13} />}
                  </button>
                ) : (
                  <ArrowUpRight
                    size={18}
                    className="text-ash-soft transition-all duration-300
                               group-hover:text-bone group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                )}
              </span>
              {isCopied && (
                <span
                  role="status"
                  aria-live="polite"
                  className="absolute right-0 -bottom-1 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400 z-10"
                >
                  Copied
                </span>
              )}
            </motion.li>
          );
        })}
      </motion.ul>
      <p className="meta mt-6 text-ash-soft text-center">
        No mail app? Tap the copy icon to grab the address.
      </p>
    </Section>
  );
}
