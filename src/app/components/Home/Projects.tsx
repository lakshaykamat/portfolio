"use client";
import { ArrowUpRight } from "lucide-react";
import Section from "../Common/Section";
import Reveal from "../Common/Reveal";
import { projects } from "../../../data";

export default function Projects() {
  return (
    <Section id="work" number="03" title="Selected Work">
      <ol className="divide-y divide-ink-300 border-t border-ink-300">
        {projects.map((p, i) => {
          const Row = (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16 py-10 md:py-12">
              {/* Index + context rail */}
              <div className="md:col-span-3 flex md:flex-col items-baseline md:items-start justify-between gap-1">
                <span className="font-mono text-xs text-ash-faint select-none" aria-hidden>
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <span className="meta">{p.context}</span>
                <span className="meta text-ash-faint hidden md:block">{p.year}</span>
              </div>

              {/* Body */}
              <div className="md:col-span-9">
                <div className="flex items-start justify-between gap-6">
                  <h3
                    className="font-display text-bone tracking-tightest
                               group-hover:text-accent transition-colors duration-300"
                  >
                    {p.title}
                  </h3>
                  {p.href && (
                    <ArrowUpRight
                      size={24}
                      className="mt-2 shrink-0 text-ash-soft transition-all duration-300
                                 group-hover:text-bone group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden
                    />
                  )}
                </div>
                <p className="mt-4 max-w-2xl text-ash text-[15px] leading-relaxed">
                  {p.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1">
                  {p.tags.map((t) => (
                    <li key={t} className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash-soft">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );

          return (
            <Reveal as="li" key={p.title} delay={i * 0.05} className="group">
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.title}`}
                  className="block"
                >
                  {Row}
                </a>
              ) : (
                Row
              )}
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
