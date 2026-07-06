"use client";
import Image from "next/image";
import Section from "../Common/Section";
import Reveal from "../Common/Reveal";
import { experience } from "../../../data";

export default function Experience() {
  return (
    <Section id="experience" number="02" title="Experience">
      <ol className="divide-y divide-ink-300 border-t border-ink-300">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.company} delay={i * 0.05} className="group py-10 md:py-14">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
              {/* Left rail — dates */}
              <div className="md:col-span-3 flex md:block items-baseline justify-between">
                <p className="meta">{job.period}</p>
                {job.location && (
                  <p className="meta text-ash-faint md:mt-1">{job.location}</p>
                )}
              </div>

              {/* Body — the job, explained */}
              <div className="md:col-span-6">
                <p className="eyebrow mb-2">{job.role}</p>
                <h3
                  className="font-display text-bone tracking-tightest
                             group-hover:text-accent transition-colors duration-300"
                >
                  {job.company}
                </h3>
                <p className="mt-4 max-w-2xl text-bone-dim text-[17px] leading-relaxed">
                  {job.summary}
                </p>
                {job.highlights.length > 0 && (
                  <ul className="mt-6 space-y-3 max-w-2xl">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-ash text-[15px] leading-relaxed">
                        <span aria-hidden className="mt-[2px] font-mono text-ash-faint select-none">
                          ↳
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Right rail — photos */}
              {job.photos && (
                <div className="md:col-span-3 flex md:flex-col gap-3 md:gap-4">
                  {job.photos.map((p) => (
                    <figure key={p.src} className="w-32 md:w-full">
                      <div className="aspect-[4/5] overflow-hidden rounded-lg border border-ink-300">
                        <Image
                          src={p.src}
                          alt={p.alt}
                          width={400}
                          height={500}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      {p.caption && (
                        <figcaption className="meta mt-1.5">{p.caption}</figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </ol>

      {/* Kind words — straight from Slack */}
      <Reveal className="mt-16 md:mt-20">
        <p className="eyebrow mb-4">Kind words</p>
        <figure className="max-w-3xl">
          <div className="overflow-hidden rounded-xl border border-ink-300">
            <Image
              src="/gallery/slack.png"
              alt="Slack message from Sanjay: Lakshay, I've really liked the way you've been taking ownership of your work. You don't just finish tasks, you actually think through them. You're dependable, easy to work with, and you bring a calm, problem-solving mindset to the team. That makes a real difference."
              width={1580}
              height={210}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="meta mt-2">Sanjay — Octify Technologies</figcaption>
        </figure>
      </Reveal>
    </Section>
  );
}
