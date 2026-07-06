"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Section from "../Common/Section";
import Reveal from "../Common/Reveal";
import { about, hero, Images } from "../../../data";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function About() {
  const stackRef = useRef(null);
  const stackInView = useInView(stackRef, { once: true, margin: "-15% 0px" });

  return (
    <Section id="about" number="01" title="About">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <Reveal className="md:col-span-7 space-y-5">
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-bone-dim text-xl md:text-2xl leading-relaxed font-light"
                  : "text-ash text-[17px] leading-relaxed"
              }
            >
              {p}
            </p>
          ))}

          <div className="pt-4">
            <p className="eyebrow mb-2">Education</p>
            <p className="text-bone-dim text-[15px]">
              {about.education.degree}
              <span className="text-ash-soft"> — {about.education.school}</span>
            </p>
            <p className="meta mt-1">{about.education.period}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-5">
          <div className="mb-8">
            <Image
              src={Images.profile}
              alt={`Portrait of ${hero.name}`}
              width={800}
              height={800}
              className="h-40 w-40 md:h-48 md:w-48 rounded-full object-cover border border-ink-300"
            />
          </div>
          <motion.div
            ref={stackRef}
            initial="hidden"
            animate={stackInView ? "show" : "hidden"}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="space-y-7"
          >
            {about.stackGroups.map((group) => (
              <motion.div
                key={group.label}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
                }}
              >
                <p className="eyebrow mb-2.5">{group.label}</p>
                <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {group.items.map((s) => (
                    <li key={s} className="font-mono text-[12px] text-bone-dim">
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </Section>
  );
}
